import {FC, ReactElement} from 'react';
import {IProject} from 'my-portfolio-types';
import {fetchAllProjects} from '@/services/projects.service';

export const revalidate = 5;

const ProjectsPage: FC = async (): Promise<ReactElement> => {
  const projects: Array<IProject> = await fetchAllProjects();
  const projectsList = projects.filter((project) => project.visibility);

  return (
    <section className={'container mx-auto'}>
      ProjectsPage
    </section>
  );
};

export default ProjectsPage;
