const router = require('express').Router();

const {getDoctor, getUser}= require('../controllers/user')


router.get('/getDoctor',getDoctor);
router.get('/getUser',getUser);
module.exports = router;