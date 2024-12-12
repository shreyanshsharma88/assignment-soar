import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from "react";
import { IUserDetails } from "../utils";
import { DummyUserDetails } from "../utils/dummyData";

export const UserDetailsProvider : FC<PropsWithChildren> = ({children}) => {
    const [userDetails, setUserDetails] = useState<IUserDetails | null>(DummyUserDetails)
    const value = useMemo(() => {
        return {
            userDetails,
            setUserDetails
        }
    }, [userDetails])
    return <UserDetailsContext.Provider value={value}>{children}</UserDetailsContext.Provider>
}

export const useUserDetails = () => {
    const context = useContext(UserDetailsContext);
    if (context === undefined) {
        throw new Error("useUserDetails must be used within a UserDetailsProvider");
    }
    return context;
}

const UserDetailsContext = createContext<IUserDetailsContext | undefined>({
    userDetails: null,
    setUserDetails: () => null
});

interface IUserDetailsContext {
    userDetails: IUserDetails | null
    setUserDetails:React.Dispatch<React.SetStateAction<IUserDetails | null>>
}

