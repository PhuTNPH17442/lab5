var express = require('express');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file,cb){
    cb(null,'uploads');
  },
  filename: function (req,file,cb){
    cb(null,Date.now()+ Math.random()+file.originalname);
  },
  limits: 1* 1024*1024
});
var  uploads = multer({storage:storage}).array('file',6);
var router = express.Router();

/* GET home page. */
router.get('/index.ejs', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tables.ejs',function (req,res) {
  res.render('tables',{})
});
router.get('/buttons.ejs',function (req,res) {
  res.render('buttons',{})
});
router.get('/404.ejs',function (req,res) {
  res.render('404',{})
});
router.get('/cards.ejs',function (req,res) {
  res.render('cards',{})
});
router.get('/charts.ejs',function (req,res) {
  res.render('charts',{})
});
router.get('/error.ejs',function (req,res) {
  res.render('error',{})
});
router.get('/forgot-password.ejs',function (req,res) {
  res.render('forgot-password',{})
});
router.get('/login.ejs',function (req,res) {
  res.render('login',{})
});
router.get('/register.ejs',function (req,res) {
  res.render('register',{})
});
router.get('/utilities-animation.ejs',function (req,res) {
  res.render('utilities-animation',{})
});
router.get('/utilities-border.ejs',function (req,res) {
  res.render('utilities-border',{})
});
router.get('/utilities-color.ejs',function (req,res) {
  res.render('utilities-color',{})
});
router.get('/utilities-other.ejs',function (req,res) {
  res.render('utilities-other',{})
});
router.post('/dangky',uploads,function (req,res,next){

  uploads(req,res,function (err){
    if(err != null){
      res.send(err);
    }else {
      var email = req.body.email;
      var password= req.body.password;
      var fileName = req.files.size;
      console.log(password);
      console.log(fileName);

      res.send('upload complete'+email);
    }
  })


    }
)

module.exports = router;
