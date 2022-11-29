import { fetchData } from '@/store/fetchData';
import { AvailableApiEndpoints } from '@/utils/AvailableApiEndpoints.enum';

interface File {
   fileSrc: string;
   fileName: string;
}

interface Contact {
  imageName: string;
  imageSrc: string;
  title: string;
  url: string;
  id: string;
}

interface UserInfoModuleState {
  mainImage: File;
  avatarImage: File;
  bio: File;
  contacts: Array<Contact>;
}

const userInfoModule = {
  state: (): UserInfoModuleState => ({
    mainImage: {
      fileSrc: '',
      fileName: '',
    },
    avatarImage: {
      fileSrc: '',
      fileName: '',
    },
    bio: {
      fileSrc: '',
      fileName: '',
    },
    contacts: [],
  }),
  getters: {
    getMainImage: (state: UserInfoModuleState) => state.mainImage,
    getAvatarImage: (state: UserInfoModuleState) => state.avatarImage,
    getBio: (state: UserInfoModuleState) => state.bio,
    getContacts: (state: UserInfoModuleState) => state.contacts,
  },
  mutations: {
    setMainImage(state: UserInfoModuleState, val: File) {
      state.mainImage = val;
    },
    setAvatarImage(state: UserInfoModuleState, val: File) {
      state.mainImage = val;
    },
    setBio(state: UserInfoModuleState, val: File) {
      state.bio = val;
    },
    setContacts(state: UserInfoModuleState, val: Array<Contact>) {
      state.contacts = val;
    },
  },
  actions: {
    async loadMainImage({ commit }: any) {
      const result = await fetchData(AvailableApiEndpoints.MAIN_IMAGE);
      commit('setMainImage', result);
    },
    async loadAvatarImage({ commit }: any) {
      const result = await fetchData(AvailableApiEndpoints.AVATAR_IMAGE);
      commit('setAvatarImage', result);
    },
    async loadBio({ commit }: any) {
      const result = await fetchData(AvailableApiEndpoints.BIO);
      commit('setBio', result);
    },
    async loadContacts({ commit }: any) {
      const result = await fetchData(AvailableApiEndpoints.INFO);
      commit('setContacts', result);
    },
  },
};

export default userInfoModule;
