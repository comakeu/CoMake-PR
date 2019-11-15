const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

const issuesRouter = require("../issues/issues-router");

server.get("/", (req, res) => {
    res.redirect("https://documenter.getpostman.com/view/8105818/SW7W7Vqi?version=latest")
})

server.use("/api", issuesRouter);

module.exports = server;