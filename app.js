// var express    = require('express');
// var bodyParser = require('body-parser');
// var path  = require('path');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const dotenv  = require('dotenv');
// require('./Model/Connection.js');
require('./Model/Connection.js')
// const fileRoutes = require('./Routes/fileRoutes');

// require('./controllers/uploadDataPath.js');


// var app = express();
// app.use(express.json());
// app.use(cookieParser());

// const StudentDataRoute= require('./Routes/StudentData.js');
// const notificationrouter= require('./Routes/notificationRoutes.js')
// const filerouter= require('./Routes/fileRoutes')
// const Questionrouter= require('./Routes/dataAndQuestionRoutes.js')
// //static folder path
// // app.use(cors({
// //     credentials: true,
// //     origin: 'http://www.studentpanel.hopingminds.tech/'
    
// // }));

// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:3000'
// }))

// // app.use(cors());
// app.use(express.static(path.resolve(__dirname, 'public')));
// app.use('',StudentDataRoute);
// app.use('',notificationrouter);
// app.use('',filerouter);
// app.use('',Questionrouter);
// app.use("/data",fileRoutes);
// // app.use('',);
// //assign port
// var port = process.env.PORT || 3001;
// app.listen(port,()=>console.log('server run at '+port));
// // '192.168.1.43',

const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
const path = require("path");
const fileRoutes = require('./Routes/fileRoutes');

const app = express();

// Enable CORS
const corsOptions = {
  origin: 'https://studentpanel.hopingminds.tech/', // Adjust to match your Reac>
  credentials: true, // Enable credentials (cookies, HTTP authentication)
};

app.use(cors(corsOptions));
app.disable('x-powered-by')

// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:3000'
// }))

// Connect to MongoDB
// mongoose.connect(, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to the database");
// });

// Serve the uploaded PDF files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use the file routes
app.use("/", fileRoutes);

// Middleware from the original code
app.use(express.json());
app.use(require('cookie-parser')());

const StudentDataRoute = require('./Routes/StudentData.js');
const notificationrouter = require('./Routes/notificationRoutes.js');
const filerouter = require('./Routes/fileRoutes');
const Questionrouter = require('./Routes/dataAndQuestionRoutes.js');

app.use('', StudentDataRoute);
app.use('', notificationrouter);
app.use('', filerouter);
app.use('', Questionrouter);
app.use("/data", fileRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

