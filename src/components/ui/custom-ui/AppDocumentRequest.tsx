'use client';

import React, {FC, ReactElement, useEffect, useMemo, useState} from 'react';
import {DropdownMenu, DropdownMenuTrigger} from '@radix-ui/react-dropdown-menu';
import {ArrowDownFromLine, Asterisk, ChevronDown, ChevronUp, Loader2, SendHorizontal} from 'lucide-react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import {DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';
import {IDocument} from 'my-portfolio-types';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {useToast} from '@/components/ui/use-toast';
import {useLoading} from '@/hooks/useLoading';
import {object, string, z} from 'zod';
// @ts-ignore
import {ZodString} from 'zod/lib/types';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {sendContactsForm} from '@/utils/sendContactsForm';
import {Form, FormLabel} from '@/components/ui/form';
import AppFormField from '@/components/ui/custom-ui/AppFormField';
import {IUserRequestShape} from '@/types/UserRequestShape.interface';

interface Props {
  documents: Array<IDocument>;
}

type Checked = DropdownMenuCheckboxItemProps['checked'];

interface IModDocument extends IDocument {
  selected: Checked;
}

const AppDocumentRequest: FC<Props> = (props): ReactElement => {
  const {documents} = props;
  const { toast } = useToast();
  const { isLoading, setIsLoading } = useLoading();
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [documentsList, setDocumentsList] = useState<Array<IModDocument>>([]);

  useEffect(() => {
    const result: Array<IModDocument> = documents.map((item: IDocument): IModDocument => ({...item, selected: true}));
    setDocumentsList(result);
  }, [documents]);

  const handleChangeSelectedStatus = (document: IModDocument) => {
    const result: Array<IModDocument> = documentsList.map((item) => {
      if (item.id === document.id) {
        item.selected = !item.selected;
      }
      return item;
    });

    setDocumentsList(result);
  };

  const handleResetSelectedStatus = () => {
    const result: Array<IModDocument> = documentsList.map((item) => {
      item.selected = false;
      return item;
    });

    setDocumentsList(result);
  };

  const shape = useMemo<IUserRequestShape>(() => ({
    firstName: string({ required_error: 'Field is required', invalid_type_error: 'Value must be a string' })
      .trim()
      .min(2, { message: 'Must be 2 or more characters long' })
      .max(20, { message: 'Must be 20 or fewer characters long' }),
    lastName: string({ required_error: 'Field is required', invalid_type_error: 'Value must be a string' })
      .trim()
      .min(2, { message: 'Must be 2 or more characters long' })
      .max(20, { message: 'Must be 20 or fewer characters long' }),
    email: string({ required_error: 'Field is required', invalid_type_error: 'Value must be a string' })
      .trim()
      .email({ message: 'Invalid email address' })
      .min(6, { message: 'Must be 6 or more characters long' })
      .max(254, { message: 'Must be 254 or fewer characters long' }),
    subject: string().trim(),
    message: string().trim(),
  }), []);

  const formSchema = useMemo(() => {
    return object<IUserRequestShape>(shape);
  }, [shape]);

  const formModel = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const handleSubmitForm = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const documentTitles = documentsList
        .filter((item) => item.selected === true)
        .map((item) => item.title)
        .join(', ');
      const subject = 'Portfolio. Documents request';
      const message = `List of requested documents: ${documentTitles}.`;

      await sendContactsForm<z.infer<typeof formSchema>>({
        ...values,
        subject,
        message,
      });

      toast({
        title: 'Success',
        description: 'Your request has been sent.',
      });

      formModel.reset();
      setIsOpenDialog(false);
    } catch (err) {
      toast({
        title: 'Failure',
        description: 'Your request has not been sent. Something went wrong.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
      handleResetSelectedStatus();
    }
  };

  const handleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <>
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogTrigger asChild>
          <Button
            variant={'default'}
            className={'shadow-md'}
            title={'Request the documents from the list'}>
            <p className={'mr-4'}>
              Request the documents
            </p>

            <ArrowDownFromLine className={'w-4 h-4'}/>
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md gap-8">
          <DialogHeader>
            <DialogTitle className={'text-xl'}>Request the documents</DialogTitle>

            <DialogDescription className={'text-md'}>
              Input your first and last name, email and select the documents you are interested in the drop-down menu. Then click please the Submit button.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center space-x-2">
            <Form {...formModel}>
              <form
                onSubmit={formModel.handleSubmit(handleSubmitForm)}
                id={'documents-form'}
                className={'grid grid-cols-1 gap-4 md:gap-8 w-full'}>
                <AppFormField
                  mode={'input'}
                  formModel={formModel}
                  name={'firstName'}
                  label={'First name'}
                  placeholder={'Enter your first name'}
                  required={true}
                  disabled={isLoading}/>

                <AppFormField
                  mode={'input'}
                  formModel={formModel}
                  name={'lastName'}
                  label={'Last name'}
                  placeholder={'Enter your last name'}
                  required={true}
                  disabled={isLoading}/>

                <AppFormField
                  mode={'input'}
                  formModel={formModel}
                  name={'email'}
                  label={'E-mail'}
                  placeholder={'Enter your email'}
                  required={true}
                  disabled={isLoading}/>

                <DropdownMenu onOpenChange={handleDropdown}>
                  <div className={'w-full flex flex-col gap-3'}>
                    <FormLabel className={'flex'}>
                      <span className={'mr-0.5'}>
                        Documents list
                      </span>

                      {/*<Asterisk className={'w-2.5 h-2.5 stroke-destructive self-start'}/>*/}
                    </FormLabel>

                    <DropdownMenuTrigger asChild>
                      <Button
                        variant={'default'}
                        className={'shadow-md flex justify-between'}
                        title={'Choose the documents from the list'}
                        disabled={isLoading}>
                        <p className={'mr-4'}>
                          Choose the documents
                        </p>

                        {isOpenDropdown ? <ChevronUp/> : <ChevronDown/>}
                      </Button>
                    </DropdownMenuTrigger>
                  </div>

                  <DropdownMenuContent align={'center'}>
                    {
                      documentsList.length ?
                        documentsList.map((document) => (
                          <DropdownMenuCheckboxItem
                            key={document.id}
                            checked={document.selected}
                            onCheckedChange={() => handleChangeSelectedStatus(document)}>
                            {document.title}
                          </DropdownMenuCheckboxItem>
                        ))
                        :
                        <DropdownMenuItem disabled={true}>
                          Documents list is empty
                        </DropdownMenuItem>
                    }
                  </DropdownMenuContent>
                </DropdownMenu>
              </form>
            </Form>
          </div>

          <DialogFooter className={'w-full justify-between gap-4'}>
            <DialogClose asChild>
              <Button variant={'ghost'} title={'Close'}>
                Close
              </Button>
            </DialogClose>

            <Button type={'submit'} form={'documents-form'} variant={'default'} title={'Submit'} disabled={isLoading}>
              {
                isLoading ?
                  <>
                    <Loader2 className={'h-4 w-4 animate-spin'}/>
                    <p className={'ml-4'}>Please wait</p>
                  </>
                  :
                  <>
                    <p className={'mr-4'}>Send</p>
                    <SendHorizontal className={'w-4 h-4'}/>
                  </>
              }
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AppDocumentRequest;
