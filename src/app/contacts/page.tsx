import {FC, ReactElement} from 'react';
import {IDocument, IPersonalInfo, ISocial} from 'my-portfolio-types';
import {fetchPersonalInfo} from '@/services/personalInfo.service';
import {fetchSocialsList} from '@/services/socialsList.service';
import PageTitle from '@/components/ui/custom-ui/PageTitle';
import ScrollContentWrapper from '@/components/ui/custom-ui/ScrollContentWrapper';
import ContactsInfo from '@/components/Contacts/ContactsInfo';
import ContactsForm from '@/components/Contacts/ContactsForm';
import {fetchAllDocuments} from '@/services/documents.service';

export const revalidate = 5;

const ContactsPage: FC = async (): Promise<ReactElement> => {
  const personalInfo: IPersonalInfo = await fetchPersonalInfo();
  const documents: Array<IDocument> = await fetchAllDocuments();
  const socials: Array<ISocial> = await fetchSocialsList();
  const socialsList = socials
    .sort((a, b) => parseInt(a.position, 10) - parseInt(b.position, 10))
    .filter((social) => social.visibility);

  return (
    <section className={'w-full h-full grid grid-cols-1 gap-4 content-start overflow-hidden'}>
      <PageTitle title={'Contacts'}/>

      <ScrollContentWrapper>
        <div className={'grid grid-cols-1 content-center justify-items-center gap-6 md:gap-12'}>
          <div className={'grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-6 md:gap-12 w-full'}>
            <ContactsInfo personalInfo={personalInfo} socials={socialsList} documents={documents}/>

            <ContactsForm/>
          </div>

          {/*<ContactsMap personalInfo={personalInfo}/>*/}
        </div>
      </ScrollContentWrapper>
    </section>
  );
};

export default ContactsPage;
