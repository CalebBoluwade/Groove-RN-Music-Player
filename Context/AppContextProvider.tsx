import React, { useState, createContext } from "react";

export const DetailsContext = createContext({});

const Theme = {
  Darktheme: {
    theme: "dark",
    bg: "#fff",
    color: "#000",
  },
  lightTheme: {
    theme: "light",
    bg: "#000",
    color: "#fff",
  },
};

const AppContextProvider = ({ children }: any) => {
  const [detailsData, setDetailsData] = useState();
  // const [appTheme, setAppTheme] = useState({});

  return (
    <DetailsContext.Provider value={{ detailsData, setDetailsData }}>
      {children}
    </DetailsContext.Provider>
  );
};

export default AppContextProvider;
