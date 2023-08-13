import React from 'react';
import ContentContainer from '~/components/common/ContentContainer';
import { ProjectDetail } from './ProjectDetail';
import { ProjectsMenu } from './ProjectsMenu';

const Projects = () => (
  <ContentContainer id="projects">
    <div className="mx-auto">
      <div className="flex">
        <div className="w-1/2 h-[2px] rotate-180">
          <div className="h-[2px] w-full bg-light-primary dark:bg-dark-primary" />
        </div>
        <div className="w-1/2 h-[2px]">
          <div className="h-[2px] w-full bg-light-primary dark:bg-dark-primary" />
        </div>
      </div>
      <div className="container flex h-full">
        <div className="w-[2px]">
          <div className="w-[2px] h-full bg-light-primary dark:bg-dark-primary" />
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="text-center text-sm sm:text-4xl text-light-primary dark:text-dark-primary font-thin mb-6 mt-4">
            Projects
          </p>
          <div className="container flex w-full">
            <ProjectsMenu/>
            <ProjectDetail />
          </div>
        </div>
        <div className="w-[2px]">
          <div className="w-[2px] h-full bg-light-primary dark:bg-dark-primary" />
        </div>
      </div>
    </div>
    <div className="flex">
      <div className="w-1/2 h-[2px]">
        <div className="h-[2px] w-full bg-light-primary dark:bg-dark-primary" />
      </div>
      <div className="w-1/2 h-[2px] rotate-180">
        <div className="h-[2px] w-full bg-light-primary dark:bg-dark-primary" />
      </div>
    </div>
    <div className="h-full w-1/2 flex justify-end">
      <div className="w-[2px] h-[30vh]">
        <div className="w-2px h-full bg-light-primary dark:bg-dark-primary" />
      </div>
    </div>
  </ContentContainer>
);

export default Projects;