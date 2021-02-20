const User = require('../models/user.model');

exports.getUsers = async function (query) {
    try {
        const users = await User.find(query);
        return users;
    }
    catch (e) {
        throw Error(e.message);
    }
}

exports.addUser = async function(req) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const meta = req.body.meta;
    
    const newUser = new User({
        email, password, name, meta
    });
    try{
        await newUser.save();
    } catch (e) {
        throw Error(e.message);
    }
}

exports.getUserById = async function(id) {
    try{
        return User.findById(id);
    }
    catch (e){
        throw Error(e.message);
    }
}