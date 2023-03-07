const router = require("express").Router();

const matchesController = require("../controllers/matchesController");

router.get("/get-all-matches", matchesController.getMatchesIds());

module.exports = router;
