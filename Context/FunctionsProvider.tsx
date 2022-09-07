import React, { createContext, useContext } from "react";
import { DetailsContext } from "../Context/AppContextProvider";

export const FunctContext = createContext({});

let item: object;

const FunctionsProvider = ({ children, navigation }: any) => {
  const { setOptionsData, setDetailsData }: any = useContext(DetailsContext);

  // const SongOptionsBtn = (item: object) => {
  //   setOptionsData(item);
  //   // console.log(detailsData);
  //   navigation.navigate("Details");
  // };

  const DetailsPage = (item: object) => {
    setDetailsData(item);
    // console.log(detailsData);
    navigation.navigate("Details");
  };

  return (
    <FunctContext.Provider
      value={
        {
          // SongOptionsBtn: SongOptionsBtn(item),/
          // DetailsPage: DetailsPage(item),
        }
      }
    >
      {children}
    </FunctContext.Provider>
  );
};

export default FunctionsProvider;
