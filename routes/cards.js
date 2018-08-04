const express = require("express");
const router = express.Router();
/*
const data=require('../data/flashcardData.json').data;
const cards=data.cards;
*/
const { data } = require("../data/flashcardData.json");
const { cards } = data;
router.get("/:id", (req, res) => {
  const name = req.cookies.username;
  const { id } = req.params;
  const { side } = req.query;
  if (!side) {
    res.redirect(`/cards/${id}?side=question`);
  }
  const text = cards[id][side];
  const { hint } = cards[id];
  const templateData = { id, text ,name};
  if (side == "answer") {
    templateData.hint = hint;
    templateData.url = "question";
    templateData.change = "Question";
  } else {
    templateData.url = "answer";
    templateData.change = "Answer";
  }
  res.render("card", templateData);
});

router.get("/", (req, res) => {
  var r = Math.floor(Math.random() * cards.length);
  res.redirect(`/cards/${r}?side=question`);
});

module.exports = router;
