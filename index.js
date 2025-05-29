if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const listing = require('./models/listing.js');
const path = require('path');
const ejsMate = require('ejs-mate');
const flash = require("connect-flash");
const session = require('express-session');
const methodOverride = require('method-override');
const ExpressError = require("./ExpressError.js");
const Review = require('./models/review.js');
const wrapAsync = require("./utils/wrapAsync.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const {sessionUrl,isLoggedIn} = require("./middleware.js");
const { pathToRegexp, match } = require("path-to-regexp");
const axios = require("axios");

//mongoose server
let Db_url = process.env.DB_URL;
// const MongoUrl = "mongodb://127.0.0.1:27017/E-commerce";
async function Main(){
    await mongoose.connect(Db_url);
}
Main().then(()=>{
    console.log("successfully connected to DB");
}).catch((err)=>{
    console.log(err);
});
//middlewares

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));
app.use(flash());
app.use(session({
    secret: "mysupersecretkeycode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
}));
//passport 
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//flash
app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
});

//paths

app.listen(8080,function(){
    console.log("app is listening...");
});
// app.use((req,res)=>{
//     console.log("request recevied");
// });
//home page
app.get("/",wrapAsync(async(req,res)=>{

    try{res.render("home.ejs");}catch(err){console.log(err)}
    
}));
//search
app.get("/E-commerce/homepage/allcategories/monitors/keyboards/controllers/mouse/graphiccards/search",wrapAsync(async(req,res)=>{
    try{
        //console.log("for query:",req.query);
    let searchValue = req.query.search;
    //console.log("search value:",searchValue);
    let results = await listing.find({
        $or:[
            { category: { $regex: `^${searchValue}`, $options: "i" } }, // Search in categories
            { productName: { $regex: `^${searchValue}`, $options: "i" } }, // Search in product names
            { brand: { $regex: `^${searchValue}`, $options: "i" } } 
        ]
    });
    //console.log(results);
    //res.send("got it");
    res.render("searchresult.ejs",{listing: results});
    }catch(err){
        console.log(err);
    }

}));
//search autocomplete
app.get("/E-commerce/homepage/allcategories/monitors/keyboards/controllers/mouse/graphiccards/autocomplete", async (req, res) => {
    let searchValue = req.query.q;

    let brandMatches = await listing.find({
        brand: { $regex: `^${searchValue}`, $options: "i" }
    }).limit(5);

    let otherMatches = await listing.find({
        $or: [
            { category: { $regex: `^${searchValue}`, $options: "i" } },
            { productName: { $regex: `^${searchValue}`, $options: "i" } }
        ]
    }).limit(5);

    // Combine results with brand priority
    let uniqueSuggestions = [...new Set([...brandMatches.map(b => b.brand), ...otherMatches.map(o => o.productName || o.category)])];

    res.json(uniqueSuggestions);
});
//listing products
app.get("/:category",wrapAsync(async(req,res)=>{
    let category = req.params;
    let data = await listing.find(category);
    let sideData = await listing.find(category);
    let stableSideData = JSON.parse(JSON.stringify(sideData));
    res.render("listing.ejs", { listing: data, side: stableSideData });
    
    // for(let i=0;i<monitors.length;i++){
    //     console.log(monitors[i].image,"..",monitors[i].title);
    // }
    // res.send("data is sent");
    // res.render("listing.ejs",{listing: data});
}));
//filters

app.get("/:category/filters",wrapAsync(async(req,res)=>{
    let category = req.params.category;
    let price = req.query.price;
    let brand = req.query.brand;
    let discount = req.query.discount;
    let sideData = await listing.find({category});
    let stableSideData = JSON.parse(JSON.stringify(sideData));
    // console.log(brand,"..",price,"..",discount);
    try{
        if(discount!=undefined){
            let filters1 = await listing.find({$and:[
                {discount: {$lte: discount}},
                {category: category}
            ]});
            res.render("listing.ejs",{listing: filters1,side: stableSideData});
        }else{
            if(brand){
                let filters2 = await listing.find({$and:[
                    {brand},
                    {category: category}
                ]});
                res.render("listing.ejs",{listing: filters2,side: stableSideData});
             }//else if(brand){
            //     let filters2 = await listing.find({
            //             $and: [
            //                 {brand: brand},
            //                 {category: category}
            //             ]
            //     });
            //     res.render("listing.ejs",{listing: filters2,side: stableSideData});
            // }
            else{
                let filters2 = await listing.find({
                    $and: [
                      { price: { $lte: price } },
                      {category: category}
                    ]
                  });
                  res.render("listing.ejs",{listing:filters2,side: stableSideData});
            }
            
            // if(filters2==[]){
            //     req.flash("error","there is no products beyond this price");
            //     res.redirect("/monitors");
                
            // }else{
            //     res.render("listing.ejs",{listing: filters2,side: stableSideData});
            // }
        }
    }catch(err){
        console.log(err);
    }
    // res.send("response received for filters");
    
}));
app.get("/:category/:id",wrapAsync(async(req,res)=>{
    let {category,id} = req.params;
    // console.log(category,"..",id);
    let details = await listing.findById(id).populate({path: "review",populate: {path: "user"}});
    //console.log(details);
    let data = await listing.find({category: category});
    let relatedProducts = data.slice(0,10);
    relatedProducts = relatedProducts.filter(item=>!item._id.equals(details._id));
    //console.log(relatedProducts);
    
    // console.log(relatedProducts);
    // relatedProducts.pull(details);
    res.render("route.ejs",{details,relatedProducts});
    // res.send('sent');
}));
//about page
app.get("/E-commerce/homepage/allcategories/monitors/keyboards/controllers/mouse/graphiccards/about",(req,res)=>{
    res.render("about.ejs");
});


//reviews
app.post("/:category/:id/review",isLoggedIn,async(req,res)=>{
    let {category,id} = req.params;
    let{comment,rating}=req.body;
    // console.log(comment,"..",rating);
    let product = await listing.findById(id);
    let newReview = new Review({
        rating: rating,
        comment: comment,
    });
    newReview.user=req.user._id;
    product.review.push(newReview);
    // console.log(newReview);
    // console.log(product);
    await newReview.save();
    await product.save();
    req.flash("success","Review added successfully");
    res.redirect(`/${category}/${id}`);
});
//delete reviews
app.delete("/:category/:id/review/:reviewId",wrapAsync(async(req,res)=>{
    let {category,id,reviewId} = req.params;
    let result = await Review.findByIdAndDelete(reviewId);
    let result1 = await listing.findById(id);
    result1.review.pull(reviewId);
    result1.save();
    // console.log(result);
    req.flash("success","Review deleted successfully");
    res.redirect(`/${category}/${id}`);
}));

//login & signup
app.get("/E-commerce/authentication/signup",(req,res)=>{
    res.render("../Users/signup.ejs");
});
app.post("/E-commerce/authentication/signup", wrapAsync(async (req, res) => {
    try {
        let { email, username, password } = req.body;
        const api = process.env.EMAIL_CHECK_API_KEY;
        const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${api}&email=${email}`;

        try {
            const response = await axios.get(url);
            const data = response.data;

            //console.log("Email Validation Response:", data); // Debugging

            if (!data.is_valid_format.value) {
                req.flash("error", "Invalid email format!");
                return res.redirect("/E-commerce/authentication/signup");
            }

            if (data.is_disposable_email.value) {
                req.flash("error", "Disposable emails are not allowed!");
                return res.redirect("/E-commerce/authentication/signup");
            }
            if (!data.is_smtp_valid.value || data.deliverability === "UNDELIVERABLE") {
                req.flash("error", "Email address cannot receive messages. Please enter a valid email.");
                return res.redirect("/E-commerce/authentication/signup");
              }

            let newUser = new User({ email, username });
            let registeredUser = await User.register(newUser, password);
            req.login(registeredUser,(err)=>{
                if(err){
                    return next(err);
                }
                req.flash("success", "Welcome to E-commerce!");
                res.redirect("/E-commerce/homepage/allcategories/monitors/keyboards/controllers/mouse/graphiccards"); 
            });
        } catch (err) {
            console.error("Email Validation API Error:", err.message);
            req.flash("error", "Email validation failed. Please try again.");
            res.redirect("/E-commerce/homepage/allcategories/monitors/keyboards/controllers/mouse/graphiccards");
        }
    } catch (e) {
        console.error("Signup Error:", e.message);
        req.flash("error", e.message);
        res.redirect("/E-commerce/homepage/allcategories/monitors/keyboards/controllers/mouse/graphiccards");
    }
}));
//login
app.get("/E-commerce/authentication/login",wrapAsync(async(req,res)=>{
    res.render("../Users/login.ejs");
}));
app.post("/E-commerce/authentication/login",sessionUrl,passport.authenticate("local",{failureRedirect : "/E-commerce/authentication/login", failureFlash : true}),async(req,res)=>{
    req.flash("success","Welcome back");
    req.session.username = req.body.username;
    let redirectUrl = res.locals.redirectUrl || "/E-commerce/homepage/allcategories/monitors/keyboards/controllers/mouse/graphiccards";
    res.redirect(redirectUrl);
    
});

//logout
app.get("/E-commerce/authentication/logout",wrapAsync(async(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","successfully logged out");
        res.redirect("/E-commerce/homepage/allcategories/monitors/keyboards/controllers/mouse/graphiccards");
    });
}));
//wishlist
//add to wishlist
app.post("/:category/wishlist/:id",isLoggedIn,async(req,res,next)=>{
    try{
        let {category,id} = req.params;
    let person = await User.findById(req.user.id);
    await person.wishlist.push(id);
    await person.save();
    let redirectUrl = res.locals.redirectUrl || `/${category}`;
    req.flash("success","Added to wish list");
    res.redirect(redirectUrl);
    }catch(err){
        console.log(err);
    }

});
//wishlistpage
app.get("/E-commerce/user/wishlist",isLoggedIn,wrapAsync(async(req,res,next)=>{
    try{
    let user = await User.findById(req.user.id);
    let data = [];
    for(let list of user.wishlist){
        let listData = await listing.findById(list);
        // console.log(listData);
        data.push(listData);
    }
    // console.log(data);
    res.render("wishlist.ejs",{data});
    
    }catch(err){
        console.log(err);
    }
}));
//delete wishlist
app.delete("/:category/wishlist/:id/delete",wrapAsync(async(req,res,next)=>{
    let {category,id} = req.params;
    let user = await User.findById(req.user.id);
    await user.wishlist.pull(id);
    await user.save();
    // console.log(result);
    req.flash("success","one item is removed from wish list");
    res.redirect("/E-commerce/user/wishlist");
}));
//CART
//add to cart
app.post("/:category/cart/:id",isLoggedIn,wrapAsync(async(req,res,next)=>{
    let {category,id} = req.params;
    let user = await User.findById(req.user.id);
    await user.cart.push(id);
    await user.save();
    let redirectUrl = res.locals.redirectUrl || `/${category}`;
    req.flash("success","Added to Cart!");
    res.redirect(redirectUrl);
    
}));
//cart page
app.get("/E-commerce/user/Shoppingcart",isLoggedIn,wrapAsync(async(req,res,next)=>{
    
    let user = await User.findById(req.user.id);
    let data = [];
    for(let list of user.cart){
        let listData = await listing.findById(list);
        // console.log(listData);
        data.push(listData);
    }
    // console.log(data);
    res.render("cart.ejs",{data});
    
}));
//remove from cart
app.delete("/:category/cart/:id/delete",isLoggedIn,wrapAsync(async(req,res,next)=>{
    let {category,id} = req.params;
    let user = await User.findById(req.user.id);
    await user.cart.pull(id);
    await user.save();
    // console.log(result);
    req.flash("success","one item is removed from Wishlist");
    res.redirect("/E-commerce/user/Shoppingcart");
}));
//BUY options
//delivery options
app.get("/E-commerce/user/buy/step-1",isLoggedIn,wrapAsync(async(req,res)=>{
    let user = await User.findById(req.user._id);
    res.render("buy1.ejs",{user});
}))
app.post("/E-commerce/user/buy/step-1",isLoggedIn,wrapAsync(async(req,res)=>{
    req.session.quantity = Number(req.body.productquantity);
    let user = await User.findById(req.user.id);
    // console.log(user);
    // console.log(Array.isArray(user.address)); // Should return true

    res.render("buy1.ejs",{user});
}));
//getting new delivery address

app.post("/E-commerce/user/buy/step-1/addAddress",isLoggedIn,wrapAsync(async(req,res)=>{
    // console.log(req.body);
    let {fullname,mobile,pincode,flat,village,city,state} = req.body;
    // console.log({fullname,mobile,pincode,flat,village,city,state});
    req.session.phone = mobile;
    let user = await User.findById(req.user.id);
    await user.address.push({fullname,mobile,pincode,flat,village,city,state});
    await user.save();
    req.flash("success","New address is added!");
    res.redirect("/E-commerce/user/buy/step-1");
}));
//payment method
app.post("/E-commerce/user/buy/step-2/paymentmethod",isLoggedIn,wrapAsync(async(req,res)=>{
    
    let value = req.body.address;
    req.session.deliveryvalue = Number(value);
    let user = await User.findById(req.user.id);
    let address = user.address[req.session.deliveryvalue];
    res.render("payment.ejs",{data: address});
}));
//shipping details
app.get("/E-commerce/user/buy/step-3/shippingdetails",isLoggedIn,wrapAsync(async(req,res)=>{
    let user = await User.findById(req.user.id);
    let cartdata = [];
    for(let list of user.cart){
        let data = await listing.findById(list);
        cartdata.push(data);
    }
    let address = user.address[req.session.deliveryvalue];

    res.render("shipping.ejs",{cart: cartdata,address: address,quantity: req.session.quantity});
}));
//final step
//place order
app.get("/E-commerce/user/buy/orderplace",isLoggedIn,wrapAsync(async(req,res)=>{
    let today = new Date();
    let next3rdDay = new Date();
next3rdDay.setDate(today.getDate() + 6);

let deliveryDate = next3rdDay.toLocaleString("en-US", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric"
});
//console.log("delivery date: ",deliveryDate);
let user = await User.findById(req.user.id);
let message;
for(let cart of user.cart){
    let productId = cart;
    let arrivingTo = user.address[req.session.deliveryvalue];
    let quantity = Number(req.session.quantity);
    //console.log("order:","productid:",productId," orderedAt:",today," arrivingTo:",arrivingTo," arrivingAt:",deliveryDate,"..quantity:",quantity);
    await user.orders.push({productId: productId,arrivingAt: deliveryDate,arrivingTo: arrivingTo,quantity: quantity});
    await user.save();
    //message
    message = `Thank you for your order! Your order for ${productId} is confirmed. It will arrive at ${deliveryDate}.`
    
}
for(let cart of user.cart){
    await user.cart.pull(cart);
    await user.save();
}
//send message
let phone = req.session.phone;
// await sendSMS(phone,message);

req.flash("success","order is placed!");
res.redirect("/E-commerce/user/orders");
 //res.send("sent");

// await user.orders.push()
// res.send('sent');
}));
//orderpage
app.get("/E-commerce/user/orders",isLoggedIn,wrapAsync(async(req,res)=>{
    let user = await User.findById(req.user.id);
    let data = [];
    for(let list of user.orders){
        //console.log(list.productId);
        let productdata = await listing.findById(list.productId);
        //console.log(productdata);
        data.push(productdata);
    }
    let orders = user.orders;
    // let address = user.address[req.session.deliveryvalue];
    // console.log(address);
    // console.log({data},{orders},req.session.quantity);
    //res.send("sent");
     res.render("order.ejs",{products: data,orders});
}));
//delete order
app.delete("/E-commerce/user/orders/:id/delete",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    // console.log(id);
    let user = await User.findById(req.user._id);
    user.orders.pull(id);
    await user.save();
    req.flash("success","Your order is cancelled");
    res.redirect("/E-commerce/user/orders");
}));
//send sms
// async function sendSMS(phone, message) {
//     try {
//         const response = await axios.post("https://www.fast2sms.com/dev/bulkV2", {
//             sender_id: "FSTSMS",
//             message: message,      // SMS content
//             language: "english",   // Language (optional)
//             route: "q",            // Route type (transactional/promotional)
//             numbers: phone         // Recipient's mobile number
//         }, {
//             headers: {
//                 "authorization": process.env.SMSAPIKEY ,// ✅ Replace with your API key
//                 "Content-Type":"application/json"
//             }
//         });

//         console.log("SMS Sent:", response.data);
//     } catch (error) {
//         console.error("SMS Sending Error:", error);
//     }
// }

//errors
app.all(pathToRegexp("/:splat*"), (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});
app.use((req,res,next)=>{
    res.locals.username = req.session.username || "Guest";
    next();
});
app.use((err,req,res,next)=>{
    let {status= 500, message="something went wrong!"} = err;
    res.status(status).render("error.ejs",{ err });
});
