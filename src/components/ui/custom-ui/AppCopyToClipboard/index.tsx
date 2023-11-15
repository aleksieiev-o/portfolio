import React, {FC, ReactElement} from 'react';
import {Copy} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useCopyToClipboard} from '@/components/ui/custom-ui/AppCopyToClipboard/useCopyToClipboard';
import {useToast} from '@/components/ui/use-toast';

interface Props {
  copiedValue: string;
  toastSuccessMessage: string;
  toastErrorMessage: string;
  className: string;
}

const AppCopyToClipboardButton: FC<Props> = (props): ReactElement => {
  const {copiedValue, toastSuccessMessage, toastErrorMessage, className} = props;
  const { toast } = useToast();
  const [copiedText, copyValue] = useCopyToClipboard();

  const handleCopyValue = async () => {
    const result = await copyValue(copiedValue || '');

    toast({
      variant: result ? 'default' : 'destructive',
      title: result ? toastSuccessMessage : toastErrorMessage,
    });
  };

  return (
    <Button
      onClick={handleCopyValue}
      variant={'ghost'}
      size={'icon'}
      title={'Copy to clipboard'}
      className={`h-[30px] w-[30px] ${className}`}>
      <Copy className={'h-[1rem] w-[1rem]'}/>
    </Button>
  );
};

export default AppCopyToClipboardButton;
