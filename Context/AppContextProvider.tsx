import React, { useState, createContext } from "react";

export const DetailsContext = createContext({});

const AppContextProvider = ({ children }: any) => {
  const [detailsData, setDetailsData] = useState();
  const [optionsData, setOptionsData] = useState();

  const [currentSongTitle, setCurrentSongTitle] = useState();
  const [currentSongArtist, setCurrentSongArtist] = useState();
  const [currentSongArtwork, setCurrentSongArtwork] = useState();

  return (
    <DetailsContext.Provider
      value={{
        detailsData,
        setDetailsData,
        optionsData,
        setOptionsData,
        currentSongArtist,
        currentSongArtwork,
        currentSongTitle,
        setCurrentSongTitle,
        setCurrentSongArtist,
        setCurrentSongArtwork,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export default AppContextProvider;
