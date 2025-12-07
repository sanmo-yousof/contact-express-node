const express = require("express");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000;


app.use(express.json())
app.use("/api/contacts",require("./routes/contactRouter"))
app.use(errorHandler)


app.get("/",(req,res) => {
    res.status(200).send(`Server is running on port ${port}`)
})



app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
