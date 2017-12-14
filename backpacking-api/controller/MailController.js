// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport(option);
// transporter.verify(function(error, success) {
//   if (error) {
//       console.log(error);
//   } else { 
//       console.log('Kết nối thành công!');
//       var mail = {
//         from: 'toidicode.com@gmail.com', 
//         to: 'thanhtai96nd@gmail.com, admin@toicode.com', 
//         subject: 'Thư được gửi bằng Node.js',
//         text: 'Toidicode.com học lập trình online miễn phí', 
//     };
//     transporter.sendMail(mail, function(error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
//   }
// });