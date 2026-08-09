import type { TranslatedProject } from '../type';
//import { defaultLanguage } from '../i18n/ui';
import OsrsImg from '../../assets/miel.png' 

export const allProjects: Record<string, Record<string, TranslatedProject>> = {
    fr: {
    osiris: {
      title: 'Osiris',
      description: 'Plateforme de gestion...',
      imageAltText: "Capture d'écran d'Osiris",
      categoryText: 'Application web',
      dateText: 'Avril 2024',
      detailedDescription: 'Osiris est un projet destiné à...',
      keyFeaturesTranslated: [
        { title: 'Gestion efficace', description: 'Optimisation des processus internes.' },
      ],
      galleryImagesTranslated: [],
      challenges: 'Créer une interface intuitive',
      learnings: 'Amélioration des compétences en UX',
      // imageUrl: require('../../assets/error.png')
      imageUrl: OsrsImg
    },
    taxi: {
      title: 'Taxi Finder',
      description: 'Application de localisation de taxis',
      imageAltText: 'Interface de Taxi Finder',
      categoryText: 'Application web',
      dateText: 'Mai 2024',
      detailedDescription: 'Taxi Finder aide les usagers à...',
      keyFeaturesTranslated: [],
      galleryImagesTranslated: [],
      challenges: 'Cartographie en temps réel',
      learnings: 'Utilisation avancée de Leaflet.js',
      // imageUrl: /* ton image ici */,
      imageUrl: OsrsImg
    },
    miel: {
      title: 'Miel Montet',
      description: 'Projet de vente de miel',
      imageAltText: 'Image de pot de miel',
      categoryText: 'E-commerce',
      dateText: 'Janvier 2025',
      detailedDescription: 'Ce projet vise à vendre...',
      keyFeaturesTranslated: [],
      galleryImagesTranslated: [],
      challenges: 'Connexion CMS',
      learnings: 'Gestion multilingue',
      // imageUrl: /* ton image ici */,
      imageUrl: OsrsImg
    },
  },
}