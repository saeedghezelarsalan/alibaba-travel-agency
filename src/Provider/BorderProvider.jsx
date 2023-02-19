import { useRouter } from "next/router";
import React, { useContext, useEffect, useState, createContext } from "react";
const borderLeftContext = createContext("");
const BorderProvider = ({ children }) => {
  const [leftBorder, setLeftBorder] = useState("0");
  const router = useRouter().asPath.replace("/", "");
  useEffect(() => {
    if (router == "iranout") {
      setLeftBorder("71.4%");
    } else if (router == "train-ticket") {
      setLeftBorder("56.72%");
    } else if (router == "bus-ticket") {
      setLeftBorder("42.72%");
    } else if (router == "tour") {
      setLeftBorder("28.72%");
    } else if (router == "hotel") {
      setLeftBorder("14.22%");
    } else if (router == "accommodation") {
      setLeftBorder("0%");
    } else {
      setLeftBorder("85.72%");
    }
  }, [router, leftBorder]);

  return (
    <borderLeftContext.Provider value={leftBorder}>
      {children}
    </borderLeftContext.Provider>
  );
};

export default BorderProvider;

export const useLeftBorder = () => useContext(borderLeftContext);