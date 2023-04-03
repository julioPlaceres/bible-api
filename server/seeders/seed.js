require("dotenv").config();
const db = require("../config/connection");
const {
  Book,
  Character,
  Event,
  Material,
  Place,
  River
} = require("../models");
const bookSeeds = require("./bookSeeds.json");
const characterSeeds = require("./characterSeeds.json");
const eventSeeds = require("./eventSeeds.json");
const materialSeeds = require("./materialSeeds.json");
const placeSeeds = require("./placeSeeds.json");
const riverSeeds = require("./riverSeeds.json");

db.once("open", async () => {
  try {
    await Book.deleteMany({});
    await Book.insertMany(bookSeeds);
    await Character.deleteMany({});
    await Character.insertMany(characterSeeds);
    await Event.deleteMany({});
    await Event.insertMany(eventSeeds);
    await Material.deleteMany({});
    await Material.insertMany(materialSeeds);
    await Place.deleteMany({});
    await Place.insertMany(placeSeeds);
    await River.deleteMany({});
    await River.insertMany(riverSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
