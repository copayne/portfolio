import { create } from 'zustand';
import { type Icon } from '../components/common/IconRow';
import careerSiteThumbnail from '../../public/career-site-thumb.png';
import careerSite from '../../public/career-site.png';
import searchViewThumbnail from '../../public/search-view-thumb.png';
import searchView from '../../public/search-view.png';
import applicationView from '../../public/application-view.png';
import applicationViewThumbnail from '../../public/application-view-thumb.png';
import reactLogo from '../../public/react-logo.png';
import reduxLogo from '../../public/redux-logo.png';
import sqlLogo from '../../public/sql-logo.png';

const CAREER_SITE_PIC = {
  alt: 'Career Site',
  src: careerSite,
  thumb: careerSiteThumbnail,
};
const ATS_UI_PIC = {
  alt: 'Search View',
  src: searchView,
  thumb: searchViewThumbnail,
};
const FORM_BUILDER_PIC = {
  alt: 'applicationView',
  src: applicationView,
  thumb: applicationViewThumbnail,
};

const SKILLS: Array<Icon> = [
    {
      alt: 'react logo',
      src: reactLogo,
    },
    {
      alt: 'redux logo',
      src: reduxLogo,
    },
    {
      alt: 'sql logo',
      src: sqlLogo,
    },
  ];

const PROJECTS: Array<Project> = [
  {
    id: 'EXACTHIRE_ATS',
    label: 'ExactHire ATS 2.0',
    picture: ATS_UI_PIC,
    skills: SKILLS,
    summary: [
      {
          title: 'Front-End Overhaul',
          text: 'lead implementation of new UI and maintainable code restructure.',
      },
      {
          title: 'Collaborative Innovation',
          text: 'worked closely with designer and executives to shape a visually appealing and user-friendly interface.',
      },
      {
          title: 'Elevated Performance and Usability',
          text: 'snappy and intuitive diesgn led to use satisfacation and productivity gains.',
      }
    ],
  },
  {
    id: 'EXACTHIRE_CAREER_SITE',
    label: 'ExactHire Career Site',
    picture: CAREER_SITE_PIC,
    skills: SKILLS,
    summary: [
      {
          title: 'Frictionless Features',
          text: 'applicants can apply to one or many jobs, communicate with hiring teams and complete audio interviews seamlessly.',
      },
      {
          title: 'Intuitive Building',
          text: 'created a WYSIWIG editor with live preview for maximum customization.',
      },
      {
          title: 'Any Device, Anywhere',
          text: 'mobile responsive for most flexible experience.',
      },
      {
          title: 'Effective Results',
          text: '400,000+ applications received for over 200 clients.',
      }
    ],
  },
  {
    id: 'EXACTHIRE_FORM_BUILDER',
    label: 'ExactHire Form Builder',
    picture: FORM_BUILDER_PIC,
    skills: SKILLS,
    summary: [
      {
          title: 'Versatile Builder',
          text: 'built using konva and material-ui, form builder provides a performant and intuitive experience.',
      },
      {
          title: 'Seamless Mobile',
          text: 'complete forms seamlessly between desktop and mobile.',
      },
      {
          title: 'Dynamic Workflows',
          text: 'allow flexibility of multi-stage workflows applied to forms.',
      },
    ],
  },
];

export interface Summary {
  title: string,
  text: string,
}

export interface Project {
  id: string
  label: string
  picture: Icon
  skills: Array<Icon>
  summary: Array<Summary>
}

export interface Projects {
  active: string,
  projects: Array<Project>
  update: (newValue: string) => void
}

export const useProjects = create<Projects>()(( set ) => ({
  // initial state
  active: 'EXACTHIRE_ATS',
  projects: PROJECTS,
  update: (newValue: string) => set({ active: newValue }),
}));
