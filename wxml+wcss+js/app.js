// app.js
App({
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
  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      });
    }

    this.globalData = {};

    var myplugin = requirePlugin('fy-plugin');
    myplugin.remaincount('wx91a6afb7d826d595').then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    });
    myplugin.userinfo(15779554232).then((res) => {
    console.log(res)
      }).catch((err) => {
    console.log(err)
    });
  },
  //用户点击右上角分享给好友，要现在分享到好友这个设置menu的两个参数，才可以实现分享到朋友圈
  

});


