import React, {
  useState,
} from 'react';
import Image from 'next/image';
import { type Icon } from '../common/IconRow';
import { useProjects, type Project } from '~/stores/Projects';
import HighlightSkills from './HighlightSkills';

export const ProjectDetail = () => {
  const projects = useProjects((state: { projects: Array<Project>; }) => state.projects);
  const active = useProjects((state: { active: string; }) => state.active);
  const project = projects.find(p => p.id === active);
  const [image, setImage] = useState(project?.pictures[0]);

  return (
    <div className="container flex flex-col w-5/6 p-5">
      <div className="container flex">
        {
          image && (
            <div className="w-[600px] h-[315px]">
              <Image
                key={image.alt}
                alt={image.alt}
                src={image.src}
              />
            </div>
          )
        }
        <div className="container flex flex-col w-1/5 items-center">
          {
            project?.pictures.map((picture: Icon) => picture.thumb && (
              <button
                key={picture.alt}
                onClick={() => setImage(picture)}
              >
                <Image
                  alt={picture.alt}
                  className="mb-2 ml-2"
                  width="100"
                  src={picture.thumb}
                />
              </button>
            ))
          }
        </div>
      </div>
      <div className="container flex mt-4 h-[100px]">
        <div className="w-3/4 mr-8">
          <p className="text-sm text-light-secondary dark:text-dark-secondary mb-1">Summary</p>
          <ul className="list-disc">
            {
              project?.summary.map(item => (
                <li
                  key={item}
                  className="text-[10px] text-light-primary dark:text-dark-primary"
                >
                  {item}
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