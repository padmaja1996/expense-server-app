const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const { errorHandler,notFound } = require("./middlewares/errorMiddleware");

const usersRoute = require("./routes/users/usersRoute");

const app = express();

//env file
dotenv.config();

//dbconnect
dbConnect();


//middlewares
app.use(express.json());

//routes
app.use("/api/users", usersRoute);


//Error
app.use(notFound);
app.use(errorHandler);



//income
//expenses


module.exports= app;