// @desc get all contacts
// @route GEt /api/contacts
// @access public 
const getContacts = async(req,res) => {
    res.status(200).json({message:"Get all contacts"});
}
// @desc Create New Contact
// @route POST /api/contacts
// @access public 
const postContacts = async(req,res) => {
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error ("All fileds are required !")
    }
    res.status(201).json({message:"Create Contact"});
}
// @desc Get Contacts
// @route GET /api/contacts/:id
// @access public 
const getContact = async(req,res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
}
// @desc Update Contacts
// @route PUT /api/contacts/:id
// @access public 
const updateContact = async(req,res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});
}
// @desc Get Contacts
// @route DELETE /api/contacts/:id
// @access public 
const deleteContact = async(req,res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
}

module.exports = {
    getContact,
    getContacts,
    postContacts,
    updateContact,
    deleteContact
}