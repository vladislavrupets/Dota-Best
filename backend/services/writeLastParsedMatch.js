const Matches = require("../models/matchesModel");
const apiRequests = require("./apiRequests");

module.exports = writeLastParsedMatch = async () => {
  let isMatchParsed = false;
  try {
    const lastMatchId = await apiRequests.getLastMatch();
    console.log(lastMatchId);
    if (await apiRequests.isLastMatchParsed(lastMatchId)) {
      isMatchParsed = true;
    } else {
      let retryCount = 0;
      while (!isMatchParsed && retryCount < 3) {
        isMatchParsed = await apiRequests.parseMatch(lastMatchId);
        if (!isMatchParsed) {
          retryCount++;
        }
        console.log(retryCount, isMatchParsed);
      }
    }

    if (isMatchParsed) {
      const matchData = await apiRequests.getMatchData(lastMatchId);
      Matches.create(matchData);
    }
  } catch (err) {
    console.error(err);
  }
};
