const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

const corsOptions = {
  origin: ["https://habit-it.chat-app.com", "http://localhost:3000"], //
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // methods:["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

//-> enable cors
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
