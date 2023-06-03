import React from 'react';
import clsx from 'clsx';
import { useProjects, type Project } from '~/stores/Projects';

export const ProjectsMenu = () => {
  const projects = useProjects((state: { projects: Array<Project>; }) => state.projects);
  const active = useProjects((state: { active: string; }) => state.active);
  const update = useProjects(state => state.update);

  return (
    <div className="container flex flex-col w-1/6 m-5">
      {
        projects.map(project => (
          <div key={project.id}>
            <button onClick={() => update(project.id)}>
              <p
                className={clsx(
                  "p-2",
                  project.id === active && "underline font-semibold",
                )}
              >
                {project.label}
              </p>
            </button>
          </div>
        ))
      }
    </div>
  )
}