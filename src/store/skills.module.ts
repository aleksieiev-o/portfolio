import { fetchData } from '@/store/fetchData';
import { AvailableApiEndpoints } from '@/utils/AvailableApiEndpoints.enum';

interface Skill {
  imageName: string;
  imageSrc: string;
  isVisible: boolean;
  mainColor: string;
  progress: string;
  title: string;
  id: string;
}

interface SkillsState {
  skills: Array<Skill>;
}

const skillsModule = {
  state: (): SkillsState => ({
    skills: [],
  }),
  getters: {
    getSkills: (state: SkillsState) => state.skills,
  },
  mutations: {
    setSkills(state: SkillsState, val: Array<Skill>) {
      state.skills = val;
    },
  },
  actions: {
    async loadSkills({ commit }: any) {
      commit('setGlobalLoading', true);
      const result = await fetchData(AvailableApiEndpoints.SKILLS);
      commit('setSkills', result);
      commit('setGlobalLoading', false);
    },
  },
};

export default skillsModule;
