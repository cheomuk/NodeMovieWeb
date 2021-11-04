﻿module.exports = function(sequelize, DataTypes){
    return sequelize.define('practice',{
        idx: {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allwNull:false
        },
        user_id: {
            type:DataTypes.STRING(250), // string 250자까지 허용
            
        }
    })
}