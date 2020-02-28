//index.js
//获取应用实例
const app = getApp();
var yhqData = require('../../utils/yhqdata.js')


Page({
  data: {
    shangchengList: ['lunbo1', 'lunbo2', 'lunbo3'],
    yhnum: 0,
    num: 100,
    yhqnum: 0,
    name1: "悬赏印花",
    des1: "用来发布悬赏任务的",

    price: "2",
    listyhq: []
  },

  onLoad: function() {

    // 优惠券列表
    var yhqlist = [];
    var dic = yhqData.data;

    for (var i in dic) {
      yhqlist.push({
        name: dic[i].name,
        des: dic[i].des,
        price: dic[i].price,
        img: dic[i].img,
      })
    }
    this.setData({
      "listyhq": yhqlist
    });
    console.log(yhqlist)

  },

  goDetail: function(e) {
    var des = e.currentTarget.dataset.pdes;
    var d = e.currentTarget.dataset.pname;
    var p = e.currentTarget.dataset.prices;
    var img2 =e.currentTarget.dataset.img2;
    console.log(des);
    console.log(d);
    console.log(p);
    console.log(img2);
    if (d) {
      wx.navigateTo({
        url: '../yhqdata/yhqdata?pname=' + d + "&pdes=" + des + "&prices=" + p + "&pimg=" + img2
      })
    }
  }


})