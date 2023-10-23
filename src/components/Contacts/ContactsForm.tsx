'use client';

import React, {FC, ReactElement, useMemo} from 'react';
import {Button} from '@/components/ui/button';
import {SendHorizontal} from 'lucide-react';
import {object, string, z, ZodRawShape} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {ZodString} from 'zod/lib/types';
import {Form} from '@/components/ui/form';
import ContactsFormField from '@/components/Contacts/ContactsFormField';

export interface RawShape extends ZodRawShape {
  firstName: ZodString;
  lastName: ZodString;
  email: ZodString;
  subject: ZodString;
  message: ZodString;
}

const ContactsForm: FC = (): ReactElement => {
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
      .min(2, { message: 'Must be 2 or more characters long' }),
    subject: string({ required_error: 'Field is required', invalid_type_error: 'Value must be a string' })
      .trim()
      .min(2, { message: 'Must be 2 or more characters long' })
      .max(200, { message: 'Must be 200 or fewer characters long' }),
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

  const handleSubmitForm = (values: z.infer<typeof formSchema>) => {
    // eslint-disable-next-line no-console
    console.log(111, values);
    formModel.reset();
  };

  return (
    <div className={'grid grid-cols-1 gap-4 md:gap-8 w-full'}>
      <h4 className={'font-bold text-xl'}>
        Send me a message
      </h4>

      <Form {...formModel}>
        <form onSubmit={formModel.handleSubmit(handleSubmitForm)} className={'grid grid-cols-1 gap-4 md:gap-8 w-full'}>
          <div className={'grid grid-cols-2 gap-4 md:gap-8 w-full'}>
            <ContactsFormField
              mode={'input'}
              formModel={formModel}
              name={'firstName'}
              label={'First name'}
              placeholder={'Enter your first name'}
              required={true}/>

            <ContactsFormField
              mode={'input'}
              formModel={formModel}
              name={'lastName'}
              label={'Last name'}
              placeholder={'Enter your last name'}
              required={true}/>
          </div>

          <div className={'grid grid-cols-2 gap-4 md:gap-8 w-full'}>
            <ContactsFormField
              mode={'input'}
              formModel={formModel}
              name={'subject'}
              label={'Subject'}
              placeholder={'Enter your subject'}
              required={true}/>

            <ContactsFormField
              mode={'input'}
              formModel={formModel}
              name={'email'}
              label={'E-mail'}
              placeholder={'Enter your e-mail'}
              required={true}/>
          </div>

          <div className={'grid grid-cols-1 w-full'}>
            <ContactsFormField
              mode={'textarea'}
              formModel={formModel}
              name={'message'}
              label={'Message'}
              placeholder={'Enter your message'}
              required={true}/>
          </div>

          <div className={'grid grid-cols-2 gap-4 md:gap-8 w-full'}>
            <Button type={'submit'} variant={'default'} disabled={true}>
              <p className={'mr-4'}>Send message</p>

              <SendHorizontal className={'w-4 h-4'}/>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactsForm;
