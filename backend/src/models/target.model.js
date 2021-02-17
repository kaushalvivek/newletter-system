const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const targetSchema = new Schema({
    email: {type : String},
    name: {type: String},
    user: {type: String},
    meta: []
})

const Target = mongoose.model('Target', targetSchema);

module.exports = Target;
