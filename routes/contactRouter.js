const express = require("express");
const router = express.Router()
const {
    getContact,
    getContacts,
    postContacts,
    updateContact,
    deleteContact
} = require("../controllers/contactController")


router.route("/").get(getContacts).post(postContacts);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);



module.exports = router