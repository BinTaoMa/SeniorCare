// pages/run/run.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step:null,
    step1:null,
    step2:null,
    value: 25,
    gradientColor: {
      '0%': '#ffd01e',
      '100%': '#ee0a24',
     
    },
    apk: {
      background: "#816557",
      fontColor: "#C48D90",
      articleColor: "#ffffff",

      cover: "https://s1.ax1x.com/2022/09/17/xpAvin.jpg"
    }
  },

  authorizeWeRun(){
    var that = this
//首先获取用户的授权状态
    wx.getSetting({
      success(res){
        // console.log(res)
        if(!res.authSetting['scope.werun']){
// 如果用户还未授权过，需要用户授权读取微信运动数据
          wx.authorize({
            scope: 'scope.werun',
            success() {
              //读取微信步数数据
              that.getWeRunData()
            },
            fail() {
              //如果用户拒绝授权，提示用户需要同意授权才能获取他的微信运动数据
              wx.showModal({
                title: '读取微信运动数据失败',
                content: '请在小程序设置界面（「右上角」 - 「关于」 - 「右上角」 - 「设置」）中允许我们访问微信运动数据',
              })
            }
          })

        }else{
           //如果用户已授权过，直接开始同步微信运动数据
          //读取微信步数数据
          that.getWeRunData()
        }
      }
    })
  },
  getWeRunData(){
    var that = this
    wx.getWeRunData({
      success(res){
        console.log(res)
      wx.cloud.callFunction({
        name:'weRun',
        data:{
          weRunData: wx.cloud.CloudID(res.cloudID),
          obj:{
            shareInfo: wx.cloud.CloudID(res.cloudID)
          }
        }
      }).then(res=>{
      console.log(res.result)
      let step = res.result.event.weRunData.data.stepInfoList[30].step

      that.setData({
        step1:step*0.8,
        step2:(step*0.04).toFixed(2),
        step:step,
      })

      console.log("得到的今日步数：",that.data.step)
      })
      }
    })
  },
  onLoad(options) {
    this.authorizeWeRun();
  },
})