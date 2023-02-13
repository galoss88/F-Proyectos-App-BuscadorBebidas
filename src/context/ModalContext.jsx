import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext();
const ModalProvider = (props) => {
  const [idreceta, setIdReceta] = useState(null);
  const [inforecipe, setInfoRecipe] = useState([]);

  useEffect(() => {
    const llamadaApi = async () => {
      if (!idreceta) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
      const api = await axios.get(url);
      const data = api.data.drinks;
      setInfoRecipe(data);
      
    };
    llamadaApi();
  }, [idreceta]);
  return (
    <ModalContext.Provider value={{ setIdReceta, inforecipe,setInfoRecipe }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
