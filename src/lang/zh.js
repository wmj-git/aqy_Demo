module.exports = {
  index_page: {
    index_nav: {
      nav_list: [{
        title: '开发文档',
        url: '',
        login: '/login'
      },
      {
        title: '发布管理',
        url: '/use/application',
        login: '/login'
      },
      {
        title: '我的账号',
        url: '/account',
        login: '/login'
      }],
      logo: require('../assets/img/logo@2x.png')
    },
    navBar: {
      account: require('../assets/img/account.png')
    },
    banner: {
      title: '奇遇开发者平台',
      sub_title: '专注优质VR/AR应用游戏的开发和运营',
      btn_text: '申请成为开发者',
      register_dialog: {
        title: '申请加入开发者',
        email: 'developer_smart@qiyi.com',
        content_left: '奇遇开发者注册采取邀请制，请先填写资料发送至',
        content_right: '，商务人员将会在1~5个工作日与您联系并分配账号信息。',
        link: '下载资料模板>',
        url: '',
        toLogin: '已有账号？',
        toLogin_url: '/login'
      }
    },
    product: {
      title: '奇遇VR产品',
      sub_title: '选择您喜欢的设备进行开发',
      introduce: '无论您是开发虚拟现实游戏、社交体验、娱乐或教育类应用，都可以使用主流的游戏引擎或我们的原生SDK，轻松地在奇遇平台上进行开发。',
      content: [
        {
          img: require('../assets/img/product_01@2x.png'),
          name: '奇遇3',
          u_name: '独立6自由度VR',
          btn_text: '使用QIYU SDK',
          icon: 'iconfavicon'
        },
        {
          img: require('../assets/img/product_02@2x.png'),
          name: '奇遇2Pro',
          u_name: '独立6自由度VR',
          btn_text: '使用 VIVE WAVE™ SDK',
          icon: 'iconhtc'
        },
        {
          img: require('../assets/img/product_03@2x.png'),
          name: '奇遇2S',
          u_name: '独立3自由度VR',
          btn_text: '使用 VIVE WAVE™ SDK',
          icon: 'iconhtc'
        }
      ]
    },
    reason: {
      title: '为什么选择奇遇？',
      content_top: [
        {
          img: require('../assets/img/pic_01.svg'),
          name: '6DOF空间定位和多种输入支持',
          u_name: '毫米级6自由度手柄控制器，VR虚拟键盘，手势追踪（规划中)'
        },
        {
          img: require('../assets/img/pic_02.svg'),
          name: '主流游戏开发引擎',
          u_name: 'Unity，Unreal（规划中）'
        }
      ],
      content_center: [
        {
          img: require('../assets/img/pic_03.svg'),
          name: '3D空间音频',
          u_name: '满足360度沉浸式的声音设计，支持多平台音频插件。'
        },
        {
          img: require('../assets/img/pic_04.svg'),
          name: '高级渲染',
          u_name: '注视点渲染、VR合成器图层渲染、单通道渲染（规划中）'
        }
      ],
      content_bottom: [
        {
          img: require('../assets/img/pic_05.svg'),
          name: '节省视频和游戏存储费用',
          u_name: '提供免费的游戏DLC上传和下载、视频托管和播放的平台服务。'
        },
        {
          img: require('../assets/img/pic_06.svg'),
          name: 'VR测试工具',
          u_name: '提供简单易用的VR应用程序测试工具，实时获取性能指标。'
        }
      ]
    },
    footerList: {
      footer_item: [
        {
          title: '奇遇产品',
          footer_nav: [
            {
              title: '奇遇3',
              url: ''
            },
            {
              title: '奇遇2Pro',
              url: ''
            },
            {
              title: '奇遇2S',
              url: ''
            },
            {
              title: '奇遇2',
              url: ''
            },
            {
              title: '奇遇AR Glass',
              url: ''
            },
            {
              title: '奇遇VR助手',
              url: ''
            }
          ]
        },
        {
          title: '内容',
          footer_nav: [
            {
              title: '奇遇派对',
              url: ''
            },
            {
              title: '娱乐场',
              url: ''
            },
            {
              title: '未来影院',
              url: ''
            },
            {
              title: '奇遇会员',
              url: ''
            },
            {
              title: '奇遇OS 5.0',
              url: ''
            }
          ]
        },
        {
          title: '购买渠道',
          footer_nav: [
            {
              title: '京东旗舰店',
              url: ''
            },
            {
              title: '天猫旗舰店',
              url: ''
            }
          ]
        },
        {
          title: '了解奇遇',
          footer_nav: [
            {
              title: '公司简介',
              url: ''
            },
            {
              title: '企业服务',
              url: ''
            },
            {
              title: '新闻动态',
              url: ''
            }
          ]
        },
        {
          title: '更多',
          footer_nav: [
            {
              title: '开发者平台',
              url: ''
            },
            {
              title: '帮助中心',
              url: ''
            }
          ]
        }
      ],
      footer_item_another: [
        {
          title: '联系我们',
          footer_nav: [
            {
              title: '商务合作：',
              email: 'columbus@qiyi.com',
              url: ''
            },
            {
              title: '人才招聘：'
            },
            {
              title: '公司地址：中国北京市海淀区海淀北一街4号爱奇艺创新大厦'
            }
          ],
          footer_link: {
            title: '查看职位>>',
            url: ''
          }
        },
        {
          title: '全国客服热线：400-923-7171转5',
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
      footer_status: {
        title: 'Copyright © 2020爱奇艺智能All Rights Reserved',
        record: '渝ICP备18002599号',
        url: 'https://beian.miit.gov.cn/'
      }
    }
  },
  login_page: {
    placeholder: {
      username: '账号',
      pwd: '密码',
      code: '验证码'
    },
    error_message: {
      username: '*账号不存在/账号或密码错误',
      pwd: '密码不能少于6位数字',
      code: '验证码错误'
    },
    login_info: {
      remember_login: '记住我的登录信息',
      forget: '忘记密码'
    },
    logo: {
      img: require('../assets/img/logo.png')
    },
    login_btn_text: ['登录', '申请成为开发者'],
    register: {
      title: '注册',
      content: '加入奇遇开发者需要先填写相关资料，待商务审核通过后，分配账号信息。',
      btn_text: '联系商务人员'
    }
  },
  main_menu: {
    sideBar: {
      logo_icon: require('../assets/img/logo_icon.png'),
      logo: require('../assets/img/logo.png')
    },
    route: {
      home_page: '首页',
      account: '我的账户',
      application: '应用管理',
      application_list: '管理列表'
    },
    user: {
      name: '当前用户：张三'
    }
  }
}
