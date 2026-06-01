const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongodb:27017/leaveDB");

const LeaveSchema = new mongoose.Schema({

    name:String,
    department:String,
    leaveType:String,
    leaveDays:Number

});

const Leave = mongoose.model("Leave", LeaveSchema);

app.post("/api/leave", async (req, res) => {

    const leave = new Leave(req.body);

    await leave.save();

    res.json({
        message: "Leave Request Saved Successfully"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});