const router = require('express').Router();
const User = require('../models/user.model');
const UserController = require('../controllers/user.controller')

router.get('/', UserController.getUsers);
router.post('/add', UserController.addUser);
router.get('/:id', UserController.getUserById);

// route to delete by id
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to update by id
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.email = req.body.email;
            user.password = req.body.password;
            user.name = req.body.name;
            user.meta = req.body.meta;
            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;