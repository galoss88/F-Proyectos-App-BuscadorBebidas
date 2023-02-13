import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const RecipeContext = createContext();

const RecetasProvider = (props) => {
  const [buscar, setBuscar] = useState({ nameIngrediente: "", categoria: "" });
  const [recipes, setRecipes] = useState([]);
  const [consultar, setConsultar] = useState(false);
  useEffect(() => {
    if (consultar) {
      const llamadaApi = async () => {
        const { nameIngrediente, categoria } = buscar;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nameIngrediente}&c=${categoria}`;
        const api = await axios.get(url);
        const data = api.data.drinks;
        setRecipes(data);
      };
      llamadaApi();
    }
    setConsultar(false);
  }, [buscar]);
  return (
    <RecipeContext.Provider value={{ recipes, setBuscar, setConsultar }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecetasProvider;
