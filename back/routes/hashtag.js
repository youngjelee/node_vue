const express = require('express');

const router = express.Router();
const path = require('path'); //노드 기본모듈
const db = require('../models');


router.get('/:tag',async(req,res) => {     //GET /hashtag/abc?lastId=111
    try{
        let where ={};
        if(parseInt(req.query.lastId,10)){
            where = {
                id: {
                    [db.Sequelize.Op.lt] : parseInt(req.query.lastId)
                }
            }
        }
        const posts = await  db.Post.findAll({
            where, 

            include: [
                    {
                    model : db.Hashtag,
                    where : { name : decodeURIComponent(req.params.tag)
                    }     
                },{
                model : db.User,
                attributes : ['id' , 'nickName'],
            }, {
                model: db.Image,
            } ,{
                model : db.User,
                as : 'Likers',
                attributes: ['id'],
            },{
               model: db.Post,
               as: 'Retweet' ,
               include :[{
                   model: db.User,
                   attributes: ['id' ,'nickName'],
               } ,{
                   model: db.Image,
               }] 
            }
        ],
            order : [['createdAt','DESC']],
            limit : parseInt(req.query.limit,10)||10 ,
        });
        return res.json(posts);
    }catch(e){
        console.error(e);
    }
  
});

module.exports = router;
