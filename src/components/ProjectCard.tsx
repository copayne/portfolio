import React from 'react';
import type { Project, ComponentWithClassName } from '@/types';

interface ProjectCardProps extends ComponentWithClassName {
  project: Project;
  onClick?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  className = '',
}) => {
  const handleClick = () => {
    onClick?.(project);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={`project-card ${project.featured ? 'featured' : ''} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='button'
      aria-label={`View details for ${project.title}`}
    >
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          className='project-image'
        />
      )}
      <div className='project-content'>
        <h3 className='project-title'>{project.title}</h3>
        <p className='project-description'>{project.description}</p>
        <div className='project-technologies'>
          {project.technologies.map(tech => (
            <span key={tech} className='tech-tag'>
              {tech}
            </span>
          ))}
        </div>
        <div className='project-links'>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`View ${project.title} source code on GitHub`}
            >
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`View ${project.title} live demo`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
