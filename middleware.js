module.exports.sessionUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};
module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        // console.log(req.session.redirectUrl);
        req.flash("error","You must be logged in");
        return res.redirect("/E-commerce/authentication/login");
    }
    next();
}