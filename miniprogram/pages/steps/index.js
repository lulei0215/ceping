//import Page from '../../common/page';
const db = wx.cloud.database()
const point = db.collection('yiyu')
Page({
  data: {
    point:[],
    points: [],
    active: 0,
    indexid:1,
    clicks:[],
    steps: [
      {
        name:'1.觉得比平时容易紧张或着急？',
        items:[
          { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '2.无缘无故在感到害怕？',
        items: [
              { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '3.容易心里烦乱或感到惊恐？',
        items: [
              { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '4.觉得自己可能要发疯？',
        items: [
              { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '5.觉得一切都很好？',
        items: [
           { value: 'A', title:".没有或很少时间",point:4},
          { value: 'B', title: ".小部份时间", point: 3},
          { value: 'C', title: ".相当多时间", point: 2},
          { value: 'D', title: ".绝大部分或全部时间", point: 1 },
        ]
      },
      {
        name: '6.手脚发抖打颤',
        items: [
          { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '7.因为头疼，颈痛和背痛而苦恼？',
        items: [
          { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '8.觉得容易衰弱和疲乏？',
        items: [
          { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '9.觉得心平气和，并且容易安静坐着',
        items: [
           { value: 'A', title:".没有或很少时间",point:4},
          { value: 'B', title: ".小部份时间", point: 3},
          { value: 'C', title: ".相当多时间", point: 2},
          { value: 'D', title: ".绝大部分或全部时间", point: 1 },
        ]
      },
      {
        name: '10.觉得心跳得很快？',
        items: [
             { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '11.因为一阵阵头晕而苦恼',
        items: [
             { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '12.有晕倒发作，或觉得要晕倒似的？',
        items: [
            { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '13.呼气呼气都感到很容易？',
        items: [
          { value: 'A', title:".没有或很少时间",point:4},
          { value: 'B', title: ".小部份时间", point: 3},
          { value: 'C', title: ".相当多时间", point: 2},
          { value: 'D', title: ".绝大部分或全部时间", point: 1 },
        ]
      },
      {
        name: '14.手脚麻木和刺痛?',
        items: [
            { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '15.因为胃痛和消化不良而苦恼？',
        items: [
            { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '16.常常要小便？',
        items: [
            { value: 'A', title:".没有或很少时间",point:1},
          { value: 'B', title: ".小部份时间", point: 2},
          { value: 'C', title: ".相当多时间", point: 3},
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '17.手脚常常都是干燥温暖的？',
        items: [
          { value: 'A', title:".没有或很少时间",point:4},
          { value: 'B', title: ".小部份时间", point: 3},
          { value: 'C', title: ".相当多时间", point: 2},
          { value: 'D', title: ".绝大部分或全部时间", point: 1 },
        ]
      },
      {
        name: '18.脸红发热？',
        items: [
          { value: 'A', title: ".没有或很少时间", point: 1 },
          { value: 'B', title: ".小部份时间", point: 2 },
          { value: 'C', title: ".相当多时间", point: 3 },
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      },
      {
        name: '19.容易入睡而且一夜睡得很好？',
        items: [
          { value: 'A', title:".没有或很少时间",point:4},
          { value: 'B', title: ".小部份时间", point: 3},
          { value: 'C', title: ".相当多时间", point: 2},
          { value: 'D', title: ".绝大部分或全部时间", point: 1 },
        ]
      },
      {
        name: '20.做恶梦？',
        items: [
          { value: 'A', title: ".没有或很少时间", point: 1 },
          { value: 'B', title: ".小部份时间", point: 2 },
          { value: 'C', title: ".相当多时间", point: 3 },
          { value: 'D', title: ".绝大部分或全部时间", point: 4 },
        ]
      }
    ]
  },
  formSubmit: function (e) {
    console.log(e)
    var point = this.data.point;
    console.log(point.length);

  
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  radioChange: function (e) {
    
     console.log(e)
    var that = this;
     //题目号
     var id = e.target.dataset.id;
     //对应答案得分数
     var point = e.detail.value
     //当前point数组
    var nowpoint = that.data.point
    var arr = []
    arr[id]=point
    that.setData({
      points:arr
    })
    wx.cloud.callFunction({
      // 云函数名称
      name: "points",
      data:{
        id: id,
        point: point
      },
      // 传给云函数的参数
      success: function (res) {
        console.log(res.result) // 3
        var openid = res.result
        wx.setStorageSync('_openid', openid);
        db.collection('yiyu').where({
          _openid:openid,id:id  // 填入当前用户 openid
        }).get({
          success: function (res) {
            console.log(res.data)
            var datas = res.data
            if(datas.length > 0){//有此题记录
              console.log(1)
              db.collection('yiyu').doc(datas._id).update({
                // data 传入需要局部更新的数据
                data: {
                  // 表示将 done 字段置为 true
                  point: point
                }
              })
                .then(console.log('更新了数据'))
                .catch(console.error)
            }else{
              console.log(0)
              console.log('需要新增')
              db.collection('yiyu').add({
                data:{id:id,point:point},
                success:res=>{
                  console.log('添加成功')
                },fail:err=>{
                  console.log(err)
                }
              })
            }
          },fail:function(err){
            console.log(err)
          }
        })
        //var datapoint = res.result.data;
        // for(var i =0;i < datapoint.length ;i++){
        //   if(datapoint[i].id == id){
        //     console.log('库里有这个题目得分数')
        //     var nowid = datapoint[i]._id
        //     db.collection('yiyu').doc(nowid).update({
        //       // data 传入需要局部更新的数据
        //       data: {
        //         // 表示将 done 字段置为 true
        //         point:point
        //       }
        //     })
        //       .then(console.log('更新了数据'))
        //       .catch(console.error)
        //   }else{
        //     console.log('没有这个题目')
        //     db.collection('yiyu').add({
        //       // data 字段表示需新增的 JSON 数据
        //       data: {
        //         id:id,
        //         point:point
        //       },
        //       success: function (res) {
        //         // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        //         console.log('新增成功')
        //         console.log(res)
        //       },
        //       fail: console.error
        //     })
        //   }
        // }
      },
      fail: console.error
    })
    //console.log('radio发生change事件，携带value值为：', e.detail.value, e.detail.data-id)
  },
  nextq:function(e){
    var that = this;
    var openid = wx.getStorageSync('_openid')
    console.log(openid)
    console.log(e)
    var point = that.data.points
    var id = e.target.dataset.id 
    if (point == false){
      console.log('请选择')
      wx.showToast({
        title: '请选择答案',
        icon: 'fail',
        duration: 2000
      })
      return ;
    }else{

      db.collection('yiyu').where({
        _openid: openid, id: id  // 填入当前用户 openid
      }).get({
        success: function (res) {
          console.log(res.data)
          var datas = res.data
          if (datas.length > 0) {//查到数据
            console.log("有数据可以跳下一题")
            that.setData({
              indexid: id+1
            })
          } else {//没有数据
            console.log('不能跳下一题')
            wx.showToast({
              title: '请选择答案',
              icon: 'fail',
              duration: 2000
            })
            
           
          }
        }, fail: function (err) {
          console.log(err)
        }
      })


      console.log("当前页面"+that.data.indexid)
      
      console.log(id)
     
    }
  console.log(that.data.points)
  },
  lastq: function (e) {
   
    var that = this;
    console.log(e)
    var point = that.data.points
    console.log(point == false);
    if (point == false) {
      console.log('请选择')
      return;
    } else {
      var id = e.target.dataset.id - 1
      console.log(id)
      that.setData({
        indexid: id
      })
    }
    console.log(that.data.points)
  },
  nextStep() {
    this.setData({
      active: ++this.data.active % 4
    });
  },
  pointss:function(){
    var openid = wx.getStorageSync('_openid')
    wx.navigateTo({
      url: '/pages/points/index?openid=' + openid
    })
  }
});
