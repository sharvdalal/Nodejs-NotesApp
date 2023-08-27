require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts'); //Help us create layouts for website that we use across many pages so we don't have to copy and paste
const methodOverride = require('method-override');
const db = require('./server/config/db');
const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();
const port = 5000 || process.env.PORT;

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    // cookie: {maxAge: new Date(Date.now() + (3600000))}
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Help us to pass data through forms and pages
// For eg if we create a form then these two will help to pass the data to different pages and also to database

app.use(methodOverride("_method"));
//Connect to Database
connectDB();

 //Static files
 app.use(express.static('public'));


 //Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'))

//Handle 404
app.get('*', (req,res)=>{
    // res.status(404).send('404 Page not found');
    res.status(404).render('404');
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});

