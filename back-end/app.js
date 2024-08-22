const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

const {sequelize} = require('./models');

dotenv.config();
/* === Routes Require === */
const signUpRoutes = require('./controllers/sign-up')
const signInRoutes = require('./controllers/sign-in')
const categoryRoutes = require('./controllers/category-info')

const app = express();
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

sequelize.sync({force:false})
    .then(()=>{
        console.log('DB 연결 성공')
    })
    .catch((err)=>{
        console.error(err);
    })

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie'
}))


app.get('/', (req, res) => {
    res.send("접속 성공");
})
/* === Routes use === */
app.use('/sign-up', signUpRoutes);
app.use('/sign-in', signInRoutes);
app.use('/category-info', categoryRoutes)


app.use((req,res,next)=>{
    const err = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    err.status = 404;
    next(err)
})
app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500)
    res.render('error');
})

app.listen(app.get('port'), () => {
   console.log(`${app.get('port')}번 포트에서 대기 중`);
})