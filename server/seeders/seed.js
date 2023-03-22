require("dotenv").config();
const db = require("../config/connection");
const { Book } = require("../models");
const bookSeeds = require("./bookSeeds.json");

db.once("open", async () => {
  try {
    await Book.deleteMany({});
    await Book.insertMany(bookSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
