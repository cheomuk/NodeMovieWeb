module.exports = function(sequelize, DataTypes){
    return sequelize.define('reviews',{
        idx: {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allwNull:false
        },
        movie_id: {
            type:DataTypes.STRING(250) // string 250자까지 허용
        },
        review:{
            type:DataTypes.TEXT
        }
    })
}