const express = require('express');
const router = express.Router();
/*
const data=require('../data/flashcardData.json').data;
const cards=data.cards;
*/
const {data}=require('../data/flashcardData.json');
const {cards}=data;
router.get('/:id', (req, res) => {
    const id= req.params.id;
    res.render('card', { prompt: cards[id].question,hint:cards[id].hint });
});

module.exports = router;