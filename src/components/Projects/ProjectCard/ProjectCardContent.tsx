import React, {FC, ReactElement} from 'react';
import {IProject} from 'my-portfolio-types';
import Image from 'next/image';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {Badge} from '@/components/ui/badge';
import {CardContent} from '@/components/ui/card';

interface Props {
  project: IProject;
}

const ProjectCardContent: FC<Props> = ({project}): ReactElement => {
  const {fileSrc, fileName, description, technologies} = project;

  return (
    <CardContent className={'relative mb-4'}>
      <Image
        src={fileSrc}
        alt={fileName}
        width={1400}
        height={788}/>

      <div className={'grid grid-cols-1 gap-4 px-4'}>
        <Accordion type="single" collapsible>
          <AccordionItem value={'description'}>
            <AccordionTrigger>
              Description
            </AccordionTrigger>

            <AccordionContent>
              {description}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value={'technologies'}>
            <AccordionTrigger>
              Technologies
            </AccordionTrigger>

            <AccordionContent>
              <div className={'lex flex-wrap'}>
                {technologies.map((technology, idx) => (
                  <Badge key={`tech_${idx}`} variant={'destructive'} title={technology} className={'mr-2 mb-2'}>
                    {technology}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </CardContent>
  );
};

export default ProjectCardContent;
