import faqs from '@data/ja/faqs.json';
import features from '@data/ja/features.json';
import pricing from '@data/ja/pricing.json';
import type { Copy } from './index';

/** Japanese copy table. Must satisfy `Copy` (the shape of `./en.ts`). */
export const ja: Copy = {
  site: {
    description:
      'ScrewFastは、あらゆるプロジェクトのニーズに応える最高品質のハードウェアツールと専門的な建設サービスを提供します。製品・サービスをご覧のうえ、卓越した品質と信頼性については営業チームまでお問い合わせください。',
    descriptionShort:
      'ScrewFastは、あらゆるプロジェクトのニーズに応える最高品質のハードウェアツールと専門的な建設サービスを提供します。',
    ogTitle: 'ScrewFast：ハードウェアツールと建設サービス',
    ogDescription:
      'ScrewFastの高品質なハードウェアツールと専門的な建設サービスでプロジェクトを装備しましょう。業界リーダーに信頼されるScrewFastは、シンプルさ、手頃な価格、信頼性を兼ね備えています。ユーザー中心の設計と最先端のツールで、その違いを体験してください。今すぐ探索を始めましょう！',
  },

  layout: {
    skipToContent: 'コンテンツへスキップ',
    changeLanguage: '言語を変更',
    toggleNavigation: 'ナビゲーションを切り替え',
    darkTheme: 'ダークテーマに切り替え',
    lightTheme: 'ライトテーマに切り替え',
    toggleTheme: 'テーマを切り替え',
  },

  nav: {
    labels: {
      home: 'ホーム',
      products: '製品',
      services: 'サービス',
      blog: 'ブログ',
      contact: 'お問い合わせ',
    },
    footer: {
      sectionTitles: {
        ecosystem: 'エコシステム',
        company: '会社情報',
      },
      links: {
        documentation: 'ドキュメント',
        tools: 'ツールと機器',
        services: '建設サービス',
        about: '会社概要',
        blog: 'ブログ',
        careers: '採用情報',
        customers: 'お客様',
      },
      hiringBadge: '採用中！',
      stayUpToDate: '最新情報を受け取る',
      stayUpToDateContent: '最新のツールや限定オファーの情報をお届けします。',
      craftedBy: '制作',
      newsletterDemoMessage:
        'ありがとうございます！（デモです。実際の購読者を集めるにはメールサービスを接続してください。）',
    },
    megaMenu: {
      services: {
        guides: {
          title: 'ガイドと解説を見る',
          description:
            'ScrewFastのすべての機能に関する便利なガイドと解説をご覧ください',
        },
        integrations: {
          title: '連携機能を見る',
          description:
            'ワークフローを強化。お気に入りのツールとシームレスに連携します',
        },
        experts: {
          title: '専門サービス',
          description:
            'ScrewFastの専門サービスで、ツールの枠を超えたサポートを',
        },
        tools: {
          title: '最先端ツール',
          description:
            'よりスマートに、より速く。ScrewFastの最先端建設ツールで、かつてない効率を体験してください',
        },
        plans: {
          title: 'シンプルな料金プラン',
          description:
            'ScrewFastの明快でコスト効率の高いプランで効率を高めましょう',
        },
        community: {
          title: 'コミュニティフォーラム',
          description:
            'ScrewFastの他のユーザーと学び、共有し、語り合いましょう',
        },
      },
      successStories: '導入事例',
      successStory: {
        description:
          'ScrewFastがあらゆる規模の企業の優れた成果をどのように支えてきたかをご覧ください。',
        imageAlt: '笑顔の人物のポートレート',
      },
      learnMore: '詳しく見る',
    },
  },

  forms: {
    email: 'メールアドレス',
    emailAddress: 'メールアドレス',
    emailPlaceholder: 'メールアドレスを入力',
    emailInvalid: 'ご返信のため、有効なメールアドレスを入力してください',
    subscribe: '購読する',
    phone: '電話番号',
    password: 'パスワード',
    confirmPassword: 'パスワード（確認）',
    forgotPassword: 'パスワードをお忘れですか？',
    passwordHint: '8文字以上',
    passwordMismatch: 'パスワードが一致しません',
    rememberMe: 'ログイン状態を保持',
    acceptTerms: '同意する：',
    termsAndConditions: '利用規約',
    or: 'または',
    demoFallbackMessage:
      'デモのみ。このフォームはバックエンドに接続されていません。',
  },

  auth: {
    logIn: 'ログイン',
    signIn: 'ログイン',
    signUp: '新規登録',
    signInWithGoogle: 'Googleでログイン',
    signUpWithGoogle: 'Googleで登録',
    noAccountYet: 'アカウントをお持ちでないですか？',
    signUpHere: 'こちらから登録',
    alreadyHaveAccount: 'すでにアカウントをお持ちですか？',
    signInHere: 'こちらからログイン',
    forgotPasswordTitle: 'パスワードをお忘れですか？',
    rememberYourPassword: 'パスワードを思い出しましたか？',
    resetPassword: 'パスワードをリセット',
    credentialsDemoNotice:
      'デモのみ。認証情報を収集する前に、実際の認証プロバイダーを接続してください。',
    recoveryDemoNotice:
      'デモのみ。パスワードの再設定はバックエンドに接続されていません。',
    signInDemoMessage: 'デモのみ。ログインはバックエンドに接続されていません。',
    registerDemoMessage: 'デモのみ。登録はバックエンドに接続されていません。',
    recoverDemoMessage:
      'デモのみ。パスワードの再設定はバックエンドに接続されていません。',
  },

  share: {
    share: '共有',
    shareOn: (platform: string) => `${platform}で共有`,
    copied: 'コピーしました',
    copyLink: 'リンクをコピー',
  },

  banner: {
    dismiss: '閉じる',
    region: 'お知らせバナー',
  },

  blog: {
    readMore: '続きを読む',
    minRead: (minutes: number) => `${minutes}分で読めます`,
    relatedArticles: '関連記事',
    wasHelpful: 'この記事は役に立ちましたか？',
    yes: 'はい',
    no: 'いいえ',
    ogSection: 'ブログ',
  },

  insights: {
    readMore: '続きを読む',
    tableOfContents: '目次：',
    ogSection: 'インサイト',
  },

  products: {
    ogSection: 'ハードウェアツール',
    tabs: 'タブ',
  },

  notFound: {
    title: 'ページが見つかりません',
    subTitle: 'おっと、お探しのツールはこれではないようです！',
    content:
      'この小さなつまずきで手を止めないでください。傑作づくりに戻りましょう。',
    goHome: 'ホームへ戻る',
    goBack: '前のページへ戻る',
  },

  home: {
    banner: 'GitHubでScrewFastを見る',
    hero: {
      title:
        '<span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span>でプロジェクトを装備しよう',
      subTitle:
        'あらゆるプロジェクトのニーズに応える高品質なハードウェアツールと専門的な建設サービス。',
      primaryBtn: '製品を見る',
      secondaryBtn: '営業に問い合わせる',
      rating: '<span class="font-bold">4.8</span> / 5',
      reviews: '<span class="font-bold">12,800</span>件以上のレビューより',
      imageAlt: 'さまざまなハードウェアツールが入ったScrewFast製品ボックスの山',
    },
    clients: {
      title: '業界リーダーに選ばれています',
      subTitle: '業界大手が選ぶ信頼性を体験してください。',
    },
    featuresGeneral: {
      title: '業界の要求に応える',
      subTitle:
        'ScrewFastは、ハードウェアと建設の分野に特有の課題に取り組んでいます。最先端のツールから専門サービスまで、障壁を乗り越え目標を達成できるよう全力でサポートします。',
      imageAlt: '浮かぶボックスに入ったScrewFast製品',
    },
    featuresNavs: {
      title:
        '<span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span>のサービスを、ハードウェアと建設のニーズにぴったり合わせてカスタマイズ。',
      tabs: {
        tools: {
          heading: '最先端ツール',
          content:
            'ScrewFastの最先端ツールでプロジェクトを強化。高度な自動化ソリューションで、建設管理の効率向上を実感してください。',
          alt: '茶色い草地に置かれた黄色と黒の重機',
        },
        dashboard: {
          heading: '直感的なダッシュボード',
          content:
            'ScrewFastの直感的なダッシュボードで迷わず操作。迅速で効果的なワークフロー管理のために設計された使いやすいインターフェースで、プロジェクトの設定と監督をシームレスに行えます。',
          alt: '直感的なダッシュボードのスクリーンショットまたはイメージ',
        },
        features: {
          heading: '堅牢な機能',
          content:
            '複雑さを最小限に、生産性を最大限に。ScrewFastの堅牢な機能は建設プロセスを合理化し、卓越した成果をもたらすよう設計されています。',
          alt: '日中のタワークレーンのそばに立つ灰色の鉄骨構造',
        },
      },
    },
    testimonials: {
      title: 'プロジェクトを加速',
      subTitle:
        'ScrewFastなら、アカウントの即時セットアップですぐに始められます。再定義された建設のスピードを体験してください。',
      quotes: [
        {
          content:
            'ScrewFastのおかげでプロジェクトの効率が劇的に向上しました。セットアップは即時で、対応の速さも驚異的です。ハードウェアと建設のサポートにおいて、まさにゲームチェンジャーです！',
          author: 'Samantha Ruiz',
          role: '最高執行責任者 | ConstructIt Inc.',
        },
      ],
      statistics: [
        {
          count: '70k+',
          description: 'の導入顧客 — DIY愛好家から大手建設会社まで',
        },
        {
          count: '35%',
          description:
            'のプロジェクト効率向上（ScrewFastのツールとサービス利用時）',
        },
        {
          count: '15.3%',
          description: 'のメンテナンスコスト削減（長期顧客の報告による）',
        },
        {
          count: '2x',
          description: 'の組み立てスピード（革新的な締結ソリューションにより）',
        },
      ],
    },
    faqTitle: 'よくある<br />ご質問',
    heroAlt: {
      title: '一緒に作りましょう',
      subTitle:
        'ScrewFastは、Astro、Tailwind CSS、Preline UIで丁寧に作られたオープンソースのテンプレートです。',
      btn: 'GitHubで続ける',
    },
  },

  services: {
    title: 'サービス',
    metaDescription:
      '専門知識とお客様のビジョンを結びつけ、ScrewFastはハードウェアと建設の業界において、コンサルティングからプロジェクト完了まで、卓越したサービスと包括的なソリューションを提供します。',
    ogTitle: '専門コンサルティングサービス | ScrewFast',
    intro: {
      title: '専門知識とお客様のビジョンを結びつける',
      subTitle:
        'ScrewFastは、ハードウェアと建設の業界で包括的なソリューションと卓越したサービスを提供することを誇りとしています。経験豊富なチームが、幅広い専門サービスで構想から完成までお客様のプロジェクトを支援します。',
      cta: '相談を予約する',
    },
    articles: {
      guidance: {
        title: '専門的なガイダンスの提供',
        subTitle:
          '建設プロジェクトの立ち上げは大きな負担になりがちです。プロのコンサルティングサービスで各段階をご案内し、十分な情報に基づいた判断ができるようサポートします。DIY愛好家でも熟練の請負業者でも、製品の選定、プロジェクトの範囲、地域規制の遵守について、専門家が個別のアドバイスを提供します。',
        imageAlts: [
          '設計図と建設計画が表示されたタブレット。',
          'オフィスで働く人',
        ],
      },
      craftsmanship: {
        title: '設計を現実に',
        subTitle:
          '熟練の職人が、すべての建設プロジェクトに精密さと卓越性をもたらします。小規模な設置から大規模な構造工事まで、ScrewFastは計画を確かな成果に変える信頼性の高い建設サービスを提供します。豊富な在庫から高品質のツールと資材を使い、安全性と職人技における最高水準を保証します。',
        imageAlts: ['建設現場のビフォーアフター'],
        cta: '詳しく見る',
      },
      oversight: {
        title: 'プロの監督でプロジェクトを推進',
        subTitle:
          '効果的なプロジェクト管理は、あらゆる建設の成功の核心です。ScrewFastは綿密な計画と堅実な管理サービスで、プロジェクトを納期と予算の範囲内に収めます。ワークフローの調整、リソース配分、関係者とのコミュニケーションといった複雑な業務は私たちにお任せいただき、お客様はビジョンに集中してください。',
        imageAlts: [
          'プロジェクトを指揮する建設作業員',
          '管理された建設現場の空撮',
        ],
      },
      maintenance: {
        title: '長期的なパフォーマンスの確保',
        subTitle:
          'プロジェクトへの私たちのコミットメントは、完成後も続きます。ScrewFastは建物の寿命と性能を確保するため、継続的なメンテナンスとサポートサービスを提供します。定期点検から緊急対応まで、迅速に対応するチームが切れ目のないサポートをお届けします。',
        imageAlts: [
          'オレンジと黒のベストに白いヘルメットを着け、黄色と黒の電動工具を持つ男性',
        ],
      },
      bespoke: {
        title: '固有の課題に向けたオーダーメイド戦略',
        subTitle:
          '大規模な法人のお客様向けに、ScrewFastは業界特有の課題に対応するカスタムソリューションを提供します。お客様固有のニーズを理解し、業務の最適化、効率の向上、事業の推進を目的としたオーダーメイドの戦略を設計します。',
        imageAlts: ['建設中の建物の構造', '建設中の茶色と灰色の建物'],
        cta: '続きを読む',
      },
    },
    stats: {
      title: '数字で見る',
      subTitle:
        '品質と信頼性へのこだわりは、私たちが手がけるすべてのプロジェクトに表れています。ScrewFastは、お客様の建設プロジェクトが長く持ちこたえるよう、業界をリードするサービスの提供に全力を尽くします。',
      mainStatTitle: '96%',
      mainStatSubTitle: 'のお客様が、ScrewFastでの体験を「卓越している」と評価',
      stats: [
        { stat: '99.8%', description: 'プロジェクト完了率' },
        { stat: '5,000+', description: '件の設置実績' },
        { stat: '85%', description: '顧客数の前年比成長率' },
      ],
    },
  },

  contact: {
    title: 'お問い合わせ',
    metaDescription:
      'ご質問やプロジェクトのご相談がありますか？お気軽にご連絡ください。私たちのツールとサービスで、最適なソリューションを一緒に作りましょう。',
    ogTitle: 'お問い合わせ | ScrewFast',
    heading: 'お問い合わせ',
    subTitle:
      'ご質問やプロジェクトのご相談がありますか？お気軽にご連絡ください。私たちのツールとサービスで、最適なソリューションを一緒に作りましょう。',
    formTitle: '以下のフォームにご記入ください',
    formSubTitle: '1〜2営業日以内にご返信いたします。',
    firstName: '名',
    lastName: '姓',
    details: 'ご相談内容',
    send: 'メッセージを送信',
    demoMessage:
      'ありがとうございます！（デモです。実際のメッセージを受け取るにはエンドポイントを接続してください。）',
    knowledgeHeading: 'ナレッジベース',
    knowledgeContent: 'ナレッジベースの記事をすべてご覧いただけます。',
    knowledgeLink: 'ガイドとチュートリアルを見る',
    faqHeading: 'よくあるご質問',
    faqContent:
      'よくあるご質問で、一般的な疑問への簡潔で明快な回答をご確認ください。',
    faqLink: 'よくあるご質問を見る',
    officeHeading: 'オフィスにお越しください',
    officeContent: 'ScrewFast UK',
    emailHeading: 'メールでのお問い合わせ',
    emailContent: '文章でのやり取りをご希望ですか？メールはこちらへ：',
  },

  blogIndex: {
    title: 'ブログ',
    metaDescription:
      'ScrewFastの専門家チームによるインサイトで、建設業界の最新トレンドと動向をキャッチアップしましょう。',
    ogTitle: '建設業界ブログ | ScrewFast',
    heading: '建設の卓越性への入り口',
    subTitle:
      '建設プロジェクトをレベルアップさせる、ScrewFastの最新ニュース、ヒント、インサイトをご覧ください。製品紹介からプロジェクト管理の戦略まで、私たちのブログはツールと建設に関するあらゆる情報の頼れる情報源です。',
    insightsHeading: 'インサイト',
    insightsSubTitle:
      'ScrewFastの専門家チームによるインサイトで、建設業界の最新トレンドと動向をキャッチアップしましょう。',
    noPosts: 'まだ記事はありません。またお立ち寄りください。',
    noInsights: 'まだインサイトはありません。またお立ち寄りください。',
  },

  productsIndex: {
    title: '製品',
    metaDescription:
      'プロにも愛好家にも応える、ScrewFastツールの耐久性と精度をご覧ください。',
    ogTitle: 'ハードウェアツール | ScrewFast',
    heading: '製品',
    subTitle:
      'プロにも愛好家にも応える、ScrewFastツールの耐久性と精度をご覧ください。すべての製品は精密に作られ、長く使えるよう設計されているため、どんな作業にも最適なツールが揃います。',
    customerStories: 'お客様の声',
    testimonials: {
      title: 'お客様の声',
      quotes: [
        {
          content:
            'ScrewFastのハードウェアツールに切り替えてから、建設現場の効率が飛躍的に向上しました。六角ボルトの耐久性と小ねじの精度は他に類を見ません。業界の日々の要求を本当に理解している会社と仕事ができるのは心強いです。',
          author: 'Jason Clark',
          role: '現場監督 | TopBuild',
          avatarAlt: '画像の説明',
        },
        {
          content:
            'インテリアデザイナーとして、ビジョンを形にしてくれる高品質な素材とツールを常に探しています。ScrewFastのミックスねじセットは、品質と多様性を完璧に兼ね備え、私のプロジェクトを一変させました。素晴らしいカスタマーサポートは、まさに嬉しいおまけでした！',
          author: 'Maria Gonzalez',
          role: 'インテリアデザイナー | Creative Spaces',
          avatarAlt: '画像の説明',
        },
        {
          content:
            '15年以上プロの大工をしていますが、ScrewFastのタップボルトとナットは今まで使った中でも最高クラスだと心から言えます。他にない締め付け力で、すべての接合部と取り付けに全幅の信頼を置いています。さらにサービスも申し分なく、私のプロジェクトの成功を本当に気にかけてくれます。',
          author: 'Richard Kim',
          role: '棟梁 | WoodWright',
          avatarAlt: '画像の説明',
        },
      ],
    },
    stats: {
      title: 'ScrewFastが選ばれる理由',
      subTitle:
        'ScrewFastのツールで、アイデアを確かな成果に。ナプキンの裏のスケッチから始める場合でも、本格的な建設プロジェクトに取り組む場合でも、私たちのツールは自信を持って作れるよう設計されています。',
      benefits: [
        '長く安定した性能を発揮する、堅牢で信頼性の高いツール。',
        '現代の建設ニーズに合わせた革新的なソリューション。',
        'プロジェクトの成功に寄り添う専任のカスタマーサポート。',
      ],
    },
  },

  data: { faqs, features, pricing },
};
