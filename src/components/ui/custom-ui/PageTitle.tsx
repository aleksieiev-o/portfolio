import React, {FC, ReactElement} from 'react';

interface Props {
  title: string;
}

const PageTitle: FC<Props> = (props): ReactElement => {
  const {title} = props;

  return (
    <div className={'container flex items-center md:justify-center justify-start mx-auto my-6 md:my-8 px-4 md:px-8'}>
      <h4 className={'font-bold text-2xl'}>
        {title}
      </h4>
    </div>
  );
};

export default PageTitle;
