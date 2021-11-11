var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

const connectionString = process.env.MONGO_CONmongoose = require('mongoose'); 
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true}); 

module.exports = app;
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ console.log("Connection to DB succeeded")}); 
async function recreateDB(){ 
  // Delete everything 
  await Costume.deleteMany(); 
 
  let instance1 = new Costume({costume_type:"ghost",  size:'large',cost:25.4}); 
instance1.save( function(err,doc) { 
      if(err) 
      return console.error(err); 
      console.log("First object saved") 
  }); 
} 
let instance2 = new Costume({costume_type:"checked shirt",  size:' xtra large',cost:26.4}); 
instance2.save( function(err,doc) { 
      if(err) 
      return console.error(err); 
      console.log("second object saved") 
  });
  let instance3 = new Costume({costume_type:"half hands shirt",  size:' xtra large',cost:30.4}); 
  instance3.save( function(err,doc) { 
        if(err) 
        return console.error(err); 
        console.log("third object saved") 
    });
 
let reseed = true; 
if (reseed) { recreateDB();} 
 
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cupsRouter = require('./routes/cups');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var Costume = require("./models/costume"); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cups', cupsRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);


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
 
module.exports = app;
