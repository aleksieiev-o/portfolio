import React, {FC, ReactElement} from 'react';
import {IProject} from 'my-portfolio-types';
import {Card} from '@/components/ui/card';
import ProjectCardHeader from '@/components/Projects/ProjectCard/ProjectCardHeader';
import ProjectCardContent from '@/components/Projects/ProjectCard/ProjectCardContent';
import ProjectCardFooter from '@/components/Projects/ProjectCard/ProjectCardFooter';

interface Props {
  project: IProject;
}

const ProjectCard: FC<Props> = ({project}): ReactElement => {
  return (
    <Card className={'bg-transparent'}>
      <ProjectCardHeader project={project}/>

      <ProjectCardContent project={project}/>

      <ProjectCardFooter project={project}/>
    </Card>
  );
};

export default ProjectCard;
