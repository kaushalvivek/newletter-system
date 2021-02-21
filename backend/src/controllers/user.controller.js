const UserService = require('../services/user.service')

exports.getUsers = async function (req, res) {
    try {
        const users = await UserService.getUsers({});
        return res.status(200).json({ status: 200, data: users, message: `Successfully fetched users.` });
    }
    catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.addUser = async function (req, res) {
    try {
        await UserService.addUser(req);
        return res.status(201).json({ status: 201, message: `User added successfully.` });
    }
    catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getUserById = async function (req, res) {
    try {
        const user = await UserService.getUserById(req.params.id);
        return user ?
            res.status(200).json({ status: 200, data: user, message: `User fetched successfully.` })
            : res.status(404).json({ status: 404, message: `User not found.` });
    }
    catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteUserById = async function (req, res) {
    try {
        const response = await UserService.deleteUserById(req.params.id);

        return response ?
            res.status(200).json({ status: 200, message: `User deleted successfully.` })
            : res.status(404).json({ status: 404, message: `User not found.` });
    }
    catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateUserById = async function (req, res) {
    try {
        const response = await UserService.updateUserById(req);
        return response? 
         res.status(201).json({ status: 201, message: `User updated successfully.` })
         : res.status(404).json({ status: 404, message: `User not found.` });
    }
    catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}