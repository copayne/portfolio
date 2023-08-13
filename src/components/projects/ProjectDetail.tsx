import React from 'react';
import Image from 'next/image';
import { useProjects, type Project } from '~/stores/Projects';
import HighlightSkills from './HighlightSkills';

export const ProjectDetail = () => {
  const projects = useProjects((state: { projects: Array<Project>; }) => state.projects);
  const active = useProjects((state: { active: string; }) => state.active);
  const project = projects.find(p => p.id === active);

  return (
    <div className="container flex flex-col w-3/4 p-5">
      <div className="container flex">
        {
          project?.picture && (
            <div className="w-[685px] h-[370px]">
              <Image
                key={project.picture.alt}
                alt={project.picture.alt}
                src={project.picture.src}
              />
            </div>
          )
        }
      </div>
      <div className="container flex mt-4 h-[100px]">
        <div className="w-3/4 mr-8">
          <p className="text-sm text-light-secondary dark:text-dark-secondary mb-1">Summary</p>
          <ul className="list-disc">
            {
              project?.summary.map(item => (
                <li
                  key={item.title}
                  className="text-[10px] text-light-primary dark:text-dark-primary"
                >
                  <span className="font-bold">{item.title}</span>: {item.text}
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <p className="text-sm text-light-secondary dark:text-dark-secondary mb-2">Highlight Skills</p>
          <HighlightSkills skills={project.skills} />
        </div>
      </div>
    </div>
  )
}