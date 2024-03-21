const express = require("express");

const cors = require("cors")

const connectMongoDB = require('./db.js')

const app = express();

require("dotenv").config()

app.use(cors())

connectMongoDB()

app.use(express.json())

const MemberSlider = require("./modal/memberslider.modal.js");
app.get("/api/v1/memberslider", async (req, res) => {
    try {
        const mslider = await MemberSlider.find();
        console.log("Member Slider", mslider);
        res.json(mslider);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const ActivityLatest = require("./modal/latestActivity.js");
app.get("/api/v1/latestactivities", async (req, res) => {
    try {
        const latestactivities = await ActivityLatest.find();
        console.log("latestactivities", latestactivities);
        res.json(latestactivities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const ActivityJobCard = require("./modal/activityJobCard.js");
app.get("/api/v1/activityJobCard", async (req, res) => {
    try {
        const activityJobCard = await ActivityJobCard.find();
        console.log("activityJobCard", activityJobCard);
        res.json(activityJobCard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const AboutUsData = require("./modal/aboutUsData.js");
app.get("/api/v1/aboutUsData", async (req, res) => {
    try {
        const aboutUsData = await AboutUsData.find();
        console.log("aboutUsData", aboutUsData);
        res.json(aboutUsData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const ObjectiveData = require("./modal/objective.js");
app.get("/api/v1/objectiveData", async (req, res) => {
    try {
        const objectiveData = await ObjectiveData.find();
        console.log("objectiveData", objectiveData);
        res.json(objectiveData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const PORT = process.env.PORT || 4000


app.listen(PORT, () =>{
	console.log("server is running....", PORT)
})