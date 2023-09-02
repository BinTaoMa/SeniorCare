// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      item: 0,
      tab: 0,
      // 播放列表数据
      playlist: [{
        id: 1,
        src: 'http://music.163.com/song/media/outer/url?id=478507889',
      }, {
        id: 2,
        src: 'http://music.163.com/song/media/outer/url?id=541326593',
  
      }, {
        id: 3,
        src: 'http://music.163.com/song/media/outer/url?id=1433584979',
      }],
      state: 'paused',
      playIndex: 0,
      play: {
        currentTime: '00:00',
        duration: '00:00',
        percent: 0,
        title: '',
        singer: '',
      }
    },
      // 页面切换
      changeItem: function(e) {
        this.setData({
          item: e.target.dataset.item,
        })
      },
      // tab切换
      changeTab: function(e) {
        this.setData({
          tab: e.detail.current
        })
      },
    // 实现播放器播放功能
    audioCtx: null,
    onReady: function() {
      this.audioCtx = wx.createInnerAudioContext()
      // 默认选择第1曲
      this.setMusic(0)
      var that = this
      // 播放进度检测
      this.audioCtx.onError(function() {
        console.log('播放失败：' + that.audioCtx.src)
      })
      // 播放完成自动换下一曲
      this.audioCtx.onEnded(function() {
        that.next()
      })
      // 自动更新播放进度
      this.audioCtx.onPlay(function() {})
      this.audioCtx.onTimeUpdate(function() {
        that.setData({
          'play.duration': formatTime(that.audioCtx.duration),
          'play.currentTime': formatTime(that.audioCtx.currentTime),
          'play.percent': that.audioCtx.currentTime / that.audioCtx.duration * 100
        })
      })
      // 格式化时间
      function formatTime(time) {
        var minute = Math.floor(time / 60) % 60;
        var second = Math.floor(time) % 60
        return (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second)
      }
    },
    // 音乐播放
    setMusic: function(index) {
      var music = this.data.playlist[index]
      this.audioCtx.src = music.src
      this.setData({
        playIndex: index,
        'play.title': music.title,
        'play.singer': music.singer,
        'play.coverImgUrl': music.coverImgUrl,
        'play.currentTime': '00:00',
        'play.duration': '00:00',
        'play.percent': 0
      })
    },
  
    // 播放按钮
    play: function() {
      this.audioCtx.play()
      this.setData({
        state: 'running'
      })
    },
  
    // 暂停按钮
    pause: function() {
      this.audioCtx.pause()
      this.setData({
        state: 'paused'
      })
    },
  
    // 下一曲按钮
    next: function() {
      var index = this.data.playIndex >= this.data.playlist.length - 1 ? 0 : this.data.playIndex + 1
      this.setMusic(index)
      if (this.data.state === 'running') {
        this.play()
      }
    },
    
    // 滚动条调节歌曲进度
    sliderChange: function(e) {
      var second = e.detail.value * this.audioCtx.duration / 100
      this.audioCtx.seek(second)
    },
  
    // 播放列表换曲功能
    change: function(e) {
      this.setMusic(e.currentTarget.dataset.index)
      this.play()
    }
  })
  