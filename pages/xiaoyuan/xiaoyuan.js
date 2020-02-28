//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: '',
    password: '',
    
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    wx.hideTabBar({})
  },
  onLoad: function () {
    
  },


  // 获取输入账号 
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录处理
  login: function () {  
    var that = this;
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    }
    if(this.data.username =="123456" && this.data.password == 123456){
      wx.navigateTo({
        url: '../schooluser/schooluser',
      })
    } else if (this.data.username !== "123456" && this.data.password !== 123456){
      wx.showToast({
        title: '账号或密码错误',
        icon: 'none',
        duration: 2000
      })
    }
  }
})
