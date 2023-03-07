const Axios = require("./axiosConfig");

const puppeteer = require("puppeteer");

class ApiRequests {
  async getMatchData(matchId) {
    try {
      const res = await Axios.get(`/matches/${matchId}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getLastMatch() {
    try {
      const res = await Axios.get("/publicMatches");
      return res.data[0].match_id;
    } catch (err) {
      console.error(err);
    }
  }

  async isLastMatchParsed(lastMatchId) {
    try {
      const res = await Axios.get("/parsedMatches");
      return res.data[0].match_id === lastMatchId;
    } catch (err) {
      console.error(err);
    }
  }

  async parseMatch(matchId) {
    let browser;
    try {
      browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(`https://www.opendota.com/request#${matchId}`);
      // console.log(await page.content());
      await page.waitForNavigation({ timeout: 120000 });
      return !(await page.$(".sc-gxMtzJ gQIgXZ unparsed"));
    } catch (err) {
      console.error(err);
    } finally {
      await browser.close();
    }
  }
}

module.exports = new ApiRequests();
