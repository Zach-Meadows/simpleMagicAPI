//THIS FILE PULLS DATA FROM PARENT JSON OUTSIDE OF SCOPE

// require connection, models and data set
const mongoose = require("./connection");

const Cards = require("../models/Cards");
const Types = require("../models/Types");

// PARENT JSON HERE
const cardsRaw = require("../../scryfall-default-cards.json");
// empty array to store card names
let cardNames = [];
// limit what data is saved
const cardSeedData = cardsRaw.map(card => {
  const cardSeedItem = {};
  /* conditional checking for duplicates and
   * card names that have already been seeded
   */
  if (
    cardNames.includes(card.name) ||
    card.lang != "en" ||
    card.set_type === "promo"
  ) {
    //if it is a duplicate OR not modern legal, name it steve
    cardSeedItem.name = "STEVE ARGYLE";
    return cardSeedItem;
  } else {
    //card data filter
    cardNames.push(card.name);
    cardSeedItem.name = card.name;
    //some cards have two faces, use the first one
    if (card.image_uris === undefined) {
      cardSeedItem.image = card.card_faces[0].image_uris.normal;
    } else {
      cardSeedItem.image = card.image_uris.normal;
    }
    cardSeedItem.colors = card.colors;

    return cardSeedItem;
  }
});

//seed Cards
Cards.deleteMany({})
  .then(() => {
    Cards.create(cardSeedData)
      .then(card => {
        console.log(card);
        Cards.deleteMany({ name: "STEVE ARGYLE" })
          .then(() => console.log("steve is dead"))
          .catch(err => console.log("steve is NOT dead", err));
      })
      .catch(err => {
        console.log("create error", err);
      });
  })
  .catch(err => console.log("delete many error", err));
//set data filter
let setNames = [];
const setSeedData = cardsRaw.map(card => {
  const setSeedItem = {};
  if (
    card.legalities.modern === "not_legal" ||
    setNames.includes(card.set_name)
  ) {
    //if it is a duplicate OR not modern legal, name it steve
    setSeedItem.name = "STEVE ARGYLE";
    return setSeedItem;
  } else {
    setNames.push(card.set_name);
    setSeedItem.name = card.set_name;
    setSeedItem.abbr = card.set;
    setSeedItem.type = card.set_type;

    return setSeedItem;
  }
});

//seed Sets
Sets.deleteMany({})
  .then(() => {
    Sets.create(setSeedData)
      .then(set => {
        console.log(set);
        Sets.deleteMany({ name: "STEVE ARGYLE" })
          .then(() => console.log("steve is dead"))
          .catch(err => console.log("steve is NOT dead", err));
      })
      .catch(err => {
        console.log(err);
      });
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
