import {FC, ReactElement} from 'react';
import {ISkill} from 'my-portfolio-types';
import {fetchAllSkills} from '@/services/skills.service';
import SkillsList from '@/components/Skills/SkillsList';
import PageTitle from '@/components/ui/custom-ui/PageTitle';
import ScrollContentWrapper from '@/components/ui/custom-ui/ScrollContentWrapper';

export const revalidate = 5;

const SkillsPage: FC = async (): Promise<ReactElement> => {
  const skills: Array<ISkill> = await fetchAllSkills();
  const skillsList = skills.filter((skill) => skill.visibility);
  const mainSkills = skillsList.filter((skill) => skill.isMain);
  const secondarySkills = skillsList.filter((skill) => !skill.isMain);

  return (
    <section className={'w-full h-full grid grid-cols-1 gap-4 content-start overflow-hidden pt-6'}>
      <PageTitle title={'My skills'}/>

      <ScrollContentWrapper>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
          <SkillsList skills={mainSkills} listTitle={'Main skills'}/>

          <SkillsList skills={secondarySkills} listTitle={'Secondary skills'}/>
        </div>
      </ScrollContentWrapper>
    </section>
  );
};

export default SkillsPage;
