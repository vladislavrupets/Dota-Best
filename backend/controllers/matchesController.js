const Matches = require("../models/matchesModel");

class MatchController {
  async getMatchesIds(res, req) {
    try {
      const matches = await Matches.find({}).populate("match_id");
      res.status(200).json({
        matches,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  }
}

module.exports = new MatchController();
