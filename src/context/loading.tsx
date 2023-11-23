import React, {useContext} from "react";
export const LoadingContext = React.createContext({} as any);

export const useLoading = () => useContext(LoadingContext);