import React from 'react';
import clsx from 'clsx';
import { useProjects, type Project } from '~/stores/Projects';

export const ProjectsMenu = () => {
  const projects = useProjects((state: { projects: Array<Project>; }) => state.projects);
  const active = useProjects((state: { active: string; }) => state.active);
  const update = useProjects(state => state.update);

  return (
    <div className="container flex flex-row sm:flex-col w-full sm:w-1/4 sm:m-5">
      {
        projects.map(project => (
          <div key={project.id}>
            <button onClick={() => update(project.id)}>
              <p
                className={clsx(
                  "p-2 text-center sm:text-start text-xs sm:text-sm",
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