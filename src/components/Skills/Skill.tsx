'use client';

import React, {FC, ReactElement} from 'react';
import {ISkill} from 'my-portfolio-types';
import SkillTitle from '@/components/Skills/SkillTitle';

interface Props {
  skill: ISkill;
}

const Skill: FC<Props> = ({skill}): ReactElement => {
  return (
    <div className={'w-full mb-6'}>
      <SkillTitle skill={skill}/>

      <div className={'w-full bg-gray-200 rounded-full dark:bg-gray-700'}>
        <div
          className={'text-xs font-medium text-center p-1 leading-none rounded-full'}
          style={{ width: `${skill.experience}%`, backgroundColor: skill.color }}>
        </div>
      </div>
    </div>
  );
};

export default Skill;
