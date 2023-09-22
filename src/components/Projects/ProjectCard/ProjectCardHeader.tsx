import React, {FC, ReactElement} from 'react';
import {CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {IProject} from 'my-portfolio-types';

interface Props {
  project: IProject;
}

const ProjectCardHeader: FC<Props> = ({project}): ReactElement => {
  const {demo, title, mainTechnology} = project;

  return (
    <CardHeader>
      <CardTitle className={'text-xl font-bold whitespace-nowrap text-ellipsis overflow-hidden'} title={title}>
        <a
          href={demo}
          target={'_blank'}>
          {title}
        </a>
      </CardTitle>

      <CardDescription className={'whitespace-nowrap text-ellipsis overflow-hidden'} title={mainTechnology}>
        {mainTechnology}
      </CardDescription>
    </CardHeader>
  );
};

export default ProjectCardHeader;
