import { createContext, useState } from "react";

export const GeneralContext = createContext();

export function GeneralContextProvider({ children }) {
  const [project, setProject] = useState({
    id: false,
    mainImg: false,
    photo1: false,
    photo2: false,
    projectName: "",
    aboutProject: "",
    aboutFullInfo: "",
    technologiesUsed: [],
  });
  return (
    <GeneralContext.Provider value={{ project, setProject }}>
      {children}
    </GeneralContext.Provider>
  );
}
