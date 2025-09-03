// Creating server by pure NODE js

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server Created");
  switch (req.method) {
    case "GET":
      {
        if (req.url === "/") return res.end("Home-Page");
        if (req.url === "/Contact") return res.end("Contact-Page");
        if (req.url === "/About") return res.end("About-Page");
        if (req.url === "/Profile") return res.end("Profile-Page");
      }
      break;

    case "POST": {
    }

    default:
      break;
  }
});

server.listen(3000, () => {
  console.log("Server Running");
});

// Server creation through EXPRESS js

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("Home-page");
});

app.get("/Contact", (req, res) => {
  res.end("Home-page");
});

app.get("/About", (req, res) => {
  res.end("Home-page");
});

app.listen(4000, () => {
  console.log("Server by Express running");
});
