const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:3000"
};

//middleware

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

//routes

console.log("before router")

const router = require("./routes/organisation.routes")

app.use("/api/organisations/" , router)

//testing api

app.get("/", (req, res) => {
    res.json({massage: "hello word"})
})

//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT,() => {
    console.log(`server is run on port ${PORT}`)
})