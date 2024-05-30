const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const auth = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 9000

// therd party middlewares
app.use(express.json())

// application middlewares
app.use("/api/user", auth)


// mongoDB atlas connecting 

mongoose.connect(process.env.DB)
.then(() => console.log("DB connected"))
.catch((error) => console.log(error));


// server creating

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));