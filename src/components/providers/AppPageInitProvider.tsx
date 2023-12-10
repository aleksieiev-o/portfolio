import React, {createContext, Dispatch, FC, PropsWithChildren, ReactElement, SetStateAction, useState} from 'react';

interface IAppPageInitContext {
  skillsPageInit: boolean;
  setSkillsPageInit: Dispatch<SetStateAction<boolean>>;
}

export const AppStateContext = createContext<IAppPageInitContext>({
  skillsPageInit: false,
  setSkillsPageInit: (state) => state,
});

const AppPageInitProvider: FC<PropsWithChildren> = ({children}): ReactElement => {
  const [skillsPageInit, setSkillsPageInit] = useState<boolean>(false);

  const appPageInitContext: IAppPageInitContext = {
    skillsPageInit,
    setSkillsPageInit,
  };

  return (
    <AppStateContext.Provider value={appPageInitContext}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppPageInitProvider;
