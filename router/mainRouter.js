const express = require('express');
const router = express.Router();
const db = require('../model/db');

router.get("/", function(req, res){
    res.render('main', {title:"영화 리뷰 사이트"});     // 그림 파일이나 css 같은 파일은 render를 사용한다.
})

router.post("/review/create", function(req, res){
    // 리뷰 저장 API
    let movie_id = req.body.movie_id;
    let review = req.body.review;

    if (movie_id == '' || movie_id == 0){
        res.send({success:400})
    } else {
        db.reviews.create({
            movie_id:movie_id,
            review:review
        }).then(function(result){
            res.send({success:200})
        })
    }
})

router.get("/review/read", function(req, res){
    let movie_id = req.query.movie_id;

    db.reviews.findAll({where:{movie_id:movie_id}}).then(function(result){
        res.send({success:200, data:result})
    })
})

router.get("/about", function(req, res){
    res.send('안녕하세요 영화 리뷰 서버입니다.');
})

router.post("/postapi", function(req, res){
    let body = req.body;
    console.log(body);
    res.send("POST API");
})

module.exports = router;

/*
    C : Create
    R : Read
    U : Update
    D : Delete
*/

router.get('/data/create', function(req, res){
    let user_id = parseInt(Math.random() * 10000);
    db.users.create({user_id:user_id}).then(function(result){
        res.send({success:200});
    }); 
});

router.get("/data/read", function(req, res){
    db.users.findAll().then(function(result){
        res.send({success:200, data:result});
    });
});

router.post("/data/update", function(req, res){
    let target_id = req.body.target_id;
    db.users.update({user_id:9999},{where:{user_id:target_id}}).then(function(result){
        res.send({success:200});
    });
});

router.post("/data/delete", function(req, res){
    let target_id = req.body.target_id;
    db.users.destroy({where:{user_id:target_id}}).then(function(result){
        res.send({success:200});
    });
});
