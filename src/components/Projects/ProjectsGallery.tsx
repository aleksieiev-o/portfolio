'use client';

import '@/assets/styles/react-masorny.css';
import React, {FC, ReactElement} from 'react';
import Masonry from 'react-masonry-css';
import {IProject} from 'my-portfolio-types';
import ProjectCard from '@/components/Projects/ProjectCard';

interface Props {
  projects: Array<IProject>;
}

const breakpointColumnsObj = {
  default: 4,
  1280: 3,
  1024: 2,
  640: 1
};

const ProjectsGallery: FC<Props> = (props): ReactElement => {
  const {projects} = props;

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={'my-masonry-grid'}
        columnClassName={'my-masonry-grid_column'}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </Masonry>
    </div>
  );
};

export default ProjectsGallery;
