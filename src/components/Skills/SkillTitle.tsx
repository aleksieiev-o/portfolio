import React, {FC, ReactElement, useState} from 'react';
import {ISkill} from 'my-portfolio-types';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

interface Props {
  skill: ISkill;
}

const SkillTitle: FC<Props> = ({skill}): ReactElement => {
  const {title, experience} = skill;
  const [focus, setFocus] = useState(false);

  return (
    <div className={'flex items-start no-wrap w-full'}>
      <span className={'text-lg font-bold mr-6'}>
        <CountUp
          start={focus ? 0 : Number(experience)}
          end={Number(experience)}
          duration={3}
          redraw={true}>
          {({ countUpRef }) => (
            <VisibilitySensor
              onChange={(isVisible: boolean) => {
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

      <h6 className={'text-lg mb-4 font-bold whitespace-nowrap text-ellipsis overflow-hidden'}>
        {title}
      </h6>
    </div>
  );
};

export default SkillTitle;
