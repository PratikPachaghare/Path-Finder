const express = require("express");
const { default: generate_Roadmap } = require("../controllers/genrateRoadmapControllers");
const router = express.Router();

router.post("/roadmap",generate_Roadmap);

module.exports = router;

