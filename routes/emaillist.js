const express = require('express');
const Email = require('../models/Email');

const router = express.Router();


router.route('/form').get(function(req, res, next){
    res.render('form', null);
});
router.route('/add').post(function(req, res, next){
    console.log(req.body);
    Email.create(req.body);
    res.redirect('/');
});

//나머지를 모두 여기로 넘겨라
router.route(/.*/).get(function(req, res, next){
    Email.find({}, [
        'firstName','lastName','email'
    ],{
        sort:{
            _id:-1
        }
        }, function(err, emails){
        if(err){
            next(err);
            return;
        }
       // 비동기 처리를 위해서 render를 안에 넣어줘야된다.
        res.render('list', {
            emails : emails
        });

    });
});

module.exports = router;