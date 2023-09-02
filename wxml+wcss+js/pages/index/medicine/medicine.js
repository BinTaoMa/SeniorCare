// pages/index/medicine/medicine.js
Page({
  
  add:function(){
    wx.navigateTo({
      title:"aa",
      url:"/pages/index/medicine/add",
    })
  },
 
  data: {

  },
  //执行点击事件
  getdata: function (e) {

    //声明当天执行的
    var that = this;
  
    //向搜索后端服务器发起请求
    wx.request({
     //URL
     url: 'http://47.92.199.104:8080/queryAllMedicine',
  
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
          centent_Show: false,
         })
      }else{
        that.setData({
          centent_Show: true,
          re: undefined
         })
      }
      //搜索成功后，隐藏搜索中的提示
      wx.hideLoading();
     }
    })
   },
   onLoad: function (options) {this.getdata();
   },
})