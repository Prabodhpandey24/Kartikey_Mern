const express = require("express");

const cors = require("cors");

const connectMongoDB = require('./db.js');

const app = express();

require("dotenv").config();

connectMongoDB();