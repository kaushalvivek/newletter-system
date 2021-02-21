const router = require('express').Router();
const UserController = require('../controllers/user.controller')

router.get('/', UserController.getUsers);
router.post('/add', UserController.addUser);
router.get('/:id', UserController.getUserById);
router.delete('/:id', UserController.deleteUserById);
router.post('/update/:id', UserController.updateUserById);

module.exports = router;