var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const MassClinicDb = require('./config/database');

var indexRouter = require('./routes/index');
const personsEngagedRouter = require('./Routes/personsEngaged');
const outCome = require('./Routes/outCome');
const demographics = require('./Routes/patientDemographics');
const accessibility = require('./Routes/patientAccessibility');
const arrivalTime = require('./Routes/arrivalTime.js');
const noShow = require('./Routes/noShow');
const patientRetention = require('./Routes/patientRetention.js');
const testControl = require('./Routes/testControl');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use("/personsEngaged", personsEngagedRouter);
app.use("/outCome", outCome);
app.use("/demographics", demographics);
app.use("/accessibility", accessibility);
app.use("/arrivalTime", arrivalTime);
app.use("/noShow", noShow);
app.use("/patientRetention", patientRetention);
app.use("/testControl", testControl);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

try {
  MassClinicDb.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
} 

var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

module.exports = app;
