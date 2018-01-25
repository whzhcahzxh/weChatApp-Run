
// pages/QA/QA.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question: "当项目越来越大的时候，你的代码会充斥着非常多的界面交互逻辑和程序的各种状态变量，显然这不是一个很好的开发模式，因此就有了 MVVM 的开发模式",
    choices: [
      {
        text:"选项1是这样的",
        answer:"right",
      },
      {
        text: "选项2是这样的",
        answer: "wrong",
      },
      {
        text: "选项3是这样的",
        answer: "wrong",
      },
      {
        text: "选项4是这样的",
        answer: "wrong",
      }]      
  },

  pickOne: function (choice) {
    if (choice.answer == "right") {
      this.setData({ question: "111" });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})