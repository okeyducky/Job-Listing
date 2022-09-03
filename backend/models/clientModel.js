const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports =  mongoose.models.Client || mongoose.model('Client', clientSchema);