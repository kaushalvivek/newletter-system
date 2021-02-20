const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historySchema = new Schema({
    user: {type : String},
    content: {type: String},
    targets: [String],
    meta: []
})

const History = mongoose.model('History', historySchema);

module.exports = History;
