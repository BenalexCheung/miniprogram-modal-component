Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: true, // 显示modal弹窗
    single: false // false 只显示一个按钮，如果想显示两个改为true即可
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 点击取消按钮的回调函数
  modalCancel(e) {
    // 这里面处理点击取消按钮业务逻辑
    console.log('点击了取消')
  },
  // 点击确定按钮的回调函数
  modalConfirm(e) {
    // 这里面处理点击确定按钮业务逻辑
    console.log('点击了确定')
  }
})