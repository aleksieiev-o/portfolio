import {FC, ReactElement} from 'react';
import {IProject} from 'my-portfolio-types';
import {fetchAllProjects} from '@/services/projects.service';
import ProjectsGallery from '@/components/Projects/ProjectsGallery';
import PageTitle from '@/components/ui/custom-ui/PageTitle';
import ScrollContentWrapper from '@/components/ui/custom-ui/ScrollContentWrapper';

export const revalidate = 5;

const ProjectsPage: FC = async (): Promise<ReactElement> => {
  const projects: Array<IProject> = await fetchAllProjects();
  const projectsList = projects.filter((project) => project.visibility);

  return (
    <section className={'w-full h-full grid grid-cols-1 gap-4 content-start overflow-hidden pt-6'}>
      <PageTitle title={'My projects'}/>

      <ScrollContentWrapper>
        <div className={'grid grid-cols-1'}>
          <ProjectsGallery projects={projectsList}/>
        </div>
      </ScrollContentWrapper>
    </section>
  );
};

export default ProjectsPage;
