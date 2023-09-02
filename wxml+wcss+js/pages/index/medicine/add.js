// pages/index/medicine/add.js
const app = getApp();
//引入插件：微信同声传译
const plugin = requirePlugin('WechatSI');
//获取全局唯一的语音识别管理器recordRecoManager
const manager = plugin.getRecordRecognitionManager();

var date = new Date();
var currentHours = date.getHours();
var currentMinute = date.getMinutes();

Page({
 
//与wxml中的数据一一对应，在具体函数中修改time、multiArray、multiIndex等值，进行页面的呈现
data: {
  
  //语音
  recordState: false, //录音状态
  recordState2: false, //录音状态
  recordState3: false, //录音状态
  content:'',//内容
  content2:'',//内容
  content3:'',//内容

  startDate: "请选择日期",

    multiArray: [['今天', '明天', '3-2', '3-3', '3-4', '3-5'], [0, 1, 2, 3, 4, 5, 6], [0, 10, 20]],
    multiIndex: [0, 0, 0],
  },
  
  onLoad: function (options) {
    //识别语音
    this.initRecord();
  },
  // 手动输入内容
  conInput: function (e) {
    this.setData({
      content:e.detail.value,
    })
  },
  //识别语音 -- 初始化
  initRecord: function () {
    const that = this;
    // 有新的识别内容返回，则会调用此事件
    manager.onRecognize = function (res) {
      console.log(res)
    }
    // 正常开始录音识别时会调用此事件
    manager.onStart = function (res) {
      console.log("成功开始录音识别", res)
    }
    // 识别错误事件
    manager.onError = function (res) {
      console.error("error msg", res)
    }
    //识别结束事件
    manager.onStop = function (res) {
      console.log('..............结束录音')
      console.log('录音临时文件地址 -->' + res.tempFilePath); 
      console.log('录音总时长 -->' + res.duration + 'ms'); 
      console.log('文件大小 --> ' + res.fileSize + 'B');
      console.log('语音内容 --> ' + res.result);
      if (res.result == '') {
        wx.showModal({
          title: '提示',
          content: '听不清楚，请重新说一遍！',
          showCancel: false,
          success: function (res) {}
        })
        return;
      }
      var text = that.data.content + res.result;
      that.setData({
        content: text
      })
    }
  },
  //语音  --按住说话
  touchStart: function (e) {
    this.setData({
      recordState: true  //录音状态
    })
    // 语音开始识别
    manager.start({
      lang: 'zh_CN',// 识别的语言，目前支持zh_CN en_US zh_HK sichuanhua
    })
  },
  //语音  --松开结束
  touchEnd: function (e) {
    this.setData({
      recordState: false
    })
    // 语音结束识别
    manager.stop();
  },


  //识别语音 -- 初始化
  initRecord2: function () {
    const that = this;
    // 有新的识别内容返回，则会调用此事件
    manager.onRecognize = function (res) {
      console.log(res)
    }
    // 正常开始录音识别时会调用此事件
    manager.onStart = function (res) {
      console.log("成功开始录音识别", res)
    }
    // 识别错误事件
    manager.onError = function (res) {
      console.error("error msg", res)
    }
    //识别结束事件
    manager.onStop = function (res) {
      console.log('..............结束录音')
      console.log('录音临时文件地址 -->' + res.tempFilePath); 
      console.log('录音总时长 -->' + res.duration + 'ms'); 
      console.log('文件大小 --> ' + res.fileSize + 'B');
      console.log('语音内容 --> ' + res.result);
      if (res.result == '') {
        wx.showModal({
          title: '提示',
          content2: '听不清楚，请重新说一遍！',
          showCancel: false,
          success: function (res) {}
        })
        return;
      }
      var text2 = that.data.content2 + res.result;
      that.setData({
        content2: text2
      })
    }
  },
//语音  --按住说话
touchStart2: function (e) {
  this.setData({
    recordState2: true  //录音状态
  })
  // 语音开始识别
  manager.start({
    lang: 'zh_CN',// 识别的语言，目前支持zh_CN en_US zh_HK sichuanhua
  })
},
//语音  --松开结束
touchEnd2: function (e) {
  this.setData({
    recordState2: false
  })
  // 语音结束识别
  manager.stop();
},


  //识别语音 -- 初始化
  initRecord3: function () {
    const that = this;
    // 有新的识别内容返回，则会调用此事件
    manager.onRecognize = function (res) {
      console.log(res)
    }
    // 正常开始录音识别时会调用此事件
    manager.onStart = function (res) {
      console.log("成功开始录音识别", res)
    }
    // 识别错误事件
    manager.onError = function (res) {
      console.error("error msg", res)
    }
    //识别结束事件
    manager.onStop = function (res) {
      console.log('..............结束录音')
      console.log('录音临时文件地址 -->' + res.tempFilePath); 
      console.log('录音总时长 -->' + res.duration + 'ms'); 
      console.log('文件大小 --> ' + res.fileSize + 'B');
      console.log('语音内容 --> ' + res.result);
      if (res.result == '') {
        wx.showModal({
          title: '提示',
          content3: '听不清楚，请重新说一遍！',
          showCancel: false,
          success: function (res) {}
        })
        return;
      }
      var text3 = that.data.content3 + res.result;
      that.setData({
        content3: text3
      })
    }
  },
//语音  --按住说话
touchStart3: function (e) {
  this.setData({
    recordState3: true  //录音状态
  })
  // 语音开始识别
  manager.start({
    lang: 'zh_CN',// 识别的语言，目前支持zh_CN en_US zh_HK sichuanhua
  })
},
//语音  --松开结束
touchEnd3: function (e) {
  this.setData({
    recordState3: false
  })
  // 语音结束识别
  manager.stop();
},
formSubmit(e){

    wx.request({
        url: 'http://47.92.199.104:8080/addMedicine/'+e.detail.value.title+'/'+e.detail.value.category+'/'+e.detail.value.description,
        method:'post',
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

pickerTap:function() {
  date = new Date();

  var monthDay = ['今天','明天'];
  var hours = [];
  var minute = [];
  
  currentHours = date.getHours();
  currentMinute = date.getMinutes();

  // 月-日
  for (var i = 2; i <= 28; i++) {
    var date1 = new Date(date);
    date1.setDate(date.getDate() + i);
    var md = (date1.getMonth() + 1) + "-" + date1.getDate();
    monthDay.push(md);
  }

  var data = {
    multiArray: this.data.multiArray,
    multiIndex: this.data.multiIndex
  };

  if(data.multiIndex[0] === 0) {
    if(data.multiIndex[1] === 0) {
      this.loadData(hours, minute);
    } else {
      this.loadMinute(hours, minute);
    }
  } else {
    this.loadHoursMinute(hours, minute);
  }

  data.multiArray[0] = monthDay;
  data.multiArray[1] = hours;
  data.multiArray[2] = minute;

  this.setData(data);
},




bindMultiPickerColumnChange:function(e) {
  date = new Date();

  var that = this;

  var monthDay = ['今天', '明天'];
  var hours = [];
  var minute = [];

  currentHours = date.getHours();
  currentMinute = date.getMinutes();

  var data = {
    multiArray: this.data.multiArray,
    multiIndex: this.data.multiIndex
  };
  // 把选择的对应值赋值给 multiIndex
  data.multiIndex[e.detail.column] = e.detail.value;

  // 然后再判断当前改变的是哪一列,如果是第1列改变
  if (e.detail.column === 0) {
    // 如果第一列滚动到第一行
    if (e.detail.value === 0) {

      that.loadData(hours, minute);
      
    } else {
      that.loadHoursMinute(hours, minute);
    }

    data.multiIndex[1] = 0;
    data.multiIndex[2] = 0;

    // 如果是第2列改变
  } else if (e.detail.column === 1) {

    // 如果第一列为今天
    if (data.multiIndex[0] === 0) {
      if (e.detail.value === 0) {
        that.loadData(hours, minute);
      } else {
        that.loadMinute(hours, minute);
      }
      // 第一列不为今天
    } else {
      that.loadHoursMinute(hours, minute);
    }
    data.multiIndex[2] = 0;

    // 如果是第3列改变
  } else {
    // 如果第一列为'今天'
    if (data.multiIndex[0] === 0) {

      // 如果第一列为 '今天'并且第二列为当前时间
      if(data.multiIndex[1] === 0) {
        that.loadData(hours, minute);
      } else {
        that.loadMinute(hours, minute);
      }
    } else {
      that.loadHoursMinute(hours, minute);
    }
  }
  data.multiArray[1] = hours;
  data.multiArray[2] = minute;
  this.setData(data);
},

loadData: function (hours, minute) {

  var minuteIndex;
  if (currentMinute > 0 && currentMinute <= 10) {
    minuteIndex = 10;
  } else if (currentMinute > 10 && currentMinute <= 20) {
    minuteIndex = 20;
  } else if (currentMinute > 20 && currentMinute <= 30) {
    minuteIndex = 30;
  } else if (currentMinute > 30 && currentMinute <= 40) {
    minuteIndex = 40;
  } else if (currentMinute > 40 && currentMinute <= 50) {
    minuteIndex = 50;
  } else {
    minuteIndex = 60;
  }

  if (minuteIndex == 60) {
    // 时
    for (var i = currentHours + 1; i < 24; i++) {
      hours.push(i);
    }
    // 分
    for (var i = 0; i < 60; i += 10) {
      minute.push(i);
    }
  } else {
    // 时
    for (var i = currentHours; i < 24; i++) {
      hours.push(i);
    }
    // 分
    for (var i = minuteIndex; i < 60; i += 10) {
      minute.push(i);
    }
  }
},

loadHoursMinute: function (hours, minute){
  // 时
  for (var i = 0; i < 24; i++) {
    hours.push(i);
  }
  // 分
  for (var i = 0; i < 60; i += 10) {
    minute.push(i);
  }
},

loadMinute: function (hours, minute) {
  var minuteIndex;
  if (currentMinute > 0 && currentMinute <= 10) {
    minuteIndex = 10;
  } else if (currentMinute > 10 && currentMinute <= 20) {
    minuteIndex = 20;
  } else if (currentMinute > 20 && currentMinute <= 30) {
    minuteIndex = 30;
  } else if (currentMinute > 30 && currentMinute <= 40) {
    minuteIndex = 40;
  } else if (currentMinute > 40 && currentMinute <= 50) {
    minuteIndex = 50;
  } else {
    minuteIndex = 60;
  }

  if (minuteIndex == 60) {
    // 时
    for (var i = currentHours + 1; i < 24; i++) {
      hours.push(i);
    }
  } else {
    // 时
    for (var i = currentHours; i < 24; i++) {
      hours.push(i);
    }
  }
  // 分
  for (var i = 0; i < 60; i += 10) {
    minute.push(i);
  }
},

bindStartMultiPickerChange: function (e) {
  var that = this;
  var monthDay = that.data.multiArray[0][e.detail.value[0]];
  var hours = that.data.multiArray[1][e.detail.value[1]];
  var minute = that.data.multiArray[2][e.detail.value[2]];

  if (monthDay === "今天") {
    var month = date.getMonth()+1;
    var day = date.getDate();
    monthDay = month + "月" + day + "日";
  } else if (monthDay === "明天") {
    var date1 = new Date(date);
    date1.setDate(date.getDate() + 1);
    monthDay = (date1.getMonth() + 1) + "月" + date1.getDate() + "日";

  } else {
    var month = monthDay.split("-")[0]; // 返回月
    var day = monthDay.split("-")[1]; // 返回日
    monthDay = month + "月" + day + "日";
  }

  var startDate = monthDay + " " + hours + ":" + minute;
  that.setData({
    startDate: startDate
  })
},

})