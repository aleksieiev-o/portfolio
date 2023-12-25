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

      <div className={'w-full rounded-full'}>
        <div
          className={'text-xs font-medium text-center p-1 leading-none rounded-full bg-primary'}
          style={{ width: `${skill.experience}%` }}>
        </div>
      </div>
    </div>
  );
};

export default Skill;
