'use client';

import React, {FC, ReactElement, useMemo} from 'react';
import {Button} from '@/components/ui/button';
import {Asterisk, Loader2, SendHorizontal} from 'lucide-react';
import {object, string, z, ZodRawShape} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
// @ts-ignore
import {ZodString} from 'zod/lib/types';
import {Form} from '@/components/ui/form';
import ContactsFormField from '@/components/Contacts/ContactsFormField';
import {useToast} from '@/components/ui/use-toast';
import {sendContactsForm} from '@/utils/sendContactsForm';
import {useLoading} from '@/hooks/useLoading';

export interface RawShape extends ZodRawShape {
  firstName: ZodString;
  lastName: ZodString;
  email: ZodString;
  subject: ZodString;
  message: ZodString;
}

const ContactsForm: FC = (): ReactElement => {
  const { toast } = useToast();
  const { isLoading, setIsLoading } = useLoading();

  const shape = useMemo<RawShape>(() => ({
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
    subject: string({ required_error: 'Field is required', invalid_type_error: 'Value must be a string' })
      .trim()
      .min(6, { message: 'Must be 6 or more characters long' })
      .max(254, { message: 'Must be 254 or fewer characters long' }),
    message: string({ required_error: 'Field is required', invalid_type_error: 'Value must be a string' })
      .trim()
      .min(10, { message: 'Must be 10 or more characters long' }),
  }), []);

  const formSchema = useMemo(() => {
    return object<RawShape>(shape);
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
      await sendContactsForm<z.infer<typeof formSchema>>(values);

      toast({
        title: 'Success',
        description: 'Your message has been sent.',
      });

      formModel.reset();
    } catch (err) {
      toast({
        title: 'Failure',
        description: 'Your message has not been sent. Something went wrong.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={'grid grid-cols-1 gap-4 md:gap-8 w-full pb-4'}>
      <h4 className={'font-bold text-xl'}>
        Send me a message
      </h4>

      <Form {...formModel}>
        <form onSubmit={formModel.handleSubmit(handleSubmitForm)} className={'grid grid-cols-1 gap-4 md:gap-8 w-full'}>
          <div className={'grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full'}>
            <ContactsFormField
              mode={'input'}
              formModel={formModel}
              name={'firstName'}
              label={'First name'}
              placeholder={'Enter your first name'}
              required={true}
              disabled={isLoading}/>

            <ContactsFormField
              mode={'input'}
              formModel={formModel}
              name={'lastName'}
              label={'Last name'}
              placeholder={'Enter your last name'}
              required={true}
              disabled={isLoading}/>
          </div>

          <div className={'grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full'}>
            <ContactsFormField
              mode={'input'}
              formModel={formModel}
              name={'subject'}
              label={'Subject'}
              placeholder={'Enter your subject'}
              required={true}
              disabled={isLoading}/>

            <ContactsFormField
              mode={'input'}
              formModel={formModel}
              name={'email'}
              label={'E-mail'}
              placeholder={'Enter your email'}
              required={true}
              disabled={isLoading}/>
          </div>

          <div className={'grid grid-cols-1 w-full'}>
            <ContactsFormField
              mode={'textarea'}
              formModel={formModel}
              name={'message'}
              label={'Message'}
              placeholder={'Enter your message'}
              required={true}
              disabled={isLoading}/>
          </div>

          <div className={'flex gap-2 items-center'}>
            <Asterisk className={'w-2.5 h-2.5 stroke-destructive self-start'}/>
            <span className={'text-sm'}>-</span>
            <span className={'text-sm'}>Required field</span>
          </div>

          <div className={'grid grid-cols-2 gap-4 md:gap-8 w-full'}>
            <Button type={'submit'} variant={'default'} title={'Send a message'} className={'shadow-md'} disabled={isLoading}>
              {
                isLoading ?
                  <>
                    <Loader2 className={'h-4 w-4 animate-spin'} />
                    <p className={'ml-4'}>Please wait</p>
                  </>
                  :
                  <>
                    <p className={'mr-4'}>Send</p>
                    <SendHorizontal className={'w-4 h-4'}/>
                  </>
              }
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactsForm;
