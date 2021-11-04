const express = require('express'); // require 함수를 이용해 express 도구를 꺼내온다.
const helmet = require('helmet'); //
const app = express();
const ejs = require("ejs");
const db = require('./model/db');

app.set('view engine', 'ejs');  // ejs모듈을 로드한다.
app.set('views', './views');    // views 폴더를 찾아 지정한다.
app.use('/public', express.static(__dirname + '/public'));
// public이라는 이름의 디렉토리에 포함된 정적인 이미지, CSS 파일 및 JavaScript 파일을 제공함.

// app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

// middleware() -> 서버에 요청하기 전 정해놓은 규칙들에 적합한지 체크한다.

const mainRouter = require('./router/mainRouter');
app.use('/', mainRouter);

app.listen(3000, function(req, res){
    db.sequelize.sync({force:false});   // 데이터베이스와 연결됨(문법)
    // force:ture는 실제 사용 단계에서 사용함. 개발 단계는 false로 해야 데이터가 안 날라감.
    console.log('서버가 실행되고 있다!');
})

