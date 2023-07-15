const router = require('express').Router(); 

const {
    insertData,
    updateUser
} = require('../controller/auth.controller');

router.post("/users", insertData);


module.exports = router;