const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    residenceAddress:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    foundServiceSofar:{
        type: String,
        required: true,
    },
    anyImprovements:{
        type: String,
        required: true,
    },
    likeMostAboutService:{
        type: String,
        required: true,
    },
    
    feedback:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    ratingoverAllService:{
        type: String,
        required: true,
    },
    ratingbeingTransparent:{
        type: String,
        required: true,
    },
    ratingbeingfair:{

        type: String,
        required: true,
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;