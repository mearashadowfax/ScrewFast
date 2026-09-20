import faqs from '@data/zh-cn/faqs.json';
import features from '@data/zh-cn/features.json';
import pricing from '@data/zh-cn/pricing.json';
import type { Copy } from './index';

/** Simplified Chinese copy table. Must satisfy `Copy` (the shape of `./en.ts`). */
export const zhCn: Copy = {
  site: {
    description:
      'ScrewFast 为您的每一项项目需求提供顶级硬件工具和专业建筑服务。欢迎了解我们的产品与服务，并联系销售团队，获得卓越的品质与可靠性。',
    descriptionShort:
      'ScrewFast 为您的每一项项目需求提供顶级硬件工具和专业建筑服务。',
    ogTitle: 'ScrewFast：硬件工具与建筑服务',
    ogDescription:
      '用 ScrewFast 的优质硬件工具和专业建筑服务装备您的项目。ScrewFast 深受行业领导者信赖，集简洁、实惠与可靠于一身。以用户为中心的设计和尖端工具，带您体验与众不同。立即开始探索！',
  },

  layout: {
    skipToContent: '跳转到内容',
    changeLanguage: '切换语言',
    toggleNavigation: '切换导航',
    darkTheme: '切换到深色主题',
    lightTheme: '切换到浅色主题',
    toggleTheme: '切换主题',
  },

  nav: {
    labels: {
      home: '首页',
      products: '产品',
      services: '服务',
      blog: '博客',
      contact: '联系我们',
    },
    footer: {
      sectionTitles: {
        ecosystem: '生态系统',
        company: '公司',
      },
      links: {
        documentation: '文档',
        tools: '工具与设备',
        services: '建筑服务',
        about: '关于我们',
        blog: '博客',
        careers: '招贤纳士',
        customers: '客户',
      },
      hiringBadge: '正在招聘！',
      stayUpToDate: '获取最新动态',
      stayUpToDateContent: '第一时间了解最新工具和专属优惠。',
      craftedBy: '制作者',
      newsletterDemoMessage: '谢谢！（演示：请接入邮件服务以收集真实订阅者。）',
    },
    megaMenu: {
      services: {
        guides: {
          title: '浏览指南与说明',
          description: '深入了解 ScrewFast 各项功能的实用指南与说明',
        },
        integrations: {
          title: '探索集成',
          description: '提升您的工作流。与您喜爱的所有工具无缝集成',
        },
        experts: {
          title: '专家服务',
          description: '借助 ScrewFast 的专家服务，超越工具本身',
        },
        tools: {
          title: '尖端工具',
          description:
            '更智能、更快速地建造。用 ScrewFast 的尖端建筑工具体验前所未有的效率',
        },
        plans: {
          title: '简单的套餐',
          description: '借助 ScrewFast 清晰实惠的套餐提升效率',
        },
        community: {
          title: '社区论坛',
          description: '与其他 ScrewFast 用户一起学习、分享和交流',
        },
      },
      successStories: '成功案例',
      successStory: {
        description: '了解 ScrewFast 如何帮助各种规模的企业取得卓越成果。',
        imageAlt: '一位微笑人物的肖像',
      },
      learnMore: '了解更多',
    },
  },

  forms: {
    email: '电子邮箱',
    emailAddress: '电子邮箱地址',
    emailPlaceholder: '请输入您的邮箱',
    emailInvalid: '请提供有效的电子邮箱地址，以便我们回复您',
    subscribe: '订阅',
    phone: '电话号码',
    password: '密码',
    confirmPassword: '确认密码',
    forgotPassword: '忘记密码？',
    passwordHint: '至少 8 个字符',
    passwordMismatch: '两次输入的密码不一致',
    rememberMe: '记住我',
    acceptTerms: '我接受',
    termsAndConditions: '条款与条件',
    or: '或',
    demoFallbackMessage: '仅为演示：此表单未连接任何后端。',
  },

  auth: {
    logIn: '登录',
    signIn: '登录',
    signUp: '注册',
    signInWithGoogle: '使用 Google 登录',
    signUpWithGoogle: '使用 Google 注册',
    noAccountYet: '还没有账户？',
    signUpHere: '在此注册',
    alreadyHaveAccount: '已有账户？',
    signInHere: '在此登录',
    forgotPasswordTitle: '忘记密码？',
    rememberYourPassword: '想起密码了？',
    resetPassword: '重置密码',
    credentialsDemoNotice:
      '仅为演示：在收集登录凭据之前，请接入真实的身份验证服务。',
    recoveryDemoNotice: '仅为演示：密码找回未连接任何后端。',
    signInDemoMessage: '仅为演示：登录未连接任何后端。',
    registerDemoMessage: '仅为演示：注册未连接任何后端。',
    recoverDemoMessage: '仅为演示：密码找回未连接任何后端。',
  },

  share: {
    share: '分享',
    shareOn: (platform: string) => `分享到 ${platform}`,
    copied: '已复制',
    copyLink: '复制链接',
  },

  banner: {
    dismiss: '关闭',
    region: '信息横幅',
  },

  blog: {
    readMore: '阅读更多',
    minRead: (minutes: number) => `阅读时间 ${minutes} 分钟`,
    relatedArticles: '相关文章',
    wasHelpful: '这篇文章对您有帮助吗？',
    yes: '有',
    no: '没有',
    ogSection: '博客',
  },

  insights: {
    readMore: '阅读更多',
    tableOfContents: '目录：',
    ogSection: '见解',
  },

  products: {
    ogSection: '硬件工具',
    tabs: '标签页',
  },

  notFound: {
    title: '页面未找到',
    subTitle: '哎呀，这不是您要找的工具！',
    content: '别让这点小插曲耽误您。让我们回去继续打造您的杰作吧。',
    goHome: '返回首页',
    goBack: '返回上一页',
  },

  home: {
    banner: '在 GitHub 上探索 ScrewFast',
    hero: {
      title:
        '用 <span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span> 装备您的项目',
      subTitle: '为每一项项目需求提供优质硬件工具和专业建筑服务。',
      primaryBtn: '开始探索',
      secondaryBtn: '联系销售',
      rating: '<span class="font-bold">4.8</span> / 5',
      reviews: '来自超过 <span class="font-bold">12,800</span> 条评价',
      imageAlt: '装有各类硬件工具的 ScrewFast 产品包装盒',
    },
    clients: {
      title: '深受行业领导者信赖',
      subTitle: '体验行业巨头所选择的可靠性。',
    },
    featuresGeneral: {
      title: '满足行业需求',
      subTitle:
        '在 ScrewFast，我们直面硬件和建筑行业的独特挑战。从尖端工具到专家服务，我们致力于帮助您克服障碍、达成目标。',
      imageAlt: '悬浮包装盒中的 ScrewFast 产品',
    },
    featuresNavs: {
      title:
        '定制 <span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span> 的产品与服务，完美契合您的硬件和建筑需求。',
      tabs: {
        tools: {
          heading: '尖端工具',
          content:
            '用 ScrewFast 的尖端工具为您的项目赋能。借助我们精密的自动化解决方案，体验更高效的建筑管理。',
          alt: '棕色草地上的黄黑色重型机械',
        },
        dashboard: {
          heading: '直观仪表板',
          content:
            '借助 ScrewFast 的直观仪表板轻松上手。通过专为快速高效工作流管理而设计的友好界面，无缝设置和监督您的项目。',
          alt: '直观仪表板的截图或图示',
        },
        features: {
          heading: '强大功能',
          content:
            '化繁为简，效率倍增。ScrewFast 的强大功能旨在简化您的建筑流程，交付以卓越著称的成果。',
          alt: '白天塔吊旁的灰色金属建筑框架',
        },
      },
    },
    testimonials: {
      title: '加速您的项目',
      subTitle:
        '在 ScrewFast，即时开通账户让您快速起步。体验被重新定义的建造速度。',
      quotes: [
        {
          content:
            'ScrewFast 显著提升了我们的项目效率。设置即时完成，响应速度也快得惊人。在硬件和建筑支持领域，这是真正的颠覆者！',
          author: 'Samantha Ruiz',
          role: '首席运营官 | ConstructIt Inc.',
        },
      ],
      statistics: [
        {
          count: '70k+',
          description: '位客户已装备就绪——从 DIY 爱好者到大型建筑公司',
        },
        {
          count: '35%',
          description: '的项目效率提升，得益于 ScrewFast 的工具和服务',
        },
        {
          count: '15.3%',
          description: '的维护成本降低，来自长期客户的反馈',
        },
        {
          count: '2x',
          description: '的组装速度，源于创新的紧固解决方案',
        },
      ],
    },
    faqTitle: '常见<br />问题',
    heroAlt: {
      title: '让我们一起建造',
      subTitle:
        'ScrewFast 是一个开源模板，基于 Astro、Tailwind CSS 和 Preline UI 精心打造。',
      btn: '在 GitHub 上继续',
    },
  },

  services: {
    title: '服务',
    metaDescription:
      'ScrewFast 将专业知识与您的愿景相结合，在硬件和建筑行业提供卓越的服务和全面的解决方案，从咨询直至项目完成。',
    ogTitle: '专家咨询服务 | ScrewFast',
    intro: {
      title: '将专业知识与您的愿景相结合',
      subTitle:
        '在 ScrewFast，我们以在硬件和建筑行业提供全面的解决方案和卓越的服务为荣。我们经验丰富的团队通过一系列专业服务，全程支持您的项目从构思走向完成。',
      cta: '预约咨询',
    },
    articles: {
      guidance: {
        title: '提供专业指导',
        subTitle:
          '启动一个建筑项目可能令人无从下手。通过我们的专业咨询服务，我们将引导您走过每个阶段，确保您做出明智的决策。无论您是 DIY 爱好者还是经验丰富的承包商，我们的专家都随时为您提供关于产品选择、项目范围和当地法规合规的定制建议。',
        imageAlts: ['图纸和显示建筑规划的数字平板。', '在办公室工作的人'],
      },
      craftsmanship: {
        title: '将设计变为现实',
        subTitle:
          '我们技艺精湛的工匠为每个建筑项目带来精准与卓越。从小型安装到大型结构工程，ScrewFast 提供可靠的建筑服务，将您的规划转化为实实在在的成果。我们选用充足库存中的优质工具和材料，确保最高的安全与工艺标准。',
        imageAlts: ['建筑工地施工前后对比'],
        cta: '了解更多',
      },
      oversight: {
        title: '以专业监督推进项目',
        subTitle:
          '高效的项目管理是每一个成功建筑的核心。ScrewFast 提供周密的规划和有力的管理服务，让您的项目按时、按预算推进。工作流协调、资源分配和利益相关方沟通等复杂事务交给我们，您只需专注于自己的愿景。',
        imageAlts: ['正在统筹项目的建筑工人', '受管理施工现场的鸟瞰图'],
      },
      maintenance: {
        title: '确保持久性能',
        subTitle:
          '我们对您项目的承诺不会在竣工时结束。ScrewFast 提供持续的维护和支持服务，确保您的建筑经久耐用、性能稳定。从定期检查到紧急援助，我们反应迅速的团队随时提供无缝支持。',
        imageAlts: ['身穿橙黑色马甲、头戴白色安全帽、手持黄黑色电动工具的男子'],
      },
      bespoke: {
        title: '为独特挑战量身定制策略',
        subTitle:
          '面向大型企业客户，ScrewFast 提供旨在应对特定行业挑战的定制解决方案。通过了解您的独特需求，我们设计量身定制的策略，以优化运营、提升效率并推动业务发展。',
        imageAlts: ['在建的建筑结构', '在建的棕灰色建筑'],
        cta: '阅读更多',
      },
    },
    stats: {
      title: '数据说话',
      subTitle:
        '我们对品质和可靠性的承诺体现在我们承接的每一个项目中。在 ScrewFast，我们致力于提供行业领先的服务，确保您的建筑项目经久耐用。',
      mainStatTitle: '96%',
      mainStatSubTitle: '的客户认为与 ScrewFast 的合作体验卓越',
      stats: [
        { stat: '99.8%', description: '项目完成率' },
        { stat: '5,000+', description: '次成功安装' },
        { stat: '85%', description: '客户同比增长' },
      ],
    },
  },

  contact: {
    title: '联系我们',
    metaDescription:
      '有疑问或想探讨项目？请联系我们，让我们用工具和服务一起打造完美的解决方案。',
    ogTitle: '联系我们 | ScrewFast',
    heading: '联系我们',
    subTitle:
      '有疑问或想探讨项目？请联系我们，让我们用工具和服务一起打造完美的解决方案。',
    formTitle: '请填写下方表单',
    formSubTitle: '我们将在 1–2 个工作日内回复您。',
    firstName: '名',
    lastName: '姓',
    details: '详细信息',
    send: '发送消息',
    demoMessage: '谢谢！（演示：请接入接口以接收真实消息。）',
    knowledgeHeading: '知识库',
    knowledgeContent: '浏览我们知识库中的全部文章。',
    knowledgeLink: '查看指南与教程',
    faqHeading: '常见问题',
    faqContent: '浏览常见问题，快速获得常见疑问的清晰解答。',
    faqLink: '查看常见问题',
    officeHeading: '到访我们的办公室',
    officeContent: 'ScrewFast UK',
    emailHeading: '通过电子邮件联系我们',
    emailContent: '更喜欢文字沟通？请发送邮件至',
  },

  blogIndex: {
    title: '博客',
    metaDescription:
      '通过 ScrewFast 专家团队的见解，了解建筑行业的最新趋势与动态。',
    ogTitle: '建筑行业博客 | ScrewFast',
    heading: '通往卓越建筑之门',
    subTitle:
      '浏览 ScrewFast 的最新资讯、技巧和见解，为您的建筑项目加分。从产品聚焦到项目管理策略，我们的博客是您了解硬件与建筑一切信息的首选资源。',
    insightsHeading: '见解',
    insightsSubTitle:
      '通过 ScrewFast 专家团队的见解，了解建筑行业的最新趋势与动态。',
    noPosts: '暂无文章，敬请期待。',
    noInsights: '暂无见解，敬请期待。',
  },

  productsIndex: {
    title: '产品',
    metaDescription:
      '探索 ScrewFast 工具的耐用与精准，专为专业人士和爱好者打造。',
    ogTitle: '硬件工具 | ScrewFast',
    heading: '产品',
    subTitle:
      '探索 ScrewFast 工具的耐用与精准，专为专业人士和爱好者打造。我们的每一件产品都精工细作、经久耐用，确保您在每项工作中都有称手的工具。',
    customerStories: '客户故事',
    testimonials: {
      title: '客户评价',
      quotes: [
        {
          content:
            '自从改用 ScrewFast 的硬件工具，我们工地的效率突飞猛进。六角螺栓的耐用性和机螺钉的精度无与伦比。能与一家真正理解行业日常需求的公司合作，令人耳目一新。',
          author: 'Jason Clark',
          role: '工地主管 | TopBuild',
          avatarAlt: '图片描述',
        },
        {
          content:
            '作为室内设计师，我一直在寻找能帮我实现构想的优质材料和工具。ScrewFast 的混装螺钉套装彻底改变了我的项目，品质与多样性兼备。出色的客户支持更是锦上添花！',
          author: 'Maria Gonzalez',
          role: '室内设计师 | Creative Spaces',
          avatarAlt: '图片描述',
        },
        {
          content:
            '我做了 15 年多的专业木匠，可以真诚地说，ScrewFast 的螺栓和螺母是我用过最好的之一。它们的咬合力无可比拟，每一个接合点和固定件都让我完全放心。而且服务无可挑剔——他们真心关注我项目的成功。',
          author: 'Richard Kim',
          role: '木工大师 | WoodWright',
          avatarAlt: '图片描述',
        },
      ],
    },
    stats: {
      title: '为什么选择 ScrewFast？',
      subTitle:
        '用 ScrewFast 的工具把想法变成实实在在的成果。无论您是从餐巾纸上的草图起步，还是投入一个完整的建筑项目，我们的工具都能助您自信建造。',
      benefits: [
        '坚固可靠的工具，性能持久。',
        '贴合现代建筑需求的创新解决方案。',
        '全心助力您项目成功的客户支持。',
      ],
    },
  },

  data: { faqs, features, pricing },
};
