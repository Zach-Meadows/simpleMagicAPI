//THIS FILE ADDS SET RELATIONSHIP TO CARDS
const mongoose = require("./connection");

const Cards = require("../models/Cards");
const Sets = require("../models/Sets");
const Types = require("../models/Types");

const cardsRaw = require("../../scryfall-default-cards.json");

//number used to find random card
random = 0;
//find all cards in db
Cards.find({})
  .then(cardsInDB => {
    //for each card
    cardsInDB.forEach(cardDoc => {
      //find card in raw json
      const cardJson = cardsRaw.find(cardItem => {
        return cardItem.name === cardDoc.name;
      });
      //find set in db associated with card in raw json
      Sets.findOne({ name: cardJson.set_name }).then(setDoc => {
        //assign that sets id to the doc
        cardDoc.set = setDoc.id;
        cardDoc.random = random;
        //increase random number
        random++;
        cardDoc.save();
      });
    });
    console.log("sets assigned");
  })
  .catch(err => console.log(err));
