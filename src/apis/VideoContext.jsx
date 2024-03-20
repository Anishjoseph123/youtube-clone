import { createContext, useEffect, useState } from "react";
import Axios, { baseParams } from "./Axios";

export let videoContext = createContext();

let VideoProvider = ({ children }) => {
  let [videos, setVideos] = useState(null);
  let [loading, setLoading] = useState(false);
  let [onSelect, setOnSelect] = useState(null);

  useEffect = () => {
    searchTerm("jailer");
  };

  let searchTerm = async (term) => {
    let { data } = await Axios.get("/search", {
      params: {
        q: term,
        ...baseParams,
      },
    });

    setVideos(data);
    setOnSelect(data.items[0]);
    setLoading(true);
  };

  let handleClick = (video) => {
    setOnSelect(video);
  };

  return (
    <videoContext.Provider
      value={{ searchTerm, videos, loading, handleClick, onSelect }}
    >
      {children}
    </videoContext.Provider>
  );
};

export default VideoProvider;
