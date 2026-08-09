// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import placeholderImage from '@/assets/placeholder.webp';
import mielImg from '@/assets/miel-logo.png'
import mielImgTwo from '@/assets/miel.png'
import mielImgThree from '@/assets/miel-img.png'
import mielImgFour from '@/assets/miel-img-five.png'
import mielImgFive from '@/assets/miel-img-six.png'
import mielImgSix from '@/assets/miel-img-four.png'
import mielMobile from '@/assets/miel-img-nine.png'
import osrImg from '@/assets/5asec.png'
import osrImgOne from '@/assets/osr-img-three.png'
import osrImgTwo from '@/assets/osr-img-log.png'
import osrImgThree from '@/assets/osr-cmd.png'
import osrImgFour from '@/assets/osiris-four.png'
import osrImgFive from '@/assets/osr-cmd-two.png'
import logoTaxi from '@/assets/logo.png'
import taxiOne from '@/assets/taxi-one.png'
import taxiTwo from '@/assets/taxi-two.png'
import taxiThree from '@/assets/taxi-three.png'
import taxiFour from '@/assets/taxi-four.png'
import taxiFive from '@/assets/taxi-five.png'
import logoAgbc from '@/assets/logoAgbc-two.png'
import imgAgbc from '@/assets/agbc-one.png'
import imgAgbcTwo from '@/assets/agbc-two.png'
import imgAgbcThree from '@/assets/agbc-three.png'
import imgAgbcFour from '@/assets/agbc-four.png'
import imgAgbcFive from '@/assets/agbc-login.png'

import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const projectsListUnsorted: Array<ProjectData> = [
  {
    id: 'agbc', // Unique identifier for translations
    slug: 'AGBC', // Used in the URL
    imageUrl: logoAgbc, // Use imported ImageMetadata
    // projectUrl: '#', // Optional: Link to the live project
    // codeUrl: '#', // Optional: Link to the source code
    tags: ['React Native', 'TypeScript', 'Django'], // Generic tags
    category: 'Mobile Application', // Generic category
    date: '2026-03-01', // Generic date
    progression: 'En cours',
    evolution: '2026',
    galleryImages: [
      // Optional: Gallery images for the project
      {
        id: 'sampleGalleryImage1',
        src: imgAgbc, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage2',
        src: imgAgbcTwo, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage3',
        src: imgAgbcThree, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage4',
        src: imgAgbcFour, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage5',
        src: imgAgbcFive, // Placeholder, needs ImageMetadata
      },
    ],
    keyFeatures: [
      // Key features (IDs for translation)
      { id: 'taskProject' },
      { id: 'taskProjectTwo'},
      { id: 'taskProjectThree' },
      { id: 'taskProjectFour' }
    ],
    technologiesUsed: [
      // Technologies used (IDs for display)
      { id: 'astro', name: 'Astro' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
  },
  {
    id: 'mielMontet', // Unique identifier for translations
    slug: 'Miel Montet', // Used in the URL
    imageUrl: mielImg, // Use imported ImageMetadata
    // projectUrl: '#', // Optional: Link to the live project
    // codeUrl: '#', // Optional: Link to the source code
    tags: ['Wordpress'], // Generic tags
    category: 'Web Application', // Generic category
    date: '2025-01-01', // Generic date
    progression: 'Terminé',
    evolution: '2024',
    galleryImages: [
      // Optional: Gallery images for the project
      {
        id: 'sampleGalleryImage1',
        src: mielImgTwo, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage2',
        src: mielImgThree, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage3',
        src: mielImgFour, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage4',
        src: mielImgFive, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage5',
        src: mielImgSix, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage6',
        src: mielMobile, // Placeholder, needs ImageMetadata
      },
    ],
    keyFeatures: [
      // Key features (IDs for translation)
      { id: 'taskProject' },
      { id: 'taskProjectTwo'},
      { id: 'taskProjectThree' },
      { id: 'taskProjectFour' },
      { id: 'taskProjectFive' },
    ],
    technologiesUsed: [
      // Technologies used (IDs for display)
      { id: 'astro', name: 'Astro' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
  },
  {
    id: 'osr', // Unique identifier for translations
    slug: 'Osiris', // Used in the URL
    imageUrl: osrImg  , // Use imported ImageMetadata
    // projectUrl: '#', // Optional: Link to the live project
    // codeUrl: '#', // Optional: Link to the source code
    tags: ['Next Js', 'Docker', 'Symfony'], // Generic tags
    category: 'Web Application', // Generic category
    date: '2025-01-01', // Generic date
    progression: 'Terminé',
    evolution: '2024',
    galleryImages: [
      // Optional: Gallery images for the project
      {
        id: 'sampleGalleryImage1',
        src: osrImgOne, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage2',
        src: osrImgTwo, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage3',
        src: osrImgThree, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage4',
        src: osrImgFour, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage5',
        src: osrImgFive, // Placeholder, needs ImageMetadata
      },
    ],
    keyFeatures: [
      // Key features (IDs for translation)
      { id: 'taskProject' },
      { id: 'taskProjectTwo' },
      { id: 'taskProjectThree' },
      { id: 'taskProjectFour' },
      { id: 'taskProjectFive' },
      { id: 'taskProjectSix' },
    ],
    technologiesUsed: [
      // Technologies used (IDs for display)
      { id: 'astro', name: 'Astro' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
  },
  {
    id: 'taxi', // Unique identifier for translations
    slug: 'Taxi finder', // Used in the URL
    imageUrl: logoTaxi  , // Use imported ImageMetadata
    // projectUrl: '#', // Optional: Link to the live project
    // codeUrl: '#', // Optional: Link to the source code
    tags: ['React Native'], // Generic tags
    category: 'Web Application', // Generic category
    date: '2025-01-01', // Generic date
    progression: 'Terminé',
    evolution: '2023',
    galleryImages: [
      // Optional: Gallery images for the project
      {
        id: 'sampleGalleryImage1',
        src: taxiOne, // Placeholder, needs ImageMetadata
      },
       {
        id: 'sampleGalleryImage2',
        src: taxiTwo, // Placeholder, needs ImageMetadata
      },
       {
        id: 'sampleGalleryImage3',
        src: taxiThree, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage4',
        src: taxiFour, // Placeholder, needs ImageMetadata
      },
      {
        id: 'sampleGalleryImage4',
        src: taxiFive, // Placeholder, needs ImageMetadata
      },
    ],
    keyFeatures: [
      // Key features (IDs for translation)
      { id: 'taskProject' },
      { id: 'taskProjectTwo' },
      { id: 'taskProjectThree' },
      { id: 'taskProjectFour' },
    ],
    technologiesUsed: [
      // Technologies used (IDs for display)
      { id: 'astro', name: 'Astro' },
      //{ id: 'react', name: 'React' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'tailwindcss', name: 'TailwindCSS' },
    ],
  },
];

export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  // Sort by date, most recent first. Ensure 'date' is a valid date string.
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

// Helper function to translate a single project
function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  type ProjectIdKey =
    keyof (typeof ui)[typeof defaultLanguage]['projectsContent'];
  const currentProjectId = project.id as ProjectIdKey;

  const projectContentSource = ui[lang]?.projectsContent?.[currentProjectId]
    ? ui[lang].projectsContent
    : ui[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  if (!i18nData) {
    // Fallback if translation for the project ID is missing
    // This might happen if i18n/ui.ts is not updated after adding a new project
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );
    return {
      ...project,
      title: project.id,
      imageUrl: project.imageUrl ?? '', // Fallback title
      description: 'Description missing for this project.', // Fallback description
      imageAltText: 'Placeholder image', // Fallback alt text
      categoryText: project.category,
      progressionText: project.progression,
      dateText: project.date,
      timeProject: project.evolution,
      detailedDescription: 'Detailed description missing.',
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: 'N/A',
        })) ?? [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges: 'Challenges information missing.',
      learnings: 'Learnings information missing.',
    };
  }

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: 'Description missing',
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    imageUrl: project.imageUrl ?? '', 
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    progressionText:  i18nData.progressionText,
    dateText: i18nData.dateText ?? project.date,
    timeProject: project.evolution,
    detailedDescription:
    i18nData?.detailedDescription ?? 'Detailed description missing',  
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData?.challenges ?? 'Challenges information missing',
    learnings: i18nData?.learnings ?? 'Learnings information missing',
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

// Skills
export const skillsList: Array<SkillData> = [
  {
    id: 'frontendDevelopment',
    iconName: 'MonitorSmartphone',
    technologies: [
      { id: 'html5', name: 'HTML' },
      { id: 'css3', name: 'CSS' },
      { id: 'react', name: 'React / React Native' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'wordpress', name: 'Wordpress' },
    ],
  },
  {
    id: 'backendDevelopment',
    iconName: 'ServerCog',
    technologies: [
      { id: 'django', name: 'Django' },
      { id: 'symfony', name: 'Symfony' },
      { id: 'wordpress', name: 'Wordpress' },
      {id: 'apiPlatform', name: 'Api Platform'},
      {id: 'postgresql', name: 'PostgreSql'},
      { id: 'firebase', name: 'Firebase' }
    ],
  },
  {
    id: 'uiUxDesign',
    iconName: 'PenTool',
    technologies: [
      { id: 'figma', name: 'Figma' },
      { id: 'adobe', name: 'Adobe' },
    ],
  },
  {
    id: 'devOpsAndTools',
    iconName: 'Terminal',
    technologies: [
      { id: 'git', name: 'Git' },
      { id: 'postman', name: 'Postman' },
    ],
  },
  {
    id: 'projectManagement',
    iconName: 'FolderKanban',
    technologies: [
      { id: 'jira', name: 'Jira' },
      { id: 'teams', name: 'microsoft Teams' },
    ],
  },
  // {
  //   id: 'projectManagement', // 🌟 Nouvelle catégorie pour ton profil entreprise
  //   iconName: 'FolderKanban', // Icône Lucide très adaptée pour la gestion de projet
  //   technologies: [
  //     { id: 'jira', name: 'Jira' },               // 👈 Ajouté ici
  //     { id: 'teams', name: 'Microsoft Teams' },   // 👈 Ajouté ici
  //   ],
  // },
];

// Function to get skills with translated content
export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  const currentLang = lang ?? defaultLanguage;

  return skillsList.map((skill) => {
    type SkillIdKey =
      keyof (typeof ui)[typeof defaultLanguage]['skillsContent'];
    const currentSkillId = skill.id as SkillIdKey;

    const skillContentSource = ui[currentLang]?.skillsContent?.[currentSkillId]
      ? ui[currentLang].skillsContent
      : ui[defaultLanguage].skillsContent;

    const skillTranslations = skillContentSource[currentSkillId];

    if (!skillTranslations) {
      // Fallback if translation for the skill ID is missing
      console.warn(
        `Translation missing for skill ID: ${skill.id} in language: ${lang}. Using default values.`
      );
      return {
        ...skill,
        title: skill.id, // Fallback title
        description: 'Description missing for this skill.', // Fallback description
      };
    }

    return {
      ...skill, // This includes id and iconName
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}
