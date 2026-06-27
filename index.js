const express = require("express")
const cors = require("cors")
require("./connection")

const authRoutes    = require("./routes/auth")
const donorRoutes   = require("./routes/donor")
const requestRoutes = require("./routes/request")
const userRoutes    = require("./routes/user")

const app = express()
app.use(express.json())
app.use(cors())

// Routes
app.use("/", authRoutes)
app.use("/", donorRoutes)
app.use("/", requestRoutes)
app.use("/", userRoutes)

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})