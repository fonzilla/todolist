const router = require('express').Router();
const models = require('../models');


router.get('/login', (req,res)=>{
  res.render('login')
})

router.get('/signup', (req,res)=>{
  res.render('signup')
})

module.exports = router;
