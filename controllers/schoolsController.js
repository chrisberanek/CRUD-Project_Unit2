const express = require("express");
const router = express.Router();
const Student = require('../models').Student;
const School = require("../models").School;

// SCHOOL INDEX Get Route
router.get("/", (req, res) => {
    School.findAll().then((school) => {
      res.render("/school/index.ejs", {
        school: school,
      });
    });
  });

  router.get("/:id", (req, res) => {
    School.findByPk(req.params.id, {
        attributes: ["name", "sport1", "sport2", "sport3", "region"],
    }).then((school) => {
      console.log(school);
      res.render("show.ejs", {
        school: school,
      });
    });
  });









module.exports = router;