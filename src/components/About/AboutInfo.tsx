import React, {FC, ReactElement} from 'react';
import {IPersonalInfo, ISocial} from 'my-portfolio-types';

interface Props {
  personalInfo: IPersonalInfo;
  socialsList: Array<ISocial>;
}

const AboutInfo: FC<Props> = (props): ReactElement => {
  const {personalInfo, socialsList} = props;
  const {firstName, lastName, email, biography, birthDate, town, country} = personalInfo;

  const getBirthDay = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const getAge = (date: Date): number => {
    const birthDate = date;
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  return (
    <div className={'grid grid-cols-1 content-start justify-items-center gap-8 w-full h-full'}>
      <div className={'grid grid-cols-1 content-start justify-items-start gap-4'}>
        <h6 className={'text-xl font-bold'}>Biography</h6>

        <div className={'w-full'}>
          <p className={''}>
            {biography}
          </p>
        </div>
      </div>

      <div className={'grid grid-cols-1 content-start justify-items-start gap-4 w-full'}>
        <h6 className={'text-xl font-bold'}>Personal data</h6>

        <div className={'grid xl:grid-cols-2 grid-cols-1 content-center justify-items-start gap-4 w-full pb-6'}>
          <ul className={'grid grid-cols-1 content-start justify-items-start md:gap-4 gap-2'}>
            <li className={'flex flex-nowrapflex flex-nowrap'}>
              <label className={'font-bold mr-4'}>Name: </label>
              <span className={'whitespace-nowrap text-ellipsis overflow-hidden'}>{`${firstName} ${lastName}`}</span>
            </li>

            <li className={'flex flex-nowrap'}>
              <label className={'font-bold mr-4'}>Birthday: </label>
              <span className={'whitespace-nowrap text-ellipsis overflow-hidden'}>{getBirthDay(new Date(birthDate))}</span>
            </li>

            <li className={'flex flex-nowrap'}>
              <label className={'font-bold mr-4'}>Age: </label>
              <span className={'whitespace-nowrap text-ellipsis overflow-hidden'}>{getAge(new Date(birthDate))}</span>
            </li>
          </ul>

          <ul className={'grid grid-cols-1 content-start justify-items-start md:gap-4 gap-2'}>
            <li className={'flex flex-nowrap'}>
              <label className={'font-bold mr-4'}>Town: </label>
              <span className={'whitespace-nowrap text-ellipsis overflow-hidden'}>{town}</span>
            </li>

            <li className={'flex flex-nowrap'}>
              <label className={'font-bold mr-4'}>Country: </label>
              <span className={'whitespace-nowrap text-ellipsis overflow-hidden'}>{country}</span>
            </li>

            <li className={'flex flex-nowrap'}>
              <label className={'font-bold mr-4'}>Email: </label>
              <span className={'whitespace-nowrap text-ellipsis overflow-hidden'}>{email}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
