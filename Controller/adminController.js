const ContactUs = require('../Model/contactus');
const { sendClientEmail, sendCustomerEmail } = require('../utility/EmailNotification/Contactus/emailnotify');
const { sendtoClientEmail_newParticipants, sendtoCustomerEmail_newParticipants } = require('../utility/EmailNotification/NewParticipants/emailnotify');
const {sendtoClientEmail_Makeanenquiry,  sendtoCustomerEmail_Makeanenquiry } = require('../utility/EmailNotification/MakeAnEnquiry/emailnotify');
const { sendtoClientEmail_GetHelp, sendtoCustomerEmail_GetHelp } = require('../utility/EmailNotification/GetHelp/emailnotify');
const Feedback = require('../Model/feedback');
const Enquiry = require('../Model/makeAnEnquiry');
const newParticipants = require('../Model/newParticipants');
const helpSchema = require('../Model/getHelp');

//CONTACT US FORM
exports.contactUs = async (req, res) => {
    try {
        const { name, surname, email, phone, location, role, message } = req.body;
        const contactUs = new ContactUs({
            name,
            surname,
            email,
            phone,
            location,
            role,
            message
        });
        const response=await contactUs.save();
        console.log(response);
        // Send email to the client
        await sendClientEmail({
            name,
            email,
            location,
            role,
            message
        });
        // Send email to the customer (thank you message)
        await sendCustomerEmail({
            name,
            email
        });
        return res.status(200).json({
            success: true,
            message: "Contact Us form submitted successfully",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}
//MAKE AN ENQUIRY FORM
exports.makeAnEnquiry = async (req, res) => {
    try {
        const { name, email, phone, message, locationofservice } = req.body;
        
        if (!name || !email || !phone || !message || !locationofservice) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        
        const newEnquiry = new Enquiry({
            name,
            email,
            phone,
            message,
            locationofservice
        });
        const response = await newEnquiry.save();
        // Send email to the client
        await sendtoClientEmail_Makeanenquiry({
            name,
            email,
            message,
            locationofservice
        });
        // Send email to the customer (thank you message)
        await sendtoCustomerEmail_Makeanenquiry({
            name,
            email
        });
        console.log(response);
        return res.status(200).json({
            success: true,
            message: "Enquiry submitted successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

//FEEDBACK FORM
exports.feedback = async (req, res) => {
    console.log("===> Route hit");

    const {
        firstName, residenceAddress, email, phone, feedback,
        foundServiceSofar, anyImprovements, likeMostAboutService,
        ratingoverAllService, ratingbeingTransparent, ratingbeingfair
    } = req.body;

    console.log("===> Body parsed:", req.body);

    if (!firstName || !residenceAddress || !email || !phone || !feedback ||
        ratingoverAllService == null || ratingbeingTransparent == null || ratingbeingfair == null) {
        console.log("===> Validation failed");
        return res.status(400).json({ message: "Please fill all the fields" });
    }

    const newFeedback = new Feedback({
        firstName, residenceAddress, email, phone, feedback,
        foundServiceSofar, anyImprovements, likeMostAboutService,
        ratingoverAllService, ratingbeingTransparent, ratingbeingfair
    });

    try {
        console.log("===> Saving to DB...");
        const response = await newFeedback.save();
        console.log("===> Saved successfully:", response);
        return res.status(200).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        console.error("===> Error while saving:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

//GET FEEDBACK
exports.getFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find({});
        return res.status(200).json({
            success: true,
            feedbacks,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

// NEW PARTICIPANTS FORM
exports.newParticipants = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, address, ndisNumber, anyComments, 
            knownLanguage, mobility, allergies, SpeechImpediments } = req.body;

        console.log(req.body);
        const newParticipant = new newParticipants({
            firstname,
            lastname,
            email,
            phone,
            address,
            ndisNumber,
            anyComments,
            knownLanguage,
            mobility,
            allergies,
            SpeechImpediments
        });
        await newParticipant.save();
        
        // Send email to the client
        await sendtoClientEmail_newParticipants({
            name: `${firstname} ${lastname}`,
            email: email,
            userDetails: {
            firstName: firstname,
            lastName: lastname,
            email: email,
            phone: phone,
            address: address,
            ndisNumber: ndisNumber,
            anyComments: anyComments,
            knownLanguage: knownLanguage,
            mobility: mobility,
            allergies: allergies,
            speechImpediments: SpeechImpediments
            }
        });
        // Send email to the customer (thank you message)
        await sendtoCustomerEmail_newParticipants({
            name: `${firstname} ${lastname}`,
            email
        });
        return res.status(200).json({
            success: true,
            message: "New participant form submitted successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

// GET HELP
exports.getHelp = async (req, res) => {
    try {
        const { name,surname , email, phone, message } = req.body;

        if (!name || !surname|| !email || !phone || !message) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const helpRequest = new helpSchema({
            name,
            surname,
            email,
            phone,
            message
        });

        await helpRequest.save();
        // Send email to the client
        await sendtoClientEmail_GetHelp({
            name,
            email,
            phone,
            message,
        
        });
        // Send email to the customer (thank you message)
        await sendtoCustomerEmail_GetHelp({
            name,
            email,
            
        });
        return res.status(200).json({
            success: true,
            message: "Help request submitted successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}