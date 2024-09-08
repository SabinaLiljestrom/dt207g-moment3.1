/**
 * Webbtjänst för arbetserfarenheter med MongoDB och express
 * Av Sabina Liljeström
 */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//init express
const app = express();
let port = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());
//connect to mongodb
mongoose.connect("mongodb://localhost:27017/workexperience").then(()=>{
    console.log("connected to MongoDB");
}).catch((error)=>{
    console.log("error connecting to database:" + error);
})


//routes
app.get("/api", async (req, res)=>{
    res.json({message:"welcome to this API"});
});

app.listen(port, ()=>{
    console.log("server is running on port:" + port);
});