const express = require("express");
const router = express.Router();

const Student = require('../models').Student;
const School = require('../models').School;

// GET/POST - CREATE NEW STUDENT FROM SIGNUP FORM
router.get("/signup", (req, res) => {
    School.findAll().then((schools) =>{
        res.render("signup.ejs", {
            schools: schools
        });
    })    
  });

// STUDENT INDEX
router.get("/", (req, res) => {
    Student.findAll().then((student) => {
      res.render("index.ejs", {
        student: student,
      });
    });
  });

router.post("/", (req, res) => {
    Student.create(req.body).then(newStudent => {
      res.redirect(`/student/${newStudent.id}`);
    });
  });
      
// GET LOGIN
router.get("/login", (req, res) => {
    res.render("login.ejs");
  });

// Post STUDENT LOGIN - Render STUDENT Profile
router.post('/login', (req, res) => {
      Student.findOne({
        where: {
          username: req.body.username,
          password: req.body.password
        }
      }).then((student) => {
        console.log(student);
        console.log(student.id);
        res.redirect(`/student/${student.id}`);
    });
});
  
  
// SHOW STUDENT Profile
router.get("/:id", (req, res) => {
    Student.findByPk(req.params.id, {
      //include: [{ model: School }],
    }).then((student) => {
      School.findAll().then((school) => {
        console.log(student);
        res.render("profile.ejs", {
      student: student,
      school: school,
        });
      });
    });
  });

  router.get("/:id", (req, res) => {
    Student.findByPk(req.params.id).then((student) => {
      res.render("show.ejs", {
        student: student,
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
    Student.update(req.body, {
    where: { id: req.params.id },
    }).then((student) => {
    res.redirect('/student/' + req.params.id );
    });
})
    
// DELETE STUDENT
  router.delete("/:id", (req, res) => {
    Student.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/student"); 
    });
  });


module.exports = router;