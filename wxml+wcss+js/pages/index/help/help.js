// pages/index/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"15779554232",
  },
 //执行点击事件
 call: function (e) {

  //声明当天执行的
  var that = this;
/*获取电话号码*/
let item = e.currentTarget.dataset.item;
/*这里是微信的电话api*/
  wx.makePhoneCall({
phoneNumber: item
})
  //显示搜索中的提示
  wx.showLoading({
   title: '呼叫中',
   icon: 'loading'
  })

  //向搜索后端服务器发起请求
  wx.request({
   //URL
   url: 'http://47.92.199.104:8080/emergency',
   //发送的数据

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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

})