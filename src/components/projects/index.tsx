import ContentContainer from '~/components/common/ContentContainer';

const PROJECTS = ['ExactHire', 'That Over There', 'Project 3'];

const Projects = () => (
  <ContentContainer id="projects">
    <div className="mx-auto">
      <div className="container flex flex-col items-center">
      <p className="text-center text-sm sm:text-5xl text-light-primary dark:text-dark-primary font-thin mb-6">
        Projects
      </p>
      <div className="container flex flex-col sm:flex-row sm:flex-nowrap mt-5">
        {
          PROJECTS.map(project => (
            <div
              key={project}
              className="w-64 h-64 m-4 bg-light-primary dark:bg-dark-tertiary shadow-hard shadow-light-tertiary dark:shadow-dark-secondary"
            >
              <p className="text-light-background dark:text-dark-background">
                {project}
              </p>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  </ContentContainer>
);

export default Projects;