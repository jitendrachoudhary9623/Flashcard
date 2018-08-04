const express = require("express");
const router = express.Router();
/*
const data=require('../data/flashcardData.json').data;
const cards=data.cards;
*/
const { data } = require("../data/flashcardData.json");
const { cards } = data;
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const { side } = req.query;
  const text = cards[id][side];
  const { hint } = cards[id];
  const templateData = { text };
  if (side == "answer") {
    templateData.hint = hint;
  }
  res.render("card", templateData);
});

module.exports = router;
