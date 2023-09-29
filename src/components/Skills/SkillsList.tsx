import React, {FC, ReactElement} from 'react';
import {ISkill} from 'my-portfolio-types';
import Skill from '@/components/Skills/Skill';

interface Props {
  listTitle: string;
  skills: Array<ISkill>;
}

const SkillsList: FC<Props> = (props): ReactElement => {
  const {skills, listTitle} = props;

  return (
    <div className={'grid grid-cols-1 gap-4 content-start'}>
      <h6 className={'text-xl font-bold w-full whitespace-nowrap text-ellipsis overflow-hidden'}>
        {listTitle}
      </h6>

      <div className={'grid grid-cols-1 gap-4'}>
        {
          skills.map((skill) => (
            <Skill key={skill.id} skill={skill}/>
          ))
        }
      </div>
    </div>
  );
};

export default SkillsList;
