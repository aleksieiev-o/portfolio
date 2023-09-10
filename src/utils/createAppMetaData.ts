import {Metadata} from 'next';

export const createAppMetaData = (metaData: Metadata): Metadata => {
  const {title, description} = metaData;

  if (description) {
    return {
      title: `${title} | Portfolio`,
      description,
      viewport: 'width=device-width, initial-scale=1',
      openGraph: {
        title: `${title} | Portfolio`,
        description,
      },
    };
  }
  
  return {
    title: `${title} | Portfolio`,
    robots: {
      index: false,
      follow: false,
    },
  };
};
