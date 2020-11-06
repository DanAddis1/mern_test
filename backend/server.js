//----------------------------------------------------------------------------------------------------------------------
// Server variables
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//----------------------------------------------------------------------------------------------------------------------
// Allows for enviroment varibles to be in a .env file
require('dotenv').config();

//----------------------------------------------------------------------------------------------------------------------
// To create an express server with port
const app = express();
const port = process.env.PORT || 5000;

//----------------------------------------------------------------------------------------------------------------------
// Middleware server to send and recive json
app.use(cors());
app.use(express.json());

//----------------------------------------------------------------------------------------------------------------------
// Connects to mongo db cloud db
const uri = process.env.ATLAS_URI;

//----------------------------------------------------------------------------------------------------------------------
// Flags to deal with mongodb deprecating functions
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

//----------------------------------------------------------------------------------------------------------------------
// Connects to mongodb cloud database using .env file
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//----------------------------------------------------------------------------------------------------------------------
// Requires and implement the data models
const exerciseRouter = require('./routes/exercise');
const usersRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

//----------------------------------------------------------------------------------------------------------------------
// Starts server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
