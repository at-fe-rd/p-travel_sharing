const { check, validationResult } = require('express-validator/check');

exports.validate = [
  check('user.name','name have at least 5 chars').trim(),
  check('auth.password', 'passwords must be at least 5 chars').isLength({ min: 5 }),
  check('auth.provider').isLength({ min: 1 }),
  check('auth.uid').isEmail().withMessage('must be an email'),
  check('user.phone').isLength({ min: 10 }),
  check('user.gender','not empty').isLength({ min: 1 }),
  (req, res, next) => { 
    try {
      validationResult(req).throw();
      next();
    } catch (e) {
      res.status(422).json({ errors: e.mapped() });
    }
  }
]
