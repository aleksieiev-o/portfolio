'use client';

import React, {FC, ReactElement, useState} from 'react';
import {ISkill} from 'my-portfolio-types';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

interface Props {
  skill: ISkill;
}

const SkillProgress: FC<Props> = ({skill}): ReactElement => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={'w-full mb-6'}>
      <h6 className={'text-lg mb-4 font-bold w-full whitespace-nowrap text-ellipsis overflow-hidden'}>
        {skill.title}
      </h6>

      <div className={'w-full bg-gray-200 rounded-full dark:bg-gray-700'}>
        <div
          className={'text-xs font-medium text-center p-1 leading-none rounded-full'}
          style={{ width: `${skill.experience}%`, backgroundColor: skill.color }}>
          <span>
            <CountUp
              start={focus ? 0 : 0}
              end={Number(skill.experience)}
              duration={1}
              redraw={true}>
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}>

                  <span ref={countUpRef}/>
                </VisibilitySensor>
              )}
            </CountUp>
            %
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;
