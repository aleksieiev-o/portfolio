import React, {FC, ReactElement} from 'react';
import {ISkill} from 'my-portfolio-types';

interface Props {
  skill: ISkill;
}

const SkillProgress: FC<Props> = ({skill}): ReactElement => {
  return (
    <div className={'w-full mb-6'}>
      <h6 className={'text-lg mb-4 font-bold w-full whitespace-nowrap text-ellipsis overflow-hidden'}>
        {skill.title}
      </h6>

      <div className={'w-full bg-gray-200 rounded-full dark:bg-gray-700'}>
        <div
          className={'text-xs font-medium text-center p-1 leading-none rounded-full'}
          style={{ width: `${skill.experience}%`, backgroundColor: skill.color }}>
          {skill.experience} %
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;
