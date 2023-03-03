const router = require('express').Router();
const { GET_ALL_USERS, CREATE_NEW_USER } = require('../controllers/userController');

router.get('/', GET_ALL_USERS);

router.get('/', (req,res) => {});

router.post('/new', CREATE_NEW_USER); 

router.put('/', (req,res) => {});

router.delete('/', (req,res) => {});

module.exports = router;



