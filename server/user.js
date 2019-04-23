const express = require('express');
const utils = require('utility');
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list',function(req,res){
  // User.remove({},function(e,d){})
  User.find({},function(err,doc){
    return res.json(doc)
  })
})

Router.post('/login',function(req,res){
  const {user,pwd} = req.body
  User.findOne({user,pwd:md5Pwd(pwd)},{'pwd':0},function(e,d){
    if(!d){
      return res.json({code:1,msg:'用户名不存在或密码错误'})
    }
    return res.json({code:0,data:d})
  })
})
Router.post('/register',function(req,res){
  console.log(req.body.data)
  const {user,pwd,type} = req.body
  User.findOne({user},function(err,doc){
    if(doc){
      return res.json({code:1,msg:'用户名重复'})
    }
    User.create({user,type,pwd:md5Pwd(pwd)},function(e,d){
      if(e){
        return res.json({code:1,msg:'后端出错'})
      }
      return res.json({code:0})
    })
  })
})

Router.get('/info',function(req,res){
  //判断用户有没有cookie
  return res.json({code:1})
})

function md5Pwd(pwd){
  const salt = 'imooc_24343*dfere@#%%#%'
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router;