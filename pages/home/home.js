// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    indicatorDots: true,//显示面板指示点
    beforeColor: "#DCDCDC",//指示点颜色
    afterColor: "#FF7a8f",//当前选中的指示点颜色
    duration: 500,
    swiperCurrent: 0,
 // 滑动菜单数据
 scrollOne: [
  {
    'id':1,
    'icon': '../../images/type/sc.png',
    'text': '今日蔬菜',
    'url': '../dev/dev'      
  },
  {
    'id':2,
    'icon': '../../images/type/sc.png',
    'text': '水果',
    'url': '../dev/dev'
  },
  {
    'id':3,
    'icon': '../../images/type/sc.png',
    'text': '第一页',
    'url': '../dev/dev'
  },
  {
    'id':4,
    'icon': '../../images/type/sc.png',
    'text': '第一页',
    'url': '../dev/dev'
  },
  {
    'id':5,
    'icon': '../../images/type/sc.png',
    'text': '第一页',
    'url': '../dev/dev'
  },
  {
    'id':6,
    'icon': '../../images/type/sc.png',
    'text': '第一页',
    'url': '../dev/dev'
  },
  {
    'id':7,
    'icon': '../../images/type/sc.png',
    'text': '第一页',
    'url': '../dev/dev'
  },
  {
    'id':8,
    'icon': '../../images/type/sc.png',
    'text': '第一页',
    'url': '../guide/guide'
  },
],
scrollTwo: [
  {
    'id':9,
    'icon': '../../images/type/sc.png',
    'text': '第二页',
    'url': '../dev/dev'
  },
  {
    'id':10,
    'icon': '../../images/type/sc.png',
    'text': '第二页',
    'url': '../dev/dev'
  },
  {
    'id':11,
    'icon': '../../images/type/sc.png',
    'text': '第二页',
    'url': '../dev/dev'
  },
  {
    'id':12,
    'icon': '../../images/type/sc.png',
    'text': '第二页',
    'url': '../dev/dev'
  },
  {
    'id':13,
    'icon': '../../images/type/sc.png',
    'text': '第二页',
    'url': '../dev/dev'
  },
  {
    'id':14,
    'icon': '../../images/type/sc.png',
    'text': '第二页',
    'url': '../dev/dev'
  },
  {
    'id':15,
    'icon': '../../images/type/sc.png',
    'text': '第二页',
    'url': '../dev/dev'
  },
  {
    'id':16,
    'icon': '../../images/type/sc.png',
    'text': '第二页',
    'url': '../dev/dev'
  },
],
scrollThree: [
  {
    'id':17,
    'icon': '../../images/type/sc.png',
    'text': '第三页',
    'url': '../dev/dev'
  },
  {
    'id':18,
    'icon': '../../images/type/sc.png',
    'text': '第三页',
    'url': '../dev/dev'
  },
  {
    'id':19,
    'icon': '../../images/type/sc.png',
    'text': '第三页',
    'url': '../dev/dev'
  },
  {
    'id':20,
    'icon': '../../images/type/sc.png',
    'text': '第三页',
    'url': '../dev/dev'
  },
  {
    'id':21,
    'icon': '../../images/type/sc.png',
    'text': '第三页',
    'url': '../dev/dev'
  },
  {
    'id':22,
    'icon': '../../images/type/sc.png',
    'text': '第三页',
    'url': '../dev/dev'
  },
  {
    'id':23,
    'icon': '../../images/type/sc.png',
    'text': '第三页',
    'url': '../dev/dev'
  },
  {
    'id':24,
    'icon': '../../images/type/sc.png',
    'text': '第三页',
    'url': '../dev/dev'
  },
],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 点击图标二级分类页面
  gotoPage:function(e){
  //  获取当前点击id   wxss 前面绑定id值
   let id = e.currentTarget.id;
   console.log(id,"===========")
   wx.navigateTo({
     url: '/pages/plugin/verticalnav/verticalnav',
   })

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