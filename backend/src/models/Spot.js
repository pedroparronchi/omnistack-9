const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId, // apenas a referência para o usuário,
        ref: 'User',
    }
}, {
    toJSON: {
        virtuals: true,
    }
});

// virtual field no mongo
SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://192.168.86.2:3030/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot', SpotSchema);