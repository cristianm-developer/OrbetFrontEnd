import { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

export const UserProvider = (({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadedUser = {
            id: 1,
            name: 'MDXAGENCY98',
            profileImg: 'imgs/ManPicture.png',
            money: 3547.02
        };

        setUser(loadedUser);

    }, []);
    
    
    return (<UserContext.Provider value={{...user}}>{children}</UserContext.Provider>);
})
