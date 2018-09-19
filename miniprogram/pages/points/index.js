// miniprogram/pages/points/index.js
const db = wx.cloud.database()
const point = db.collection('yiyu')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    point:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var point = 0;
    var that = this
   // var openid = wx.getStorageSync('_openid')
   var openid = options.openid;
    const db = wx.cloud.database()
    db.collection('yiyu').where({
      _openid: openid // 填入当前用户 openid
    }).get().then(res => {
      var datas = res.data;
      console.log(res.data)
      for(var i = 0;i < datas.length ;i++){
        point += parseInt(datas[i].point)
      }
      console.log(point)
      var title = ''
              if(point < 28){
                title = ' 心理健康，无焦虑症状'
              } else if (point >= 28 & point < 44 ){
                title = '  偶有焦虑，症状轻微'
              } else if (point >= 44 & point < 52 ){
                title = ' 经常焦虑，中度症状'
              }else{
                title = ' 重度焦虑，必要时请请教医生'
              }
      that.setData({
        point: title
      })
    })
   

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})