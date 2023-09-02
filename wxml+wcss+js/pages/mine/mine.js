// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    nickName:"登录",
    avatarUrl:"https://s1.ax1x.com/2022/09/17/xpA380.png",
    },
    getUserProfile(){
      wx.getUserProfile({
        desc: '登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          this.setData({
            nickName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl
          })
          wx.setStorage({    //数据缓存方法
            key: 'nickName',   //关键字，本地缓存中指定的key
            data: res.userInfo.nickName,    //缓存微信用户公开信息，
            success: function() {      //缓存成功后，输出提示
              console.log('写入nickName缓存成功')
            },
            fail: function() {        //缓存失败后的提示
              console.log('写入nickName发生错误')
            }
          })
          wx.setStorage({    //数据缓存方法
            key: 'avatarUrl',   //关键字，本地缓存中指定的key
            data: res.userInfo.avatarUrl,    //缓存微信用户公开信息，
            success: function() {      //缓存成功后，输出提示
              console.log('写入avatarUrl缓存成功')
            },
            fail: function() {        //缓存失败后的提示
              console.log('写入avatarUrl发生错误')
            }
          })
        }
      })
        wx.getStorage({
        key: 'nickName',
        success (res) {
          that.setData({
            nickName:res.data
          })
        }
      })
      wx.getStorage({
        key: 'avatarUrl',
        success (res) {
          that.setData({
            avatarUrl:res.data
          })
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

  }
})