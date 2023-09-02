// pages/mine/rep/rep.js
Page({

  
  data: {
  
  },
  formSubmit: function (e) {
    var that = this;
    wx.request({
      url: 'http://47.92.199.104:8080/addUser/'+e.detail.value.tele+'/'+e.detail.value.mail1+'/'+e.detail.value.mail2,
      method:'post',
      data:e.detail.value,
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
  wx.request({
    url: 'http://47.92.199.104:8080/updateHealthyInfo/'+e.detail.value.rate+'/'+e.detail.value.temp+'/'+e.detail.value.pressure+'/'+e.detail.value.sugar,
    
    data:e.detail.value,
    header: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
      success: function() {
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000//持续的时间
        })
      },
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

  }
})