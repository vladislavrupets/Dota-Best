const Axios = require("./axiosConfig");
const Matches = require("../models/matchesModel");

class ApiRequests {
  async getMatch() {
    Axios.get("/matches/7040026010")
      .then((res) => {
        Matches.create(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

module.exports = new ApiRequests();
