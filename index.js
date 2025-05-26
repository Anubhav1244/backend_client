const express= require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const mongoSanitize = require("express-mongo-sanitize");
dotenv.config() 
const app = express();
const port = process.env.PORT || 5000;

const database = require('./config/database');
const AdminRouter = require('./Router/AdminRouter');

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use(fileUpload());
app.use(helmet());
app.use(express.json());


app.use(cookieParser());


// Routes
app.use('/api/v1', AdminRouter);


//listening to the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Connect to the database
database.connectDB();

