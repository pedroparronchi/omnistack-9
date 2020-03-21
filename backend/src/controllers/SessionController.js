const User = require('../models/User');

// indexedDB, show, store, update, destroy

module.exports = {
    async store(req, res) {
       const { email } = req.body
        let user = await User.findOne({ email }); // ou { email: email }
        if(!user) {
            user = await User.create({ email });
        }

       return res.json(user);
    }
};