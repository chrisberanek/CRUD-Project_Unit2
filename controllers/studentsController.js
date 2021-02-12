const express = require("express");
const router = express.Router();

const Student = require('../models').Student;
const School = require('../models').School;


// STUDENT INDEX
router.get("/:id", (req, res) => {
    Student.findByPk(req.params.id).then((student) => {
      res.render("show.ejs", {
        student: student,
      });
    });
  });
  
// GET STUDENT SIGNUP FORM
router.get("/signup", (req, res) => {
    res.render("/signup.ejs");
  });

// POST - CREATE NEW STUDENT FROM SIGNUP
router.post("/", (req, res) => {
    Student.create(req.body).then(newPlayer => {
      res.redirect(`/student/profile/${newPlayer.id}`);
    });
  });
      
// GET LOGIN
router.get("/login", (req, res) => {
    res.render("/login.ejs");
  });

// Post STUDENT LOGIN - Render STUDENT Profile
router.post('/login', (req, res) => {
      Student.findAll({
        where: {
          username: req.body.username,
          password: req.body.password
        }
      }).then((student) => {
        console.log(student);
        console.log(student.id);
        res.redirect(`/profile/${student.id}`);
    });
});

  
  
// SHOW STUDENT Profile
router.get("/profile/:id", (req, res) => {
    Student.findByPk(req.params.id, {
      include: [{ model: Teams }, { model: Pokemon }],
    }).then((student) => {
      Teams.findAll().then((teams) => {
        console.log(student);
        res.render("/profile.ejs", {
      student: student,
      teams: teams,
        });
      });
    });
  });

  
// EDIT/POST STUDENT Profile
router.get("/:id/edit", (req, res) => {
    student.findByPk(req.params.id).then((student) => {
        res.render("/student/edit.ejs", {
          student: student,
        });
      });
    });

  
router.put("/:id", (req, res) => {
    student.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    }).then((student) => {
    res.redirect('/student/profile/' + req.params.id );
    });
})

    
// DELETE STUDENT
  router.delete("/:id", (req, res) => {
    student.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/student"); 
    });
  });







module.exports = router;