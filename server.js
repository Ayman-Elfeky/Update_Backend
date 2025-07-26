const express = require('express')
const app = express();
const heroRouter = require('./routes/hero.route');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

app.use(cors())
app.use(express.json());

app.use('/hero', heroRouter); 

app.listen(process.env.PORT, () => {
    connectDB();
    console.log("The server is running on PORT:", process.env.PORT);
})