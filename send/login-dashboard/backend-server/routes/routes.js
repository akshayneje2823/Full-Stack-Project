const express = require("express");

const router = express.Router();

router.post('/singup',(req,res)=>{
    res.send('Are we done?')
});

module.exports = router
