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

const PICTURES: Array<Icon> = [
    {
        alt: 'Career Site',
        src: careerSite,
        thumb: careerSiteThumbnail,
    },
    {
        alt: 'Search View',
        src: searchView,
        thumb: searchViewThumbnail,
    },
    {
        alt: 'applicationView',
        src: applicationView,
        thumb: applicationViewThumbnail,
    },
];

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
        id: 'EXACTHIRE',
        label: 'ExactHire ATS',
        pictures: PICTURES,
        skills: SKILLS,
        summary: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Phasellus diam mi, consequat at interdum sed, varius sed lorem.',
            'Ut sollicitudin sollicitudin turpis, at sagittis enim maximus eget.',
            'Aenean tincidunt leo lectus, sed gravida tortor volutpat et. Curabitur auctor euismod ligula ut varius.',
        ],
    },
    {
        id: 'THAT_OVER_THERE',
        label: 'That Over There',
        pictures: [PICTURES[1]],
        skills: [SKILLS[2], SKILLS[0]],
        summary: [
            'Phasellus in ipsum fringilla justo interdum tincidunt.',
            'Cras non mi lectus. Sed mi augue, luctus ut lobortis at, ullamcorper ac nibh.',
            'Ut a lorem malesuada, dignissim odio quis, posuere magna.',
        ],
    },
    {
        id: 'PROJECT_3',
        label: 'Project Three',
        pictures: [PICTURES[2], PICTURES[0]],
        skills: [SKILLS[1]],
        summary: [
            'Curabitur dapibus tortor sit amet ipsum tempor sollicitudin.',
            'Pellentesque viverra egestas sodales. Praesent laoreet luctus tellus, id varius nunc dictum vel.',
            'Sed nec lorem fringilla, elementum mauris eget, lobortis nulla. Quisque laoreet lobortis est, eget.',
        ],
    },
];

export interface Project {
    id: string
    label: string
    pictures: Array<Icon>
    skills: Array<Icon>
    summary: Array<string>
}

export interface Projects {
    active: string,
    projects: Array<Project>
    update: (newValue: string) => void
}

export const useProjects = create<Projects>()(( set ) => ({
    // initial state
    active: 'EXACTHIRE',
    projects: PROJECTS,
    update: (newValue: string) => set({ active: newValue }),
}));