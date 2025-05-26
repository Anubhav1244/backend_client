const mongoose= require("mongoose");

const newParticipantsSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    ndisNumber:{
        type:String,
        required:true
    },
    anyComments:{
        type:String,
        required:true
    },
    knownLanguage:{
        type:String,
        required:true
    },
    mobility:{
        type:String,
        required:true
    },
    allergies:{
        type:String,
        required:true
    },
    SpeechImpediments:{
        type:String,
        required:true
    }
});

const newParticipants = mongoose.model("newParticipants", newParticipantsSchema);
module.exports = newParticipants;