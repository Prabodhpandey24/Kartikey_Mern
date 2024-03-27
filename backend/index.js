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

const User = require('./modal/user.js')
app.post("/api/v1/login", async (req, resp) => {
    console.log(req.body);
    const email = req.body.Email;
    console.log("Email>>>",email);
    const password = req.body.Password;
    console.log("Password>>>",password);
    if (password && email){
        let user = await User.findOne({ 
            Email: email, 
            Password: password 
        }).select("-Password");
        console.log("userDaatatata>>>",user);
        if(user){
            resp.send(user);
        } else {
            resp.send({ result: "No user found!" });
        }
    } else {
        resp.send({ result: "Invalid parameters!" });
    }
});

const ApplyMember = require('./modal/ApplyMember.js');
app.get("/api/v1/allMembers", async (req, res) => {
    try {
        const allMembers = await ApplyMember.find();
        console.log("ApplyMember", allMembers);
        res.json(allMembers); 
    } catch (error) {
        console.error("Error fetching all members:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


const YourProblems = require("./modal/yourProblem.js");
app.post('/api/v1/problemForm', async (req,res)=>{
    console.log("Request body", req.body);
	try{
		console.log(req.body);
		await YourProblems.create(req.body);
		res.redirect("/");
	}
	catch(e){
		console.log(e);
		res.redirect('/')
	}
});




const PORT = process.env.PORT || 4000
app.listen(PORT, () =>{
	console.log("server is running....", PORT)
})