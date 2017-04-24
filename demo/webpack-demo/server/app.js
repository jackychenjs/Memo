const express = require('express')
const route = require('./route/route')

var app = express()

app.use('/static', express.static('static'))

app.use('/', route)

app.listen(3000);


/*
const path = require('path');

const config = require('./config');
const routes = require('./server/routes/route');

const express = require('express');
const app = express();
const router = express.Router();

const fs = require('fs');
const logger = require('morgan');

// Log
//ar accessLogStream = fs.createWriteStream(__dirname + '/log/access.log', {flags: 'a'});
//app.use(logger('combined', {stream: accessLogStream}));


// Views
const viewPath = path.join(__dirname, 'views');

const ejs = require('ejs');
app.set('views', path.join(viewPath));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');


// //Swig View Engine
// var swig = require('swig');
// app.engine('html', swig.renderFile);
// app.set('views', path.join(viewPath));
// app.set('view engine', 'html');


// //Handlebars View Engine
// var exphbs  = require('express-handlebars');
// var hbs = exphbs.create({});
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// const hbs = require('hbs');
// app.set('views engine', 'html');
// app.engine('html', hbs.__express);


// Statics
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

const port = config.port || 6000
app.listen(port);
*/