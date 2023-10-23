import React, {FC, ReactElement} from 'react';
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Asterisk} from 'lucide-react';
import {Input} from '@/components/ui/input';
import {RawShape} from '@/components/Contacts/ContactsForm';
import {Textarea} from '@/components/ui/textarea';

interface Props {
  mode: 'input' | 'textarea';
  formModel: any; // TODO fix it
  name: keyof RawShape;
  label: string;
  placeholder: string;
  required: boolean;
}

const ContactsFormField: FC<Props> = (props): ReactElement => {
  const {mode, formModel, name, label, placeholder, required} = props;

  return (
    <FormField
      control={formModel.control}
      name={name as string}
      render={({field}) => (
        <FormItem>
          <FormLabel aria-required={required} className={'flex'}>
            <span className={'mr-0.5'}>{label}</span>

            <Asterisk className={'w-2.5 h-2.5 self-start'}/>
          </FormLabel>

          <FormControl aria-required={required}>
            {
              mode === 'input' ?
              <Input
                placeholder={placeholder}
                aria-required={required}
                {...field}/>
              :
              <Textarea
                placeholder={placeholder}
                aria-required={required}
                {...field}/>
            }
          </FormControl>

          <FormMessage/>
        </FormItem>
      )}/>
  );
};

export default ContactsFormField;
