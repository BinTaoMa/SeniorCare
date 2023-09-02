// index.js

Page({

  expert:function(){
    wx.navigateTo({
      title:"aa",
      url:"/pages/index/expert/expert",
    })
  },   
  medicine:function(){
    wx.navigateTo({
      title:"aa",
      url:"/pages/index/medicine/medicine",
    })
  },   
  help:function(){
    wx.navigateTo({
      title:"aa",
      url:"/pages/index/help/help",
    })
  },   
  share:function(){
    wx.navigateTo({
      title:"aa",
      url:"/pages/index/check/index",
    })
  },   
  healthinfo:function(){
    wx.navigateTo({
        title:"aa",
        url:"/pages/index/report/report",
      })
  },
  //用户点击右上角分享给好友，要现在分享到好友这个设置menu的两个参数，才可以实现分享到朋友圈
  onShareAppMessage:function(){
    wx.showShareMenu({
      withShareTicket:true,
      menu:['shareAppMessage','shareTimeline']
    })
  },
  //用户点击右上角分享朋友圈
  onShareTimeline:function(){
    return {
      title:'',
      query:{
        key:value
      },
      imageUrl:''
    }
  }

})
