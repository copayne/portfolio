/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import ContentContainer from '~/components/common/ContentContainer';
import FadeInContent  from '~/components/common/FadeInContent';
import IconRow from '~/components/common/IconRow';
import { getHighlightedText } from '~/helpers/utils';
import reactLogo from '../../../public/react-logo.png';
import gitLogo from '../../../public/git-logo.svg';
import htmlLogo from '../../../public/html-logo.png';
import reduxLogo from '../../../public/redux-logo.png';
import sqlLogo from '../../../public/sql-logo.png';
import typescriptLogo from '../../../public/typescript-logo.svg';

const ABOUT_CONTENT = "Experienced software developer collaborating approach to transform ideas into captivating and user-friendly websites. Let's create digital experiences that leave a lasting impression.";

const About = () => (
  <ContentContainer id="aboutContainer">
    <div className="container flex flex-col sm:min-h-[85vh]">
      <div className="container flex">
        <div id="about" className="h-[70vh] w-[2px]">
          <div className="h-full w-[2px] bg-light-primary dark:bg-dark-primary hidden sm:block" />
        </div>
        <div className="mt-0 ml-0 sm:mt-[3%] sm:ml-[5%]">
          <div className="container flex flex-col items-center sm:items-start">
          <p className="text-3xl sm:text-4xl text-light-primary dark:text-dark-primary font-thin mb-5">
            About
          </p>
            <div className="text-md sm:text-xl w-11/12 sm:w-1/2 text-">
              { getHighlightedText(ABOUT_CONTENT, ['collaborating', 'captivating', 'lasting', 'impression']) }
            </div>
          </div>
          <br />
          <div className="container flex flex-col items-center sm:items-start mt-8 sm:mt-0">
            <p  className="text-3xl sm:text-4xl text-light-primary dark:text-dark-primary font-thin mb-5">
              Skills
            </p>
            <FadeInContent>
              <IconRow icons={SKILLS} />
            </FadeInContent>
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] hidden sm:block">
        <div className="h-[2px] w-1/2 bg-light-primary dark:bg-dark-primary" />
      </div>
      <div className="w-1/2 h-[20vh] hidden sm:flex justify-end">
        <div className="w-[2px] bg-light-primary dark:bg-dark-primary " />
      </div>
    </div>
  </ContentContainer>
);

export default About;

const SKILLS = [
  {
    alt: 'html5/css3/js logo',
    src: htmlLogo,
    label: 'html5/css3/js'
  },
  {
    alt: 'react logo',
    src: reactLogo,
    label: 'react',
  },
  {
    alt: 'redux logo',
    src: reduxLogo,
    label: 'redux',
  },
  {
    alt: 'typescript logo',
    src: typescriptLogo,
    label: 'typescript',
  },
  {
    alt: 'git logo',
    src: gitLogo,
    label: 'git',
  },
  {
    alt: 'sql logo',
    src: sqlLogo,
    label: 'sql',
  },
];