var Sequelize = require("sequelize");
var sequelize;

sequelize = new Sequelize("class101","root","cheomuk201720^^",{
    host:"localhost",
    port:3306,          // mysql은 3306을 쓰기로 약속함.
    dialect:"mysql",    // 데이터베이스 종류는?
    timezone: "+09:00", // 시간대 설정
    define: {           // 안의 정보를 미리 안내함
        charset:"utf8",
        collate:"utf8_general_ci",
        timestamps: true,    // 언제 몇시에 만들었는지 표시함
        freezeTableName: true, // 기본적으로 복수명사 이름을 부여하는데 그 기능을 끈다.
    }
});

var db = {};    
// 객체식으로 데이터베이스 테이블을 구성하고, 직접 접속할 수 있다.
// 따라서 이런 ORM 방식을 통해, 직접 쿼리를 날리지 않아도
// 테이블 정보가 담긴 객체를 이용하여 데이터 조회,생성,변경,삭제가 가능하다.
db.users = sequelize.import(__dirname + "/users.js");
// __dirname은 상대주소를 뜻한다.
db.practice = sequelize.import(__dirname + "/practice.js");

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;