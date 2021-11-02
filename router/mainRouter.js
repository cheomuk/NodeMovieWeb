const express = require('express');
const router = express.Router();

router.get("/", function(req, res){
    res.render('index', {title:"EJS 메인페이지"});     // 그림 파일이나 css 같은 파일은 render를 사용한다.
})

router.get("/about", function(req, res){
    res.send('안녕하세요 실습 서버입니다.');
})

router.post("/postapi", function(req, res){
    let body = req.body;
    console.log(body);
    res.send("POST API");
})

module.exports = router;