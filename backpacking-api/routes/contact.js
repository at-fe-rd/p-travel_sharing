var express = require('express');
var router = express.Router();

var nodemailer =  require('nodemailer'); // khai báo sử dụng module nodemailer
router.post('/send', function(req, res, next) {
  var transporter =  nodemailer.createTransport({ // config mail server
    service: 'Gmail',
    auth: {
      user: 'mailserver@gmail.com',
      pass: 'password'
    }
});
var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
  from: 'Thanh Batmon',
  to: 'tomail@gmail.com',
  subject: 'Test Nodemailer',
  text: 'You recieved message from ' + req.body.email,
  html: '<p>You have got a new message</b><ul><li>Username:' + req.body.name + '</li><li>Email:' + req.body.email + '</li><li>Username:' + req.body.message + '</li></ul>'
}
transporter.sendMail(mainOptions, function(err, info){
    if (err) {
      console.log(err);
      res.redirect('/');
    } else {
      console.log('Message sent: ' +  info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;