const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const color = require("color")
const DBconnect = require("./db/db")
const postrouters = require("./routes/posts")
const morgan = require("morgan")


const app = express()
color()
DBconnect()
app.use(cors())
app.use(bodyparser.json({ limit: '16mb', extended: true }));     // Make sure you add these two lines
app.use(bodyparser.urlencoded({ limit: '16mb', extended: true }))    //Make sure you add these two lines
app.use(morgan('common'))

app.use("/posts", postrouters)

const PORT = process.env.port || 3001

app.listen(PORT, () => { console.log(`server running on the port ${PORT}`) })

