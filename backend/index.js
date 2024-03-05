require('dotenv').config();
 
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
const express = require("express");
const cors = require("cors");

var path = require('path');

const app = express();

// public directory
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");
// normal use. Doesn't delete the database data

db.sequelize.sync();

// In development, you may need to drop existing tables and re-sync database

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to lines application."});
});

// app.use(function (req, res, next) {
//  // // check header or url parameters or post parameters for token
//   var token = req.headers['authorization'];
//   if (!token) return next(); //if no token, continue

//   if(req.headers.authorization.indexOf('Basic ') === 0){
//    // // verify auth basic credentials
//     const base64Credentials =  req.headers.authorization.split(' ')[1];
//     const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
//     const [username, password] = credentials.split(':');

//     req.body.username = username;
//     req.body.password = password;

//     return next();
//   }

//   token = token.replace('Bearer ', '');
//  // // .env should contain a line like JWT_SECRET=V3RY#1MP0RT@NT$3CR3T#
//   jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
//     if (err) {
//       return res.status(401).json({
//         error: true,
//         message: "Invalid user."
//       });
//     } else {
//       req.user = user; // //set the user to req so other routes can use it
//       req.token = token;
//       next();
//     }
//   });
// });

// require("./routes/lines.routes.js")(app);
// require("./routes/users.routes.js")(app);
// require("./routes/schedules.routes.js")(app);
// require("./routes/busStop.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app