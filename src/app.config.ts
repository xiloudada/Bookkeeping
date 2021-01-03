export default {
  pages: [
    'pages/index/index',
    'pages/chart/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#2c2c2c',
    selectedColor: '#d81e06',
    list: [
      {
        iconPath: 'icon/edit.png',
        selectedIconPath: 'icon/edit1.png',
        pagePath: 'pages/index/index',
        text: '首页',
      }, {
        iconPath: 'icon/chart.png',
        selectedIconPath: 'icon/chart1.png',
        pagePath: 'pages/chart/index',
        text: '图表',
      }, {
        iconPath: 'icon/mine.png',
        selectedIconPath: 'icon/mine1.png',
        pagePath: 'pages/mine/index',
        text: '我的',
      },
    ],
  },
}
