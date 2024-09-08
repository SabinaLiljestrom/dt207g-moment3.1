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

//workexperience Schema

const WorkexperienceSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: true,
    },
    jobtitle:{
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    startdate:{
        type: String,
        required: true,
    },
    enddate:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const Workexperience = mongoose.model("Workexperience", WorkexperienceSchema);

//routes
app.get("/api", async (req, res)=>{
    res.json({message:"welcome to this API"});
});

app.get("/workexperience", async (req, res) =>{
    try{
        let result =await Workexperience.find({});
        return res.json(result);
    } catch(error) {
        return res.status(500).json(error);
    }
})

app.listen(port, ()=>{
    console.log("server is running on port:" + port);
});