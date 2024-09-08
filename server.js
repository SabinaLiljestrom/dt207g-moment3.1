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
        required: [true, "Du måste ange företagsnamn"],
    },
    jobtitle:{
        type: String,
        required: [true, "Du måste ange arbetsroll"],
    },
    location: {
        type: String,
        required: [true, "Du måste ange plats"],
    },
    startdate:{
        type: String,
        required: [true, "Startdatum saknas"],
    },
    enddate:{
        type: String,
        required: [true, "Slutdatum saknas"],
    },
    description: {
        type: String,
        required: [true, "beskrivning saknas"],
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

app.post("/workexperience", async (req, res) => {
    try {
        let result = await Workexperience.create(req.body);
        return res.json(result);
    } catch ( error) {
        return res.status(400).json(error);
    }
});

app.delete("/workexperience/:id", async (req, res) => {
    try {
        let result = await Workexperience.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "Ingen arbetserfarenhet hittades med det ID:t" });
        }
        return res.json({ message: "Arbetserfarenhet borttagen", data: result });
    } catch (error) {
        return res.status(500).json(error);
    }
});

app.put("/workexperience/:id", async (req, res) => {
    try {
        let result = await Workexperience.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!result) {
            return res.status(404).json({ message: "Ingen arbetserfarenhet hittades med det ID:t" });
        }
        return res.json(result);
    } catch (error) {
        return res.status(400).json(error);
    }
});

app.listen(port, ()=>{
    console.log("server is running on port:" + port);
});