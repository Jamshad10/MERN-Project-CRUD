const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer');

const {
   getUsers,
   addUser,
   updateUser,
   deleteUser

} = require('../controller/user');

//user routing
router.get('/', getUsers);
router.post('/add',multer, addUser);
router.put('/edit/:id', updateUser);
router.delete('/delete/:id', deleteUser);


module.exports = router;