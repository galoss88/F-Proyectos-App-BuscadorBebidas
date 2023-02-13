import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();
const ContextProvider = (props) => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const llamadaApi = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const api = await axios.get(url);

      setCategorias(api.data.drinks);
    };
    llamadaApi();
  }, []);

  return (
    <Context.Provider value={{ categorias }}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
