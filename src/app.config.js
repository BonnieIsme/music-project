export default {
  pages: [
    'pages/find/index',
    'pages/cloud/index',
    'pages/custom/index',
    'pages/profile/index',
    'pages/sing/index',
    'pages/web/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '云音乐',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    list:[
      {
        'iconPath':'assets/icons/tabBar/find.png',
        'selectedIconPath':'assets/icons/tabBar/find-active.png',
        pagePath:'pages/find/index',
        text:'发现'
      },
      {
        'iconPath':'assets/icons/tabBar/custom.png',
        'selectedIconPath':'assets/icons/tabBar/custom-active.png',
        pagePath:'pages/custom/index',
        text:'播客'
      },
      {
        'iconPath':'assets/icons/tabBar/profile.png',
        'selectedIconPath':'assets/icons/tabBar/profile-active.png',
        pagePath:'pages/profile/index',
        text:'我的'
      },
      {
        'iconPath':'assets/icons/tabBar/sing.png',
        'selectedIconPath':'assets/icons/tabBar/sing-active.png',
        pagePath:'pages/sing/index',
        text:'k歌'
      },
      {
        'iconPath':'assets/icons/tabBar/cloud.png',
        'selectedIconPath':'assets/icons/tabBar/cloud-active.png',
        pagePath:'pages/cloud/index',
        text:'云村'
      }
    ],
    'color': '#bfbfbf',
    'selectedColor':'#d81e06',
    'borderStyle':'white',
    'backgroundColor':'#fff'
  },
  subPackages:[
    {
      root:'packageLogin',
      pages:['pages/login/authorize/index','pages/login/phone/index','pages/login/email/index']
    }
  ]
}
