import {FC, ReactElement} from 'react';
import {ISkill} from 'my-portfolio-types';
import {fetchAllSkills} from '@/services/skills.service';

export const revalidate = 5;

const SkillsPage: FC = async (): Promise<ReactElement> => {
  const skills: Array<ISkill> = await fetchAllSkills();
  const skillsList = skills.filter((skill) => skill.visibility);
  const mainSkills = skillsList.filter((skill) => skill.isMain);
  const secondarySkills = skillsList.filter((skill) => !skill.isMain);

  return (
    <section className={'container mx-auto'}>
      SkillsPage
    </section>
  );
};

export default SkillsPage;
