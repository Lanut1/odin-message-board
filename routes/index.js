const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const messages = [
  {
    id: uuidv4(),
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: uuidv4(),
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get("/", (req, res) => {
  res.render("index", { title: "Message Board", messages: messages });
})

router.get("/messages/:id", (req, res) => {
  const messageId = req.params.id;

  const message = messages.find((msg) => msg.id === messageId);

  if (!message) {
    res.status(404).send("Message was not found");
  }

  res.render("messageDetails", { title: "Message Details", message: message });
})

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
})

router.post("/new", (req, res) => {
  const message = req.body.messageText;
  const username = req.body.username;

  messages.push({ id: uuidv4(), text: message, user: username, added: new Date() });

  res.redirect("/");
})

module.exports = router;