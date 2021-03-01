module.exports = {
  index_page: {
    index_nav: {
      nav_list: ['Develop', 'Distribute', 'Account'],
      logo: require('../assets/img/logo_en.png')
    },
    banner: {
      title: 'QIYU XR Platfrom',
      sub_title: 'Focus on the high-quality VR/AR application',
      btn_text: 'Apply to QIYU developer'
    },
    product: {
      title: 'QIYU VR Headset',
      sub_title: 'Choose your favorite device to develop',
      introduce: 'Whether you are developing virtual reality games, social experiences, entertainment or educational applications, you can use your favorite game engine or our native SDK to easily develop on the Qiyu XR Platform. You can reach PC VR users who use Qiyu wired/wireless streaming technology, as well as the largest mobile VR users who use Qiyu 3 and Qiyu 2S.',
      content: [
        {
          img: require('../assets/img/product_01.png'),
          name: 'QIYU 3',
          u_name: 'All-in-one 6DOF VR Headset',
          btn_text: 'Use QIYU SDK',
          icon: require('../assets/img/logo_s.png')
        },
        {
          img: require('../assets/img/product_02.png'),
          name: 'QIYU 2Pro',
          u_name: 'All-in-one 6DOF VR Headset',
          btn_text: 'Use VIVE WAVE™ SDK',
          icon: require('../assets/img/logo_02.png')
        },
        {
          img: require('../assets/img/product_03.png'),
          name: 'QIYU 2S',
          u_name: 'All-in-one 3DOF VR Headset',
          btn_text: 'Use VIVE WAVE™ SDK',
          icon: require('../assets/img/logo_02.png')
        }
      ]
    },
    reason: {
      title: 'Why choose QIYU platform for development？',
      content_top: [
        {
          img: require('../assets/img/pic_01.png'),
          name: 'Multiple interaction Methods',
          u_name: '6DOD Game Controller, Hand Tracking, Virtual Keyboard'
        },
        {
          img: require('../assets/img/pic_02.png'),
          name: 'Main Game Engine Support',
          u_name: 'Unity, Unreal (Coming Soon)'
        }
      ],
      content_center: [
        {
          img: require('../assets/img/pic_03.png'),
          name: '3D Spatial Audio',
          u_name: 'Unity AudioSource Component, Resonance Audio Plugin'
        },
        {
          img: require('../assets/img/pic_04.png'),
          name: 'Advance Render Mode',
          u_name: 'FFR, VR Compositor Layers, SinglePassSoon)'
        }
      ],
      content_bottom: [
        {
          img: require('../assets/img/pic_05.png'),
          name: 'Free DLC & Video Hosting Services',
          u_name: 'Help developers reduce APK size'
        },
        {
          img: require('../assets/img/pic_06.png'),
          name: 'VR Develop Testing Tool',
          u_name: 'Provide real-time indicator testing tools for developers\' testing applications.'
        }
      ]
    },
    footerList: {
      footer_item: [
        {
          title: 'Product',
          footer_nav: [
            'QIYU 3', 'QIYU 2Pro', 'QIYU 2S', 'QIYU 2', '2S', 'QIYU OS', 'QIYU AR Glass'
          ]
        },
        {
          title: 'Content',
          footer_nav: [
            'Apps And Games', 'Viideo'
          ]
        },
        {
          title: 'Corporate Services',
          footer_nav: [
            'Hotel Business', 'Education Industry'
          ]
        },
        {
          title: 'About QIYU',
          footer_nav: [
            'Company Profile ', 'News', 'Career Opportunities'
          ]
        },
        {
          title: 'More',
          footer_nav: [
            'Developer Platform', 'Industry Solution'
          ]
        }
      ],
      footer_item_another: [
        {
          title: '联系我们',
          footer_nav: [
            'Business Cooperation:columbus@qiyi.com', 'Recruitment：', 'Company Address：China Beijing Haidian North First Street 4 IQiyi Innovation Building'
          ],
          footer_link: 'Check the position >>'
        },
        {
          title: 'National customer hotline : 400-923-7171 Ext. 5',
          icon: require('../assets/img/icon_phone.png'),
          code: [
            {
              icon: require('../assets/img/code_01.png'),
              text: '关注我们',
              text_name: '微信订阅号'
            },
            {
              icon: require('../assets/img/code_02.png'),
              text: '关注我们',
              text_name: '微信服务号'
            }
          ]
        }
      ],
      footer_status: 'Copyright © 2020爱奇艺智能All Rights Reserved 渝ICP备18002599号'
    }
  },
  login_page: {
    placeholder: {
      username: 'Account',
      pwd: 'Password',
      code: 'Verification Code'
    },
    error_message: {
      username: '*No account/wrong account or password',
      pwd: 'The password must be no less than 6 digits',
      code: 'Captcha error'
    },
    login_info: {
      remember_login: 'Remember my login information',
      forget: 'Forgot Password'
    },
    logo: {
      img: require('../assets/img/logo_en.png')
    },
    login_btn_text: ['Login', 'Developer application']
  },
  main_menu: {
    sideBar: {
      logo_icon: require('../assets/img/logo_icon.png'),
      logo: require('../assets/img/logo_en.png')
    }
  }
}
