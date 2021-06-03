var express = require('express');
var router = express.Router();
const { DateTime } = require("luxon");

const date = DateTime.now().toLocaleString(DateTime.DATE_MED)
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: date
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: date
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get("/new", function(req, res, next) {
  res.render("new_message_form", { title: "Add a New Message" })
})

router.post("/new", function(req, res, next) {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: date
  })
  res.redirect("/")
})

module.exports = router;
