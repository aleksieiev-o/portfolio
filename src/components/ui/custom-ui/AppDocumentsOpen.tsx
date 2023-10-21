'use client';

import React, {FC, ReactElement, useState} from 'react';
import {DropdownMenu, DropdownMenuTrigger} from '@radix-ui/react-dropdown-menu';
import {Button} from '@/components/ui/button';
import {ChevronDown, ChevronUp, FileText} from 'lucide-react';
import {DropdownMenuContent, DropdownMenuItem} from '@/components/ui/dropdown-menu';
import {IDocument} from 'my-portfolio-types';

interface Props {
  documents: Array<IDocument>;
}

const AppDocumentsOpen: FC<Props> = (props): ReactElement => {
  const {documents} = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDownloadResume = (document: IDocument): void => {
    window.open(document.fileSrc, '_blank');
  };

  return (
    <DropdownMenu onOpenChange={handleDropdown}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'default'}
          className={'shadow-md'}
          title={'Download Resume'}>
          <p className={'mr-4'}>
            Open document
          </p>

          {isOpen ? <ChevronUp/> : <ChevronDown/>}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={'center'}>
        {
          documents.length ?
            documents.map((document) => (
              <DropdownMenuItem key={document.id} onClick={() => handleDownloadResume(document)}>
                <FileText className={'mr-4 h-4 w-4'}/>

                <span className={'mr-1'}>{document.title}</span>
              </DropdownMenuItem>
            ))
            :
            <DropdownMenuItem disabled={true}>
              Documents list is empty
            </DropdownMenuItem>
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AppDocumentsOpen;
