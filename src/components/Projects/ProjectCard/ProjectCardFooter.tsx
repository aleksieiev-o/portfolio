import React, {FC, ReactElement} from 'react';
import {Button} from '@/components/ui/button';
import {FolderGit2, Tv2} from 'lucide-react';
import {CardFooter} from '@/components/ui/card';
import {IProject} from 'my-portfolio-types';

interface Props {
  project: IProject;
}

const ProjectCardFooter: FC<Props> = ({project}): ReactElement => {
  const {demo, repository} = project;

  return (
    <CardFooter>
      <div className={'w-full flex justify-end'}>
        <Button
          onClick={() => window.open(repository, '_blank')}
          variant={'default'}
          size={'icon'}
          className={'shadow-md mr-4'}
          title={'Open repository'}>
          <FolderGit2 className={'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all'}/>
        </Button>

        <Button
          onClick={() => window.open(demo, '_blank')}
          variant={'default'}
          size={'icon'}
          className={'shadow-md'}
          title={'Open demo page'}>
          <Tv2 className={'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all'}/>
        </Button>
      </div>
    </CardFooter>
  );
};

export default ProjectCardFooter;
