const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async users(req, res) {
        const Users = await User.find();

        return res.json(Users);
    },
    
    async user(req, res) {
        const user = await User.findById(req.params.id)
    
        return res.json(user);
    },

    async create_user(req, res) {
        const newUser = await User.create(req.body);

        return res.json(newUser);
    },

    async update_user(req, res) {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new : true })
    
        return res.json(updateUser);
    },

    async delete_user(req, res) {
        await User.findByIdAndRemove(req.params.id);

        return res.send(`Successfully Removed User: ${req.params.id}`);
    }
}