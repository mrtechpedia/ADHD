const mongoose = require("mongoose");
const keys = require("../config/keys");
const e = require("express");

const User = mongoose.model("users");

module.exports = (app) => {
  app.post("/api/score", async (req, res, done) => {
    const resultantScore = {
      date: new Date(),
      result: req.body.score,
    };
    await User.findOneAndUpdate(req.body.email, {
      $push: {
        score: resultantScore,
      },
    });
    return res.json({
      msg: true,
    });
  });

  app.post("/api/result", async (req, res, done) => {
    const foundUser = await User.findOne({
      email: req.body.email,
    });
    if (foundUser) {
      return res.json({
        userScores: foundUser.score,
      });
    }
  });
};
