import faqs from '@data/de/faqs.json';
import features from '@data/de/features.json';
import pricing from '@data/de/pricing.json';
import type { Copy } from './index';

/** German copy table. Must satisfy `Copy` (the shape of `./en.ts`). */
export const de: Copy = {
  site: {
    description:
      'ScrewFast bietet erstklassige Hardware-Werkzeuge und fachkundige Bauleistungen für jeden Projektbedarf. Entdecken Sie unser Angebot und kontaktieren Sie unser Vertriebsteam für höchste Qualität und Zuverlässigkeit.',
    descriptionShort:
      'ScrewFast bietet erstklassige Hardware-Werkzeuge und fachkundige Bauleistungen für jeden Projektbedarf.',
    ogTitle: 'ScrewFast: Hardware-Werkzeuge und Bauleistungen',
    ogDescription:
      'Rüsten Sie Ihre Projekte mit den hochwertigen Hardware-Werkzeugen und fachkundigen Bauleistungen von ScrewFast aus. Von Branchenführern geschätzt, verbindet ScrewFast Einfachheit, Erschwinglichkeit und Zuverlässigkeit. Erleben Sie den Unterschied mit nutzerzentriertem Design und modernsten Werkzeugen. Jetzt entdecken!',
  },

  layout: {
    skipToContent: 'Zum Inhalt springen',
    changeLanguage: 'Sprache ändern',
    toggleNavigation: 'Navigation umschalten',
    darkTheme: 'Dunkles Design aktivieren',
    lightTheme: 'Helles Design aktivieren',
    toggleTheme: 'Design umschalten',
  },

  nav: {
    labels: {
      home: 'Startseite',
      products: 'Produkte',
      services: 'Dienstleistungen',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    footer: {
      sectionTitles: {
        ecosystem: 'Ökosystem',
        company: 'Unternehmen',
      },
      links: {
        documentation: 'Dokumentation',
        tools: 'Werkzeuge & Ausrüstung',
        services: 'Bauleistungen',
        about: 'Über uns',
        blog: 'Blog',
        careers: 'Karriere',
        customers: 'Kunden',
      },
      hiringBadge: 'Wir stellen ein!',
      stayUpToDate: 'Auf dem Laufenden bleiben',
      stayUpToDateContent:
        'Bleiben Sie über die neuesten Werkzeuge und exklusive Angebote informiert.',
      craftedBy: 'Erstellt von',
      newsletterDemoMessage:
        'Danke! (Demo — binden Sie einen E-Mail-Dienst an, um echte Abonnenten zu sammeln.)',
    },
    megaMenu: {
      services: {
        guides: {
          title: 'Anleitungen und Erklärungen entdecken',
          description:
            'Tauchen Sie ein in hilfreiche Anleitungen und Erklärungen zu allen Funktionen von ScrewFast',
        },
        integrations: {
          title: 'Integrationen entdecken',
          description:
            'Optimieren Sie Ihren Arbeitsablauf. Nahtlose Integrationen mit all Ihren bevorzugten Werkzeugen',
        },
        experts: {
          title: 'Expertendienstleistungen',
          description:
            'Gehen Sie mit den Expertendienstleistungen von ScrewFast über Werkzeuge hinaus',
        },
        tools: {
          title: 'Modernste Werkzeuge',
          description:
            'Bauen Sie intelligenter und schneller. Erleben Sie beispiellose Effizienz mit den modernsten Bauwerkzeugen von ScrewFast',
        },
        plans: {
          title: 'Einfache Tarife',
          description:
            'Steigern Sie Ihre Effizienz mit den klaren, kostengünstigen Tarifen von ScrewFast',
        },
        community: {
          title: 'Community-Forum',
          description:
            'Lernen, teilen und diskutieren Sie mit anderen ScrewFast-Nutzern',
        },
      },
      successStories: 'Erfolgsgeschichten',
      successStory: {
        description:
          'Erfahren Sie, wie ScrewFast Unternehmen jeder Größe zu herausragenden Ergebnissen verholfen hat.',
        imageAlt: 'Porträt einer lächelnden Person',
      },
      learnMore: 'Mehr erfahren',
    },
  },

  forms: {
    email: 'E-Mail',
    emailAddress: 'E-Mail-Adresse',
    emailPlaceholder: 'E-Mail eingeben',
    emailInvalid:
      'Bitte geben Sie eine gültige E-Mail-Adresse an, damit wir Ihnen antworten können',
    subscribe: 'Abonnieren',
    phone: 'Telefonnummer',
    password: 'Passwort',
    confirmPassword: 'Passwort bestätigen',
    forgotPassword: 'Passwort vergessen?',
    passwordHint: 'Mindestens 8 Zeichen',
    passwordMismatch: 'Die Passwörter stimmen nicht überein',
    rememberMe: 'Angemeldet bleiben',
    acceptTerms: 'Ich akzeptiere die ',
    termsAndConditions: 'Allgemeinen Geschäftsbedingungen',
    or: 'Oder',
    demoFallbackMessage:
      'Nur Demo — dieses Formular ist mit keinem Backend verbunden.',
  },

  auth: {
    logIn: 'Anmelden',
    signIn: 'Anmelden',
    signUp: 'Registrieren',
    signInWithGoogle: 'Mit Google anmelden',
    signUpWithGoogle: 'Mit Google registrieren',
    noAccountYet: 'Noch kein Konto?',
    signUpHere: 'Hier registrieren',
    alreadyHaveAccount: 'Sie haben bereits ein Konto?',
    signInHere: 'Hier anmelden',
    forgotPasswordTitle: 'Passwort vergessen?',
    rememberYourPassword: 'Sie erinnern sich an Ihr Passwort?',
    resetPassword: 'Passwort zurücksetzen',
    credentialsDemoNotice:
      'Nur Demo — binden Sie einen echten Authentifizierungsanbieter an, bevor Sie Zugangsdaten sammeln.',
    recoveryDemoNotice:
      'Nur Demo — die Passwortwiederherstellung ist mit keinem Backend verbunden.',
    signInDemoMessage:
      'Nur Demo — die Anmeldung ist mit keinem Backend verbunden.',
    registerDemoMessage:
      'Nur Demo — die Registrierung ist mit keinem Backend verbunden.',
    recoverDemoMessage:
      'Nur Demo — die Passwortwiederherstellung ist mit keinem Backend verbunden.',
  },

  share: {
    share: 'Teilen',
    shareOn: (platform: string) => `Auf ${platform} teilen`,
    copied: 'Kopiert',
    copyLink: 'Link kopieren',
  },

  banner: {
    dismiss: 'Schließen',
    region: 'Hinweisbanner',
  },

  blog: {
    readMore: 'Weiterlesen',
    minRead: (minutes: number) => `${minutes} Min. Lesezeit`,
    relatedArticles: 'Ähnliche Artikel',
    wasHelpful: 'War dieser Beitrag hilfreich?',
    yes: 'Ja',
    no: 'Nein',
    ogSection: 'Blog',
  },

  insights: {
    readMore: 'Mehr lesen',
    tableOfContents: 'Inhaltsverzeichnis:',
    ogSection: 'Einblicke',
  },

  products: {
    ogSection: 'Hardware-Werkzeuge',
    tabs: 'Registerkarten',
  },

  notFound: {
    title: 'Seite nicht gefunden',
    subTitle: 'Hoppla, das ist nicht das Werkzeug, das Sie gesucht haben!',
    content:
      'Lassen Sie sich von diesem kleinen Stolperstein nicht aufhalten. Zurück zum Bau Ihres Meisterwerks.',
    goHome: 'Zur Startseite',
    goBack: 'Zurück',
  },

  home: {
    banner: 'Entdecken Sie ScrewFast auf GitHub',
    hero: {
      title:
        'Rüsten Sie Ihre Projekte mit <span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span> aus',
      subTitle:
        'Hochwertige Hardware-Werkzeuge und fachkundige Bauleistungen für jeden Projektbedarf.',
      primaryBtn: 'Jetzt entdecken',
      secondaryBtn: 'Vertrieb kontaktieren',
      rating: '<span class="font-bold">4,8</span> / 5',
      reviews: 'Aus über <span class="font-bold">12.800</span> Bewertungen',
      imageAlt:
        'Stapel von ScrewFast-Produktboxen mit verschiedenen Hardware-Werkzeugen',
    },
    clients: {
      title: 'Branchenführer vertrauen uns',
      subTitle:
        'Erleben Sie die Zuverlässigkeit, auf die Branchenriesen setzen.',
    },
    featuresGeneral: {
      title: 'Branchenanforderungen erfüllen',
      subTitle:
        'Bei ScrewFast stellen wir uns den besonderen Herausforderungen der Hardware- und Baubranche. Von modernsten Werkzeugen bis hin zu Expertendienstleistungen helfen wir Ihnen, Hindernisse zu überwinden und Ihre Ziele zu erreichen.',
      imageAlt: 'ScrewFast-Produkte in schwebenden Boxen',
    },
    featuresNavs: {
      title:
        'Passen Sie das Angebot von <span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span> perfekt an Ihre Hardware- und Baubedürfnisse an.',
      tabs: {
        tools: {
          heading: 'Modernste Werkzeuge',
          content:
            'Stärken Sie Ihre Projekte mit den modernsten Werkzeugen von ScrewFast. Erleben Sie mehr Effizienz im Baumanagement mit unseren ausgereiften automatisierten Lösungen.',
          alt: 'Gelb-schwarze Baumaschine auf einem braunen Grasfeld',
        },
        dashboard: {
          heading: 'Intuitive Dashboards',
          content:
            'Navigieren Sie mühelos mit den intuitiven Dashboards von ScrewFast. Richten Sie Ihre Projekte nahtlos ein und behalten Sie sie im Blick — mit benutzerfreundlichen Oberflächen für ein schnelles und effektives Workflow-Management.',
          alt: 'Screenshot oder grafische Darstellung des intuitiven Dashboards',
        },
        features: {
          heading: 'Robuste Funktionen',
          content:
            'Komplexität minimieren, Produktivität maximieren. Die robusten Funktionen von ScrewFast optimieren Ihren Bauprozess und liefern Ergebnisse, die durch ihre Qualität überzeugen.',
          alt: 'Graues Stahlgerüst eines Gebäudes neben einem Turmdrehkran bei Tag',
        },
      },
    },
    testimonials: {
      title: 'Beschleunigen Sie Ihre Projekte',
      subTitle:
        'Bei ScrewFast sorgen wir mit sofortiger Kontoeinrichtung für einen schnellen Start. Erleben Sie Bauen in neuer Geschwindigkeit.',
      quotes: [
        {
          content:
            'ScrewFast hat die Effizienz unserer Projekte enorm gesteigert. Die Einrichtung war sofort erledigt, und die schnellen Reaktionszeiten sind phänomenal. Ein echter Durchbruch in der Hardware- und Bauunterstützung!',
          author: 'Samantha Ruiz',
          role: 'Betriebsleiterin | ConstructIt Inc.',
        },
      ],
      statistics: [
        {
          count: '70k+',
          description:
            'ausgerüstete Kunden — von Heimwerkern bis zu großen Bauunternehmen',
        },
        {
          count: '35%',
          description:
            'mehr Projekteffizienz mit den Werkzeugen und Dienstleistungen von ScrewFast',
        },
        {
          count: '15,3%',
          description:
            'geringere Wartungskosten, wie von Langzeitkunden berichtet',
        },
        {
          count: '2x',
          description:
            'schnellere Montage dank innovativer Befestigungslösungen',
        },
      ],
    },
    faqTitle: 'Häufig<br />gestellte Fragen',
    heroAlt: {
      title: 'Lassen Sie uns gemeinsam bauen',
      subTitle:
        'ScrewFast ist eine Open-Source-Vorlage, sorgfältig erstellt mit Astro, Tailwind CSS und Preline UI.',
      btn: 'Weiter mit GitHub',
    },
  },

  services: {
    title: 'Dienstleistungen',
    metaDescription:
      'ScrewFast vereint Fachwissen mit Ihrer Vision und bietet außergewöhnlichen Service und umfassende Lösungen in der Hardware- und Baubranche — von der Beratung bis zur Projektfertigstellung.',
    ogTitle: 'Fachkundige Beratungsleistungen | ScrewFast',
    intro: {
      title: 'Fachwissen trifft Ihre Vision',
      subTitle:
        'Bei ScrewFast sind wir stolz darauf, umfassende Lösungen und außergewöhnlichen Service in der Hardware- und Baubranche zu bieten. Unser erfahrenes Team begleitet Ihr Projekt von der Konzeption bis zur Fertigstellung mit einer Reihe spezialisierter Dienstleistungen.',
      cta: 'Beratung vereinbaren',
    },
    articles: {
      guidance: {
        title: 'Fachkundige Beratung',
        subTitle:
          'Der Start eines Bauprojekts kann überwältigend sein. Mit unseren professionellen Beratungsleistungen begleiten wir Sie durch jede Phase und stellen sicher, dass Sie fundierte Entscheidungen treffen. Ob Heimwerker oder erfahrener Bauunternehmer — unsere Experten beraten Sie individuell zu Produktauswahl, Projektumfang und der Einhaltung lokaler Vorschriften.',
        imageAlts: [
          'Baupläne und ein Tablet mit Konstruktionszeichnungen.',
          'Person bei der Arbeit im Büro',
        ],
      },
      craftsmanship: {
        title: 'Entwürfe Wirklichkeit werden lassen',
        subTitle:
          'Unsere qualifizierten Handwerker bringen Präzision und Exzellenz in jedes Bauprojekt. Von kleineren Installationen bis zu umfangreichen Rohbauarbeiten bietet ScrewFast zuverlässige Bauleistungen, die Ihre Pläne in greifbare Ergebnisse verwandeln. Wir garantieren höchste Standards bei Sicherheit und Handwerkskunst und verwenden hochwertige Werkzeuge und Materialien aus unserem umfangreichen Lager.',
        imageAlts: ['Baustelle vorher und nachher'],
        cta: 'Mehr erfahren',
      },
      oversight: {
        title: 'Projekte mit professioneller Bauleitung steuern',
        subTitle:
          'Effektives Projektmanagement ist das Herzstück jedes erfolgreichen Bauvorhabens. ScrewFast bietet gründliche Planung und verlässliche Managementleistungen, die Ihr Projekt im Zeit- und Kostenrahmen halten. Überlassen Sie uns die Koordination der Arbeitsabläufe, die Ressourcenzuteilung und die Kommunikation mit allen Beteiligten, während Sie sich auf Ihre Vision konzentrieren.',
        imageAlts: [
          'Bauarbeiter koordinieren ein Projekt',
          'Luftaufnahme einer betreuten Baustelle',
        ],
      },
      maintenance: {
        title: 'Dauerhafte Leistung sichern',
        subTitle:
          'Unser Engagement für Ihr Projekt endet nicht mit der Fertigstellung. ScrewFast bietet laufende Wartungs- und Supportleistungen, um die Langlebigkeit und Leistung Ihres Bauwerks zu sichern. Von regelmäßigen Inspektionen bis zur Notfallhilfe steht Ihnen unser reaktionsschnelles Team jederzeit zur Seite.',
        imageAlts: [
          'Mann in orange-schwarzer Weste mit weißem Schutzhelm hält ein gelb-schwarzes Elektrowerkzeug',
        ],
      },
      bespoke: {
        title: 'Maßgeschneiderte Strategien für besondere Herausforderungen',
        subTitle:
          'Für unsere größeren Geschäftskunden bietet ScrewFast individuelle Lösungen für spezifische Herausforderungen der Branche. Wir verstehen Ihre besonderen Anforderungen und entwickeln maßgeschneiderte Strategien, die Ihre Abläufe optimieren, die Effizienz steigern und Ihr Unternehmen voranbringen.',
        imageAlts: ['Gebäudestruktur im Bau', 'Braun-graues Gebäude im Bau'],
        cta: 'Weiterlesen',
      },
    },
    stats: {
      title: 'In Zahlen',
      subTitle:
        'Unser Engagement für Qualität und Zuverlässigkeit zeigt sich in jedem Projekt, das wir übernehmen. Bei ScrewFast liefern wir branchenführende Dienstleistungen, damit Ihre Bauprojekte für die Ewigkeit gebaut sind.',
      mainStatTitle: '96%',
      mainStatSubTitle:
        'unserer Kunden bewerten ihre Erfahrung mit ScrewFast als herausragend',
      stats: [
        { stat: '99,8%', description: 'Projektabschlussquote' },
        { stat: '5.000+', description: 'erfolgreiche Installationen' },
        { stat: '85%', description: 'Kundenwachstum im Jahresvergleich' },
      ],
    },
  },

  contact: {
    title: 'Kontakt',
    metaDescription:
      'Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Kontaktieren Sie uns und lassen Sie uns mit unseren Werkzeugen und Dienstleistungen die perfekte Lösung entwickeln.',
    ogTitle: 'Kontakt | ScrewFast',
    heading: 'Kontaktieren Sie uns',
    subTitle:
      'Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Kontaktieren Sie uns und lassen Sie uns mit unseren Werkzeugen und Dienstleistungen die perfekte Lösung entwickeln.',
    formTitle: 'Füllen Sie das folgende Formular aus',
    formSubTitle: 'Wir melden uns innerhalb von 1–2 Werktagen bei Ihnen.',
    firstName: 'Vorname',
    lastName: 'Nachname',
    details: 'Details',
    send: 'Nachricht senden',
    demoMessage:
      'Danke! (Demo — binden Sie einen Endpunkt an, um echte Nachrichten zu empfangen.)',
    knowledgeHeading: 'Wissensdatenbank',
    knowledgeContent: 'Durchsuchen Sie alle Artikel unserer Wissensdatenbank.',
    knowledgeLink: 'Anleitungen und Tutorials ansehen',
    faqHeading: 'FAQ',
    faqContent:
      'In unseren FAQ finden Sie schnelle, klare Antworten auf häufige Fragen.',
    faqLink: 'FAQ ansehen',
    officeHeading: 'Besuchen Sie unser Büro',
    officeContent: 'ScrewFast UK',
    emailHeading: 'Schreiben Sie uns eine E-Mail',
    emailContent: 'Lieber schriftlich? Senden Sie uns eine E-Mail an',
  },

  blogIndex: {
    title: 'Blog',
    metaDescription:
      'Bleiben Sie mit den Einblicken des Expertenteams von ScrewFast über die neuesten Trends und Entwicklungen in der Baubranche informiert.',
    ogTitle: 'Blog der Baubranche | ScrewFast',
    heading: 'Ihr Tor zu Exzellenz im Bauwesen',
    subTitle:
      'Entdecken Sie die neuesten Nachrichten, Tipps und Einblicke von ScrewFast, um Ihre Bauprojekte voranzubringen. Von Produktvorstellungen bis zu Strategien im Projektmanagement — unser Blog ist Ihre Anlaufstelle für alles rund um Werkzeuge und Bau.',
    insightsHeading: 'Einblicke',
    insightsSubTitle:
      'Bleiben Sie mit den Einblicken des Expertenteams von ScrewFast über die neuesten Trends und Entwicklungen in der Baubranche auf dem Laufenden.',
    noPosts: 'Noch keine Beiträge. Schauen Sie bald wieder vorbei.',
    noInsights: 'Noch keine Einblicke. Schauen Sie bald wieder vorbei.',
  },

  productsIndex: {
    title: 'Produkte',
    metaDescription:
      'Entdecken Sie die Langlebigkeit und Präzision der ScrewFast-Werkzeuge, entwickelt für Profis und Heimwerker gleichermaßen.',
    ogTitle: 'Hardware-Werkzeuge | ScrewFast',
    heading: 'Produkte',
    subTitle:
      'Entdecken Sie die Langlebigkeit und Präzision der ScrewFast-Werkzeuge, entwickelt für Profis und Heimwerker gleichermaßen. Jedes unserer Produkte wird präzise gefertigt und ist auf Langlebigkeit ausgelegt, damit Sie für jede Aufgabe das richtige Werkzeug haben.',
    customerStories: 'Kundengeschichten',
    testimonials: {
      title: 'Was unsere Kunden sagen',
      quotes: [
        {
          content:
            'Seit wir auf die Hardware-Werkzeuge von ScrewFast umgestiegen sind, ist die Effizienz auf unseren Baustellen enorm gestiegen. Die Langlebigkeit der Sechskantschrauben und die Präzision der Maschinenschrauben sind schlicht unerreicht. Es ist erfrischend, mit einem Unternehmen zu arbeiten, das die täglichen Anforderungen der Branche wirklich versteht.',
          author: 'Jason Clark',
          role: 'Polier | TopBuild',
          avatarAlt: 'Bildbeschreibung',
        },
        {
          content:
            'Als Innenarchitektin bin ich immer auf der Suche nach hochwertigen Materialien und Werkzeugen, die meine Visionen zum Leben erwecken. Das gemischte Schraubensortiment von ScrewFast hat meine Projekte grundlegend verändert und bietet die perfekte Mischung aus Qualität und Vielfalt. Der hervorragende Kundenservice war das i-Tüpfelchen!',
          author: 'Maria Gonzalez',
          role: 'Innenarchitektin | Creative Spaces',
          avatarAlt: 'Bildbeschreibung',
        },
        {
          content:
            'Ich bin seit über 15 Jahren Tischler, und ich kann ehrlich sagen, dass die Gewindeschrauben und Muttern von ScrewFast zu den besten gehören, die ich je verwendet habe. Sie halten wie keine anderen, und ich habe volles Vertrauen in jede Verbindung und jede Halterung. Dazu ist der Service tadellos — der Erfolg meines Projekts liegt ihnen wirklich am Herzen.',
          author: 'Richard Kim',
          role: 'Tischlermeister | WoodWright',
          avatarAlt: 'Bildbeschreibung',
        },
      ],
    },
    stats: {
      title: 'Warum ScrewFast?',
      subTitle:
        'Verwandeln Sie Ihre Ideen mit ScrewFast-Werkzeugen in greifbare Ergebnisse. Ob Sie mit einer Skizze auf einer Serviette beginnen oder in ein komplettes Bauprojekt eintauchen — unsere Werkzeuge helfen Ihnen, mit Zuversicht zu bauen.',
      benefits: [
        'Robuste und zuverlässige Werkzeuge für dauerhafte Leistung.',
        'Innovative Lösungen für die Anforderungen des modernen Bauens.',
        'Kundensupport, der sich dem Erfolg Ihres Projekts verschrieben hat.',
      ],
    },
  },

  data: { faqs, features, pricing },
};
