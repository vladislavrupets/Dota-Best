const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  match_id: {
    type: Number,
    required: true,
  },
  dire_score: {
    type: Number,
  },
  radiant_gold_adv: [],
  radiant_score: {
    type: Number,
  },
  radiant_win: {
    type: Boolean,
  },
  radiant_xp_adv: [],
  start_time: {
    type: Number,
  },
  tower_status_dire: {
    type: Number,
  },
  tower_status_radiant: {
    type: Number,
  },
  radiant_team: [],
  dire_team: [],
  skill: {
    type: Number,
  },
  players: [],
  patch: {
    type: Number,
  },
  region: {
    type: Number,
  },
  throw: {
    type: Number,
  },
  comeback: {
    type: Number,
  },
  loss: {
    type: Number,
  },
  win: {
    type: Number,
  },
  replay_url: {
    type: String,
  },
});

module.exports = mongoose.model("Match", matchSchema);
