//remote seed file. Because large json is large
const mongoose = require("./connection");

const Cards = require("../models/Cards");
const Sets = require("../models/Sets");
const Types = require("../models/Types");

cardSeedData = require("../cards.json");
setSeedData = require("../sets.json");

//seed cards
Cards.deleteMany({})
  .then(() => {
    Cards.create(cardSeedData)
      .then(cards => {
        console.log(cards);
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

//seed sets
Sets.deleteMany({})
  .then(() => {
    Sets.create(setSeedData)
      .then(sets => {
        console.log(sets);
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

//seed Types
const typesData = [
  { name: "Artifact", isPermanent: true },
  { name: "Creature", isPermanent: true },
  { name: "Enchantment", isPermanent: true },
  { name: "Instant", isPermanent: false },
  { name: "Land", isPermanent: true },
  { name: "Planeswalker", isPermanent: true },
  { name: "Sorcery", isPermanent: false }
];

Types.deleteMany({})
  .then(() => {
    Types.create(typesData)
      .then(type => {
        console.log(type);
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
