import axios from "axios";
import React, { useState, useEffect } from "react";

const DataFetcher = (url: string) => {
  const [fetchedData, setFetchedData] = useState<any>();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4065287e81mshda90d33d91f5448p1a7061jsn358a3dcae884",
        "X-RapidAPI-Host": "theaudiodb.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => setFetchedData(response.json()))
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);
  return fetchedData;
};

export default DataFetcher;
