const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    // HTML 응답
    res.redirect('/emaillist');
});

module.exports = router;