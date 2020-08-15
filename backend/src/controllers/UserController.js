const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async index(req, res) {
        const Users = await User.find();

        return res.json(Users);
    }
}