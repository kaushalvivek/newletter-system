const router = require('express').Router();
let Target = require('../models/target.model');

router.route('/').get((req, res) => {
    Target.find()
        .then(targets => res.json(targets))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/add", async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const user = req.body.user;
    const meta = req.body.meta;
    
    const newTarget = new Target({
        email, name, user, meta
    });
    try{
        await newTarget.save();
        res.status(201).send("Target added!");
    } catch (e) {
        res.status(400).send(e);
    }
});

// route to get by id
router.route('/:id').get((req, res) => {
    Target.findById(req.params.id)
        .then(target => res.json(target))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to delete by id
router.route('/:id').delete((req, res) => {
    Target.findByIdAndDelete(req.params.id)
        .then(() => res.json('Target deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to update by id
router.route('/update/:id').post((req, res) => {
    Target.findById(req.params.id)
        .then(target => {
            target.email = req.body.email;
            target.name = req.body.name;
            target.user = req.body.user;
            target.meta = req.body.meta;
            target.save()
                .then(() => res.json('Target updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;