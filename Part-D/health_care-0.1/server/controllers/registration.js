const Blocks = require('./Blocks')
const body = require('body-parser');

exports.registerUser = async (req, res) => {
    try {
       const block_user = Blocks.User_Block(
       { email, password, role, gender, firstname, lastname, phone } = req.body)
       block_user.save();
    } catch (error) {
        console.log(error);
    }
}