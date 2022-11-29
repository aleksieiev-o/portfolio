import { fetchData } from '@/store/fetchData';
import { AvailableApiEndpoints } from '@/utils/AvailableApiEndpoints.enum';

interface Project {
  demoURL: string;
  description?: string;
  id: string;
  imageName?: string;
  imageSrc?: string;
  isVisible: boolean;
  mainTechnology: string;
  releaseDate: Date| string;
  repositoryURL: string;
  technologies?: Array<string>;
  title: string;
}

interface ProjectState {
  projects: Array<Project>,
}

const projectsModule = {
  state: (): ProjectState => ({
    projects: [],
  }),
  getters: {
    getProjects: (state: ProjectState) => state.projects,
  },
  mutations: {
    setProjects(state: ProjectState, val: Array<Project>) {
      state.projects = val;
    },
  },
  actions: {
    async loadProjects({ commit }: any) {
      commit('setGlobalLoading', true);
      const result = await fetchData(AvailableApiEndpoints.PROJECTS);
      commit('setProjects', result);
      commit('setGlobalLoading', false);
    },
  },
};

export default projectsModule;
