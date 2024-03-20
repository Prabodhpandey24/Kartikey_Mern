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

const PORT = process.env.PORT || 5000


app.listen(PORT, () =>{
	console.log("server is running....", PORT)
})