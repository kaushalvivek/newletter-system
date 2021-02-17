const router = require('express').Router();
let History = require('../models/item.model');

router.route('/').get((req, res) => {
    History.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/add", async (req, res) => {
    const user = req.body.user;
    const content = req.body.content;
    const targets = req.body.targets;
    const meta = req.body.meta;
    
    const newHistory = new History({
        user, content, targets, meta
    });
    try{
        await newHistory.save();
        res.status(201).send("History added!");
    } catch (e) {
        res.status(400).send(e);
    }
});

// route to get by id
router.route('/:id').get((req, res) => {
    History.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to delete by id
router.route('/:id').delete((req, res) => {
    History.findByIdAndDelete(req.params.id)
        .then(() => res.json('History deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// route to update by id
router.route('/update/:id').post((req, res) => {
    History.findById(req.params.id)
        .then(item => {
            item.user = req.body.user;
            item.content = req.body.content;
            item.targets = req.body.targets;
            item.meta = req.body.meta;
            item.save()
                .then(() => res.json('History updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;