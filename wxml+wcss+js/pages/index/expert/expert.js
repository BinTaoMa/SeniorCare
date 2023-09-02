const app = getApp()
Page({
 data: {
  centent_Show: true,
 },
 getdata: function () {

  //声明当天执行的
  var that = this;

  //向搜索后端服务器发起请求
  wx.request({
   //URL
   url: 'http://121.5.164.60:8080/queryAllDoctor',
   //请求的数据时JSON格式
   header: {
    'Content-Type':'application/json'
   },
   //请求成功
   success: function (res) {
    //控制台打印（开发调试用）
    console.log(res.data)
    //把所有结果存进一个名为re的数组
    if(res.data)
    {
      that.setData({
        re: res.data,
        centent_Show: true,
       })
   }
  }
  })
},
 //执行点击事件
 formSubmit: function (e) {
  //声明当天执行的
  var that = this;
  //获取表单所有name=keyword的值
  var formData = e.detail.value.keyword;
  //显示搜索中的提示
  // wx.showLoading({
  //  title: '搜索中',
  //  icon: 'loading'
  // })
  if(formData)
  {
    
  }else{
    formData="1";
  }
    // 向搜索后端服务器发起请求
    
  wx.request({
   //URL
   url: 'http://121.5.164.60:8080/queryDoctorByName/'+ formData,
   //发送的数据
   data: formData,

   //请求的数据时JSON格式
   header: {
    'Content-Type':'application/json'
   },

   //请求成功
   success: function (res) {

    //控制台打印（开发调试用）
    console.log(res.data)

    //把所有结果存进一个名为re的数组
    if(res.data[0])
    {
      console.log(res.data)
      that.setData({
        re: res.data,
        centent_Show: false,
       })
    }else{
      console.log(1),
     that.getdata()
    }
    //搜索成功后，隐藏搜索中的提示
    // wx.hideLoading();
   }
  })
 },

 //执行点击事件
 
 onLoad: function (options) {
   this.getdata();
 },
})