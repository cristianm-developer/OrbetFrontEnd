import { createContext, useEffect, useState } from "react";


export const ProjectContext = createContext();

export const ProjectProvider = (({children}) => {
    const [project, setProject] = useState(null);

    useEffect(() => {
        const activeProject = {
            id:1,
            name: 'COMET RANK',
            badgeImg: 'imgs/BadgeImg.png',
            glowColor: 'white',
            actualAmount: 10876.90,
            objetiveAmount: 50000.00,
            starPassProgress: 63
        };

        setProject(activeProject);
    }, []);

    return (<ProjectContext.Provider value={{...project}}>{children}</ProjectContext.Provider>);

})