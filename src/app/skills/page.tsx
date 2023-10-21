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
  const mainSkills = skillsList.sort((a, b) => a.position - b.position).filter((skill) => skill.isMain);
  const secondarySkills = skillsList.sort((a, b) => a.position - b.position).filter((skill) => !skill.isMain);

  return (
    <section className={'w-full h-full grid grid-cols-1 gap-4 content-start overflow-hidden'}>
      <PageTitle title={'My skills'}/>

      <ScrollContentWrapper>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12'}>
          <SkillsList skills={mainSkills} listTitle={'Main skills'}/>

          <SkillsList skills={secondarySkills} listTitle={'Secondary skills'}/>
        </div>
      </ScrollContentWrapper>
    </section>
  );
};

export default SkillsPage;
