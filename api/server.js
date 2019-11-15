const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(corse());
server.use(express.json());

const issuesRouter = require("../issues/issues-router");

server.get("/", (req, res) => {
    res.send("Aii")
})

server.use("/api", issuesRouter);

module.exports = server;