// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
     var openid = event.userInfo.openId
//   console.log(openid)
return event.userInfo.openId
  // return await db.collection('yiyu').where({
  //   _openid: openid // 填入当前用户 openid
  // }).get()
}

// const cloud = require('wx-server-sdk')
// cloud.init({
//   env: 'ceshi'
// })
// // 云函数入口函数
// exports.main = async (event, context) => {
//   var openid = event.userInfo.openId
//   console.log(openid)
//   //return event.userInfo.openId
//   return await  testDB.collection('yiyu').where({
//     _openid: openid // 填入当前用户 openid
//   }).get()
// // console.log(event)
// }
