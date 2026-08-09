import OsrsImg from '../assets/error.png' 

export const languages: Record<'fr' | 'en', { name: string; flag: string }> = {
  fr: { name: 'Français', flag: 'fr' },
  en: { name: 'English', flag: 'us' },
} as const;

export const routesTranslations = {
  fr: {
    'experience-formation': 'en/experience-education',
  },
  en: {
    'experience-education': 'experience-formation',
  }
} as const;

export const defaultLanguage = 'fr';

export type LanguageCode = keyof typeof languages;

export const ui = {
  fr: {
    projectsContent: {
      agbc: {
        title: 'AGBC',
        imageUrl: OsrsImg,
        description: "Application mobile dédiée à la gestion des scores, performances, tournois et classements de billard avec statistiques en temps réel.",
        imageAltText: "Image placeholder pour le projet d'exemple",
        categoryText: 'Application Mobile',
        progressionText: 'En cours',
        dateText: 'Projet personnel',
        timeProject: '2026',
        detailedDescription:
          "Application qui facilite la gestion des scores, des performances et des tournois de billard à travers une application mobile, tout en offrant des statistiques en temps réel, des vidéos et un classement des joueurs.",
        keyFeatures: {
          taskProject: {
            title: 'Développement et intégration des interfaces utilisateur',
            description: "conception et intégration des écrans d'authentification (connexion et inscription) ainsi que de l'écran d'accueil de l'application.",
          },
          taskProjectTwo: {
            title: "Mise en place de l'architecture de navigation",
            description: "implémentation de la navigation principale à l'aide d'une barre de navigation inférieure et configuration d'un menu latéral pour faciliter l'accès aux différentes fonctionnalités.",
          },
          taskProjectThree: {
            title: 'Conception et développement du modèle de données avec Django',
            description:
              "création des entités et de la structure de base de données, notamment les tables Utilisateur (User) et Club, ainsi que leurs relations.",
          },
          taskProjectFour: {
            title: 'Développement de composants réutilisables',
            description:
              "création de composants personnalisés et modulaires tels que les formulaires, champs de saisie, boutons et listes déroulantes, afin d'assurer la cohérence de l'interface et de faciliter la maintenance du code.",
          }
        },
        galleryImages: {
          sampleGalleryImage1: { // Si tu actives la galerie pour l'exemple
          alt: "Texte alternatif pour l'image de galerie 1",
           caption: "",
        },
        },
        challenges:
          "L’un des principaux défis a été l’adaptation régulière de l’interface aux évolutions des maquettes Figma et aux tendances UI/UX actuelles. J’ai également dû me familiariser avec TypeScript, que j’utilisais pour la première fois, afin d’intégrer le typage statique et les bonnes pratiques de développement.",
        learnings: "Ce projet m’a permis d’acquérir des compétences en TypeScript pour développer un code plus fiable et maintenable. J’ai également renforcé mes connaissances en UI/UX à travers l’intégration de maquettes Figma et la conception d’interfaces mobiles intuitives et modernes.",
      },
      mielMontet: {
        title: 'Miel Montet',
        imageUrl: OsrsImg,
        description: "Un site e-commerce spécialisé dans la vente de produits à base de miel",
        imageAltText: "Image placeholder pour le projet d'exemple",
        categoryText: 'Application Web',
        progressionText: 'Terminé',
        dateText: 'Web & Mobile Sucess',
        detailedDescription:
          "Un site e-commerce spécialisé dans la vente de produits à base de miel.",
        keyFeatures: {
          taskProject: {
            title: 'Interface responsive',
            description: "Test de l'interface responsive sur ordinateurs, tablettes et smartphones pour garantir une expérience utilisateur optimale.",
          },
          taskProjectTwo: {
            title: 'Gestion simplifiée du contenu',
            description: "grâce à l'administration WordPress.",
          },
          taskProjectThree: {
            title: 'Tests fonctionnels',
            description:
              "réalisés afin d'assurer la stabilité et le bon fonctionnement du site.",
          },
          taskProjectFour: {
            title: 'Formulaire de contact et notifications par e-mail',
            description:
              "configurés via WP Mail SMTP pour garantir la bonne réception des messages.",
          },
          taskProjectFive: {
            title: 'Carte interactive dynamique',
            description:
              "Permettant aux utilisateurs de situer Miel Montet.",
          },
        },
        galleryImages: {
          sampleGalleryImage1: { // Si tu actives la galerie pour l'exemple
          alt: "Texte alternatif pour l'image de galerie 1",
           caption: "",
        },
        },
        challenges:
          "L'un des défis majeurs a été de garantir la stabilité du site face à la gestion permanente des mises à jour des plugins, qui provoquaient parfois des conflits d'affichage. De plus, la configuration rigoureuse de WP Mail SMTP pour sécuriser l'envoi des e-mails transactionnels (notifications de commandes) et l'adaptation du design responsive sur WordPress pour obtenir un rendu parfait sur tous les types d'écrans ont demandé une attention technique particulière.",
        learnings: "Ce projet m'a permis de perfectionner mes compétences dans la maintenance, la sécurisation et la gestion des cycles de mise à jour des extensions WordPress. J'ai également acquis une connaissance de l'écosystème WooCommerce pour la gestion complète d'une boutique e-commerce (produits, tunnels d'achat, passerelles). Enfin, j'ai consolidé mon expertise dans l'optimisation du responsive design et la résolution de problèmes liés aux flux d'e-mails professionnels.",
      },
      osr: {
        title: 'Osiris',
        imageUrl: OsrsImg,
        description: "Une application interne de back-office pour la gestion globale des clients, des commandes, des livraisons et le suivi des cycles de tests.",
        imageAltText: "Image placeholder pour le projet d'exemple",
        categoryText: 'Application Web',
        progressionText: 'Terminé',
        dateText: 'Web & Mobile Sucess',
        detailedDescription:
          "Osiris est une application interne (back-office) conçue pour centraliser la gestion des clients, des commandes et du suivi des livraisons. La plateforme permet d'optimiser les processus métier grâce à une interface intuitive et à des services API performants. Le projet a été développé avec Symfony, API Platform et Next.js afin d'assurer une gestion efficace des données et une expérience utilisateur fluide.",
        keyFeatures: {
          taskProject: {
            title: 'Gestion des localisation et des partenaires',
            description: 'Développement des fonctionnalités liées à la gestion des localisations et partenaires.'
          },

          taskProjectTwo: {
            title: 'Test QA des Gestion des commandes',
            description: 'Suivi et traitement des commandes au sein de la plateforme.'
          },

          taskProjectThree: {
            title: 'Développement API',
            description: 'Création et optimisation des endpoints conçernant la partie localisation et partenaire avec Symfony et API Platform.'
          },

          taskProjectFour: {
            title: 'Modélisation des données',
            description: 'Création et mise à jour des entités et des champs métier.'
          },

          taskProjectFive: {
            title: 'Tests unitaires',
            description: 'Mise en place de tests afin d’assurer la qualité et la stabilité de l’application.'
          },

          taskProjectSix: {
            title: 'Interface utilisateur',
            description: 'Développement et optimisation du front-end avec Next.js.'
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // Si tu actives la galerie pour l'exemple
          //   alt: "Texte alternatif pour l'image de galerie 1",
          //   caption: "Légende pour l'image de galerie 1",
          // },
        },
        challenges:
          "Le défi principal a été l'apprentissage et la prise en main rapide de Next.js, en comprenant ses spécificités (comme le rendu côté serveur ou la structure des pages) par rapport à React standard. De plus, concevoir des API robustes avec API Platform tout en mettant en place simultanément une suite complète de tests unitaires pour valider les endpoints de localisation a nécessité une courbe d'apprentissage intensive.",
        learnings: "Ce projet m'a permis de découvrir la puissance et la robustesse de Next.js pour la création d'applications modernes, notamment sa fluidité dans la consommation des données d'API. J'ai également acquis une solide expertise sur API Platform pour générer rapidement des API REST professionnelles, tout en consolidant mes compétences en tests automatisés pour garantir la qualité d'une architecture globale (Back-End Symfony / Front-End Next.js).",
      },
      taxi: {
        title: 'Taxi Finder',
        description: "Développement mobile (React Native) d'un service de mise en relation de taxis de proximité.",
        imageAltText: "Image placeholder pour le projet d'exemple",
        categoryText: 'Application Mobile',
        progressionText: 'Terminé',
        dateText: 'Web & Mobile Sucess',
        detailedDescription:
          "Développement de la version mobile d'un service de mise en relation avec des taxis à proximité. Développée en React Native, l'application permet aux utilisateurs de localiser et réserver un chauffeur en temps réel. J'ai activement contribué à la refonte complète de l'interface utilisateur pour offrir une expérience plus fluide et intuitive, tout en mettant en place une gestion globale des traductions multilingues afin de rendre l'application accessible à un public international.",
        keyFeatures: {
          taskProject: {
            title: "Refonte de l\'interface (UI/UX)",
            description: 'Contribution majeure à la refonte visuelle pour offrir une navigation fluide, moderne et intuitive sur mobile.'
          },
          taskProjectTwo: {
            title: 'Consommation d\'API REST',
            description: 'Connexion et communication sécurisée des flux de données en temps réel avec le serveur backend.'
          },
          taskProjectThree: {
            title: 'Internationalisation (i18n)',
            description: 'Gestion complète du système de traductions multilingues pour ouvrir l\'application à un public international.'
          },
          taskProjectFour: {
            title: 'Optimisation de l\'application',
            description: 'Amélioration des performances globales du code et de la fluidité des composants graphiques React Native.'
          },
        },
        galleryImages: {
          sampleGalleryImage1: { // Si tu actives la galerie pour l'exemple
          alt: "Texte alternatif pour l'image de galerie 1",
          caption: "",
        },
        },
        challenges:
          "Le défi majeur a résidé dans la gestion et l'intégration des flux complexes de l'API REST en temps réel pour la mise en relation avec les chauffeurs. Sécuriser les échanges de données asynchrones sur mobile tout en maintenant une interface fluide et sans latence (notamment lors du chargement des composants graphiques et des rafraîchissements) a demandé une gestion rigoureuse des états de l'application.",
        learnings: "Grâce à ce projet, j'ai acquis une solide compréhension de la sécurisation des architectures mobiles grâce à l'implémentation et à la gestion des Tokens d'authentification (comme les JWT) pour l'accès aux API. J'ai également approfondi mes compétences en internationalisation (i18n), en apprenant à structurer proprement les fichiers de traduction pour adapter dynamiquement l'UI en plusieurs langues sans impacter les performances de l'application.",
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Développement Frontend',
        description:
          "Création d'interfaces utilisateur interactives et performantes.",
      },
      backendDevelopment: {
        title: 'Développement Backend',
        description: "Construction de logiques serveur robustes et d'API.",
      },
      uiUxDesign: {
        title: 'Design UI/UX',
        description:
          "Conception d'expériences utilisateur intuitives et esthétiques.",
      },
      devOpsAndTools: {
        title: 'DevOps & Outils',
        description:
          "Outils et processus essentiels au contrôle de version, aux tests d'API et à la garantie d'un cycle de développement propre et sécurisé.",
      },
      projectManagement: {
        title: 'Project Management',
        description:
          'Expérience du travail en équipe et des méthodologies Agile (Scrum) pour le suivi des tâches, la collaboration et la livraison continue de projets',
      },
    },
    site: {
      title: 'Développeur web & mobile',
      description:
        'Expérience du travail en équipe et des méthodologies Agiles (Scrum) pour le suivi des tâches, la collaboration et la livraison continue des projets.',
    },
    nav: {
      home: 'Accueil',
      blog: 'Expériences & Formations',
      contact: 'Contact',
      projects: 'Projets',
      // tips: 'Astuces',
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
    homePage: {
      pageTitle: 'Accueil |  Développeur web & mobile',
      pageDescription:
        "Bienvenue sur le portfolio de YOUR_NAME, développeur FullStack passionné par la création d'expériences web innovantes.",
      heroGreeting: "Bonjour, je m'appelle TOLOTRA",
      heroSubtitlePart1: 'Développeur Web & Mobile',
      heroSubtitlePart2: 'Passionné UI/UX',
      heroIntroduction: "Développeur web et mobile avec 2 ans d'expérience, spécialisé dans le développement d'applications web et Android. J'intègre également l'IA dans mon workflow pour concevoir des solutions innovantes et performantes.",
      heroViewWorkButton: 'Mes réalisations',
      heroContactButton: 'Me contacter',
      heroImageAlt:
        'Illustration représentant YOUR_NAME ou un concept de développement',
      featuredProjectsTitle: '3 derniers projets',
      featuredProjectsDescription:
        "Voici quelques projets sur lesquels j'ai récemment travaillé. N'hésitez pas à les explorer !",
      projectCardViewProject: 'Voir le projet',
      projectCardViewCode: 'Voir le code',
      imageNotAvailable: 'Image bientôt disponible',
      mySkillsTitle: 'Mes Compétences',
      mySkillsDescription:
        "Explorez l'expertise et les capacités qui définissent mon travail et ma passion.",
    },
    blogPage: {
      pageTitle: 'Expériences & formations | Développeur web & mobile',
      pageDescription:
        "Articles et réflexions sur le développement web, l'architecture logicielle, et les nouvelles technologies.",
      title: 'Expériences et formations',
      description:
        "Aperçu de mon parcours académique et de mes expériences professionnelles en développement web et mobile",
      comingSoon:
        'Les articles de blog apparaîtront ici bientôt. Revenez plus tard !',
      heroImageAlt: "Image de couverture pour l'article : ",
      publishedOn: 'Publié le : ',
      readMore: 'Lire la suite',
      readingTimeSuffix: 'min de lecture',
      searchPlaceholder: 'Rechercher des articles...',
      filterByTagButtonLabel: 'Filtrer par tag',
      noTagFound: 'Aucun tag trouvé.',
      selectTagCommandPlaceholder: 'Rechercher un tag...',
      allTagsLabel: 'Tous les tags',
      noPostsFound: 'Aucun article trouvé.',
    },
    blogPost: {
      publishedOn: 'Durée: ',
      updatedOn: 'Mis à jour le : ',
      heroImageAlt: "Image de couverture pour l'article : ",
      backToList: 'Retour à la page expériences et formations',
      readingTimeSuffix: 'min de lecture',
      relatedPostsTitle: 'Je te recommande aussi :',
      readMore: 'Lire la suite',
      editOnGithub: 'Proposer une modification sur GitHub',
    },
    toc: {
      title: "Sommaire de l'article",
    },
    contactPage: {
      pageTitle: 'Me Contacter',
      pageDescription:
        "Discutons de ton projet, d'une collaboration potentielle, ou simplement pour échanger sur la tech !",
      title: 'Me Contacter',

      description:
        "Discutons de ton projet, d'une collaboration potentielle, ou simplement pour échanger sur la tech !",

      formTitle: 'Envoyer un message au:',
      mailTitle: 'tolotrafaniryrasolofomanana13@gmail.com',
      firstNameLabel: 'Prénom',
      lastNameLabel: 'Nom',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Envoyer',
      firstNamePlaceholder: 'Ton prénom',

      lastNamePlaceholder: 'Ton nom de famille',
      emailPlaceholder: 'Ton adresse e-mail',
      messagePlaceholder: 'Ton message ici...',
      calendarTitle: "M'appeler directement :",
      numTitle: "+261 38 33 050 53",
      calendarDescription:
        'Tu préfères discuter de vive voix ? Réservez directement un créneau dans mon agenda.',
      calendarButtonLabel: 'Voir mes disponibilités',
      calendarLinkLabel: 'Voir mon agenda',
      calendarPlaceHolder:
        "L'intégration avec Google Calendar se fera bientôt...",
      orSeparatorText: 'OU',
      toastSuccessMessageSent: 'Message envoyé avec succès !',
      toastErrorFailedToSend: "Échec de l'envoi du message.",
      toastErrorUnexpected: "Une erreur inattendue s'est produite.",
      toastErrorDetails: "Détails de l'erreur:",
      toastErrorValidationFailed: 'Validation du formulaire échouée.',
    },
    projectDetailPage: {
      backToProjects: 'Retour aux Projets',
      categoryLabel: 'Catégorie :',
      status: 'Status :',
      titleForYear: 'Année :',
      dateLabel: 'Société :',
      timeProject: 'Test',
      aboutTitle: 'À propos de ce projet',
      keyFeaturesTitle: 'Tâches',
      galleryTitle: 'Galerie',
      challengesTitle: 'Défis Rencontrés',
      learningsTitle: 'Leçons Apprises',
      visitProjectButton: 'Visiter le Projet',
      viewCodeButton: 'Voir le Code',
    },
    projectsPage: {
      title: 'Mes Projets',
      metaTitle: 'Mes Projets | Développeur web & mobile',
      metaDescription: 'Découvrez tous les projets.',
      noProjects: 'Aucun projet à afficher pour le moment.',
      noProjectsDescription:
        "Il semble que vous n'ayez pas encore de projets à afficher.",
    },
    notFoundPage: {
      pageTitle: 'Page Non Trouvée',
      title: 'Oups ! Page Non Trouvée',
      message:
        "Désolé, la page que vous recherchez ne semble pas exister. Vérifiez l'URL ou retournez à la page d'accueil.",
      homeLink: "Retourner à l'Accueil",
    },

    tipsPage: {
      metaTitle: 'Astuces de Développement',
      metaDescription:
        'Découvrez des astuces et conseils rapides sur le développement web et la cloud computing.',
      description:
        'Découvrez des astuces et conseils rapides sur le développement web et la cloud computing.',
      title: 'Nos Dernières Astuces',
      noTips: 'Aucune astuce à afficher pour le moment.',
      readTip: "Lire l'astuce",
      backToList: 'Retour à la page expériences et formations',
      featuredTips: 'Astuces recommandées',
      allTips: 'Toutes les astuces',
      tipsAvailable: 'astuces disponibles',
      tipAvailable: 'astuce disponible',
      editOnGithub: 'Modifier sur GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Type invalide.',
      invalid_type_received_undefined: 'Ce champ est requis.', // For required fields (fallback)
      required_field_custom: 'Le champ {fieldName} est requis.',
      // String errors
      too_small_string_minimum: 'Doit contenir au moins {minimum} caractères.',
      too_big_string_maximum: 'Ne doit pas dépasser {maximum} caractères.',
      invalid_string_email: 'Adresse e-mail invalide.',
      invalid_string_url: 'URL invalide.',
      invalid_string_uuid: 'UUID invalide.',
      // You can add more specific messages as needed
    },
  },
  en: {
    projectsContent: {
      agbc: {
        title: 'AGBC',
        imageUrl: OsrsImg,
        description: "Mobile application dedicated to managing billiards scores, performances, tournaments, and rankings with real-time statistics.",
        imageAltText: "Image placeholder pour le projet d'exemple",
        categoryText: 'Mobile Application',
        progressionText: 'In progress',
        dateText: 'Personal Project',
        detailedDescription:
          "A mobile application that simplifies the management of billiard scores, player performance, and tournaments, while providing real-time statistics, videos, and player rankings.",
        keyFeatures: {
          taskProject: {
            title: 'Development and integration of user interfaces',
            description: "design and implementation of authentication screens (login and sign-up), as well as the application home screen.",
          },
          taskProjectTwo: {
            title: "Implementation of the navigation architecture",
            description: "setting up the main navigation using a Bottom Tab Navigator and configuring a Drawer Navigator to facilitate access to the application’s different features.",
          },
          taskProjectThree: {
            title: 'Design and development of the data model using Django',
            description:
              "creation of entities and database structure, including the User and Club tables, as well as their relationships.",
          },
          taskProjectFour: {
            title: 'Development of reusable components',
            description:
              "creation of custom and modular components such as forms, input fields, buttons, and dropdown lists, to ensure interface consistency and simplify code maintenance.",
          }
        },
        galleryImages: {
          sampleGalleryImage1: { // Si tu actives la galerie pour l'exemple
          alt: "Texte alternatif pour l'image de galerie 1",
           caption: "",
        },
        },
        challenges:
          "One of the main challenges was regularly adapting the interface to changes in Figma designs and current UI/UX trends. I also had to become familiar with TypeScript, which I was using for the first time, in order to implement static typing and adopt good development practices.",
        learnings: "This project allowed me to gain skills in TypeScript to develop more reliable and maintainable code. I also strengthened my UI/UX knowledge through the integration of Figma designs and the creation of modern, intuitive mobile interfaces.",
      },
      mielMontet: {
        title: 'Miel Montet',
        imageUrl: OsrsImg,
        description: 'E-commerce platform dedicated to honey-based products.',
        imageAltText: 'Placeholder image for the sample project',
        categoryText: 'Web Application',
        progressionText: 'Completed',
        dateText: 'Web & Mobile Sucess',
        detailedDescription:
          'An e-commerce website specializing in honey-based products.',
        keyFeatures: {
          taskProject: {
            title: 'Responsive Design',
            description: 'Responsive interface testing on desktops, tablets, and smartphones to ensure an optimal user experience.',
          },
          taskProjectTwo: {
            title: 'Content management',
            description: 'Simplified through the WordPress admin panel.',
          },
          taskProjectThree: { 
            title: 'Functional testing',
            description:
              'Conducted to ensure website stability and optimal performance.',
          },
          taskProjectFour: { 
            title: 'Contact form and email notifications',
            description:
              'Configured via WP Mail SMTP to guarantee reliable message delivery.',
          },
          taskProjectFive: { 
            title: 'Dynamic interactive map',
            description:
              'Allowing users to locate Miel Montet.',
          }
        },
        galleryImages: {
          // sampleGalleryImage1: { // If you enable gallery for the example
          //   alt: 'Alt text for gallery image 1',
          //   caption: 'Caption for gallery image 1',
          // },
        },
        challenges:
          'One of the major challenges was maintaining website stability while continuously managing plugin updates, which occasionally caused display conflicts. Additionally, configuring WP Mail SMTP to secure transactional email delivery (such as order notifications) and fine-tuning the responsive design on WordPress for a pixel-perfect rendering across all screen sizes required meticulous technical attention.',
        learnings: 'This project allowed me to hone my skills in maintaining, securing, and managing WordPress plugin update cycles. I also gained hands-on experience with the WooCommerce ecosystem for comprehensive e-commerce management, including products, checkout funnels, and gateways. Finally, I consolidated my expertise in responsive design optimization and troubleshooting professional email delivery workflows.',
      },
      osr: {
        title: 'Osiris',
        imageUrl: OsrsImg,
        description: "An internal back-office application for the comprehensive management of clients, orders, deliveries, and testing lifecycle tracking.",
        imageAltText: "Image placeholder pour le projet d'exemple",
        categoryText: 'Web Application',
        progressionText: 'Completed',
        dateText: 'Web & Mobile Sucess',
        detailedDescription:
          "Osiris is an internal back-office application designed to centralize customer, order, and delivery tracking management. The platform optimizes business workflows through an intuitive interface and high-performance API services. The project was built using Symfony, API Platform, and Next.js to ensure efficient data management and a seamless user experience.",
        keyFeatures: {
          taskProject: {
            title: 'Location and partner management',
            description: 'Developed features related to managing locations and partners.'
          },

          taskProjectTwo: {
            title: 'Order management QA testing',
            description: 'Monitored and processed orders within the platform.'
          },

          taskProjectThree: {
            title: 'API Development',
            description: 'Created and optimized endpoints for locations and partners using Symfony and API Platform.'
          },

          taskProjectFour: {
            title: 'Data modeling',
            description: 'Created and updated database entities and business fields.'
          },

          taskProjectFive: {
            title: 'Unit testing',
            description: 'Implemented tests to ensure application quality and stability.'
          },

          taskProjectSix: {
            title: 'User interface',
            description: 'Developed and optimized the front-end using Next.js.'
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // Si tu actives la galerie pour l'exemple
          //   alt: "Texte alternatif pour l'image de galerie 1",
          //   caption: "Légende pour l'image de galerie 1",
          // },
        },
        challenges:
          "A key challenge was quickly adapting to Next.js by mastering its differences from standard React, notably server-side rendering and page structure. Furthermore, building robust APIs with API Platform while developing a full suite of unit tests to validate location endpoints made for an intensive learning curve.",
        learnings: "This project allowed me to discover the power and robustness of Next.js for building modern applications, particularly its seamless efficiency in consuming API data. I also gained solid expertise in API Platform for rapidly generating professional-grade REST APIs, while consolidating my skills in automated testing to guarantee the quality of a full-stack architecture (Symfony Back-End / Next.js Front-End).",
      },
      taxi: {
        title: 'Taxi Finder',
        description: "Mobile development (React Native) of a proximity-based taxi-hailing service.",
        imageAltText: "Image placeholder pour le projet d'exemple",
        categoryText: 'Mobile Application',
        progressionText: 'Completed',
        dateText: 'Web & Mobile Sucess',
        detailedDescription:
          "Development of the mobile version for a ride-hailing service connecting users with nearby taxis. Built with React Native, the application allows users to locate and book a driver in real time. I actively contributed to a complete UI redesign to deliver a smoother, more intuitive user experience, while implementing a global localization system to make the app accessible to an international audience.",
        keyFeatures: {
          taskProject: {
            title: "UI/UX redesign",
            description: 'Major contribution to the visual overhaul, delivering seamless, modern, and intuitive mobile navigation.'
          },
          taskProjectTwo: {
            title: 'REST API consumption',
            description: 'Connected and securely synchronized real-time data streams with the backend server.'
          },
          taskProjectThree: {
            title: 'Internationalization (i18n)',
            description: 'Full management of the multilingual translation system to open the application to an international audience.'
          },
          taskProjectFour: {
            title: 'App optimization',
            description: 'Enhanced overall code performance and improved the smoothness of React Native graphical components.'
          },
        },
        galleryImages: {
          sampleGalleryImage1: { // Si tu actives la galerie pour l'exemple
          alt: "Texte alternatif pour l'image de galerie 1",
          caption: "",
        },
        },
        challenges:
          "The major challenge lay in managing and integrating complex, real-time REST API streams for driver matching. Securing asynchronous data exchanges on mobile while maintaining a smooth, lag-free user interface—particularly during graphical component rendering and state updates—required rigorous application state management.",
        learnings: "Through this project, I gained a solid understanding of mobile architecture security by implementing and managing authentication tokens (such as JWTs) for API access. I also deepened my skills in internationalization (i18n), learning how to cleanly structure translation files to dynamically adapt the UI across multiple languages without impacting app performance.",
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Frontend Development',
        description:
          'Building interactive and high-performance user interfaces.',
      },
      backendDevelopment: {
        title: 'Backend Development',
        description: 'Constructing robust server logic and APIs.',
      },
      uiUxDesign: {
        title: 'UI/UX Design',
        description: 'Designing intuitive and aesthetic user experiences.',
      },
      devOpsAndTools: {
        title: 'DevOps & Tools',
        description: 'Automating development and deployment processes.',
      },
      projectManagement: {
        title: 'Project Management',
        description:
          'Experience in teamwork and Agile methodologies (Scrum) for task tracking, collaboration, and continuous project delivery.',
      },
    },
    site: {
      title: 'Web & Mobile Developer',
      description:
        'A modern and performant Astro template to kickstart your project.',
    },
    nav: {
      home: 'Home',
      blog: 'Educations & Certifications',
      contact: 'Contact',
      projects: 'Projects',
      // tips: 'Tips',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | Web & Mobile Developer',
      pageDescription:
        'Welcome to the portfolio of YOUR_NAME, a FullStack developer passionate about creating innovative web experiences.',
      heroGreeting: "Hi, I'm Tolotra",
      heroSubtitlePart1: 'Web & Mobile Developer',
      heroSubtitlePart2: 'UI/UX Enthusiast',
      heroIntroduction: 'Web and mobile developer with 2 years of experience specializing in web and Android application development. I also integrate AI into my workflow to build innovative and high-performing solutions',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing YOUR_NAME or a development concept',
      featuredProjectsTitle: '3 latest projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define my work and passion.',
    },
    blogPage: {
      pageTitle: 'Educations & certifications | Web & Mobile Developer',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'Education & Certifications',
      description:
        'An overview of my academic background and professional experience in web and mobile development.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Durée: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Me',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: 'Contact Me',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message:',
      mailTitle: 'tolotrafaniryrasolofomanana13@gmail.com',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Direct phone call',
      numTitle: "+261 38 33 050 53",
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category :',
      status: 'Status :',
      titleForYear: 'Year :',
      dateLabel: 'Company :',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Tasks',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Projects',
      metaTitle: "My Projects | Web & Mobile Developer",
      metaDescription: "Discover all of YOUR_NAME's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    tipsPage: {
      metaTitle: 'Development Tips | YOUR_NAME',
      metaDescription:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      title: 'Latest Tips',
      description:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
      editOnGithub: 'Edit on GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
