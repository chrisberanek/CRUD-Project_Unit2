require('dotenv').config();
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// Middleware Starts Here

// method override
app.use(methodOverride('_method'))
// CSS
app.use(express.static("public"));

// body parser
app.use(express.urlencoded({extended:true}))

// students/schools controllers
app.use('/student', require('./controllers/studentsController'))
app.use('/school', require('./controllers/schoolsController'))

// set up for the home page!
app.get('/', (req,res)=>{
  res.redirect('/student')
})

// Middleware Ends Here

//app.listen(3001, () => {
//  console.log("Students are listening!!!!");
//});

app.listen(process.env.PORT, () => {
    console.log("Students are listening!!!!");
  });