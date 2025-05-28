const mongoose = require('mongoose');
const monitors = require('./monitors.js');
const keyboards = require('./keyboard.js');
const mouse = require('./mouse.js');
const headphones = require('./headphone.js');
const controller = require('./controller.js');
const graphicCard = require('./graphic card.js');
const listing = require('../models/listing');

Main().then(()=>{
    console.log("connected successfully");
}).catch((err)=>{
    console.log(err);
});

async function Main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/E-commerce");

}

const initdb = async()=>{
    await listing.deleteMany({});
    await listing.insertMany(monitors.data);
    await listing.insertMany(keyboards.data);
    await listing.insertMany(mouse.data);
    await listing.insertMany(headphones.data);
    await listing.insertMany(controller.data);
    await listing.insertMany(graphicCard.data);
    console.log("data is initilized");
}
initdb();