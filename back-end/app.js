const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const {sequelize} = require('./models');

/* === Middleware Require === */
const {notFound, errorHandler} = require('./middlewares/errorHandlerMiddleware');

dotenv.config();

/* === Routes Require === */
const indexRoutes = require('./routes/indexRoutes')
const authRoutes = require('./routes/authRoutes');
const storeRoutes = require('./routes/storeRoutes');

/* === Express App 속성 설정 === */
const app = express();
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* === ORM을 사용하여 DB연동 및 Model들을 DB에 동기화 === */
sequelize.sync({force:false})
    .then(()=>{
        console.log('DB 연결 성공')
    })
    .catch((err)=>{
        console.error(err);
    })

/* === Middleware 설정 및 요청 === */
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

/* === Routes use === */
app.use('/', indexRoutes)
app.use('/auth', authRoutes)
app.use('/stores', storeRoutes)

/* === 404 에러 처리 미들웨어 === */
app.use(notFound)

/* === 에러 처리 미들웨어 === */
app.use(errorHandler)

/* === Server Execute === */
app.listen(app.get('port'), () => {
   console.log(`${app.get('port')}번 포트에서 대기 중`);
})

