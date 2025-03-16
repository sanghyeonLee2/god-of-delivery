const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const {sequelize} = require('./models');

/* === Middleware Require === */
const {notFound, errorHandler} = require('./middlewares/errorHandle.middleware');

dotenv.config();

/* === Routes Require === */
const indexRoutes = require('./routes/index.routes')
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const storeRoutes = require('./routes/store.routes');
const dibRoutes = require('./routes/dib.routes');
const menuRoutes = require('./routes/menu.routes');
const cartRoutes = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes');
const reviewRoutes = require('./routes/review.routes');

/* === Express App 속성 설정 === */
const app = express();
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* === ORM을 사용하여 DB연동 및 Model들을 DB에 동기화 === */
sequelize.sync({alter:true})
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
app.use('/users', userRoutes)
app.use('/stores', storeRoutes)
app.use('/dibs', dibRoutes)
app.use('/menus', menuRoutes)
app.use('/cart', cartRoutes)
app.use('/orders', orderRoutes)
app.use('/reviews', reviewRoutes)

/* === 404 에러 처리 미들웨어 === */
app.use(notFound)

/* === 에러 처리 미들웨어 === */
app.use(errorHandler)

/* === Server Execute === */
app.listen(app.get('port'), () => {
   console.log(`${app.get('port')}번 포트에서 대기 중`);
})

