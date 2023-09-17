import React, {FC, ReactElement} from 'react';

interface Props {
  title: string;
}

const PageTitle: FC<Props> = (props): ReactElement => {
  const {title} = props;

  return (
    <div className={'container mx-auto'}>
      <h4 className={'font-bold text-2xl'}>
        {title}
      </h4>
    </div>
  );
};

export default PageTitle;
