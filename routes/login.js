const router = require('express').Router();
const passport = require('passport');
const models = require('../models');


router.get('/login', (req,res)=>{
  res.render('login')
})

router.get('/signup', (req,res)=>{
  res.render('signup')
})

// router.post('/login', (req, res) => {
//   console.log(req.body);
//   res.redirect('/');
// })

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

module.exports = router;
