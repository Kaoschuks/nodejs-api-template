const express = require("express")
app = express();
const db_config = require("../models/config/dbconfig");

const postsView = require("./posts_router")

const wrongRequestControl = require("../controllers/404_control");

// INIT BODY PASER MW
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// POST ROUTER
const posts_route = "/posts";
app.use(posts_route, postsView);

// HANDLE WRONG REQUESTS
app.use(wrongRequestControl.requestNotFound_control);

module.exports = app; // TO sever.js
