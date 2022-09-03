const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    content: {
        type:String,
        required: true
    },
    jobID:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Job',
        required: true
    }
}, { timestamps: true });

module.exports =  mongoose.models.Note || mongoose.model('Note', noteSchema);