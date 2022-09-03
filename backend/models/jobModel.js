const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    pay: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    client: {
       type: mongoose.Schema.Types.ObjectId, ref: 'Client'
    }
}, { timestamps: true });

module.exports = mongoose.models.Job || mongoose.model('Job', jobSchema);