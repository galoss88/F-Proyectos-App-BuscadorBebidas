import React, { useContext } from "react";
import { useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { RecipeContext } from "../context/RecetasContext";
import Recipe from "./Recipe";
import {
  Button,
  ContainerListaRecipes,
  ImgModal,
  Modal,
  Overlay,
} from "./styles/stylesListaRecipes";

const ListaRecipes = () => {
  const { recipes } = useContext(RecipeContext);

  //modal
  const [showmodal, setShowModal] = useState(false);
  const { inforecipe, setInfoRecipe } = useContext(ModalContext);
  const handleClose = () => {
    setShowModal(false);
    setInfoRecipe([]);
  };

  const mostrarIngredientes = (info) => {
    
    const ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (info[0][`strIngredient${i}`]) {
        ingredientes.push(<li>{info[0][`strIngredient${i}`]} {info[0][`strMeasure${i}`]}</li>);
      }
    }

    return ingredientes;
  };
  
  return (
    <ContainerListaRecipes>
      {inforecipe.length ? (
        <Overlay showmodal={showmodal} onClick={() => handleClose()}>
          <Modal>
            <ImgModal src={inforecipe[0].strDrinkThumb} />
            <span className="titulo">{inforecipe[0].strCategory}</span>
            <span className="instrucciones">
              <strong>Instrucciones:</strong> {inforecipe[0].strInstructions}
            </span>
            <ul>
              <h3>Ingredientes:</h3>
              {mostrarIngredientes(inforecipe)}
            </ul>
          </Modal>
          <Button onClick={() => handleClose()}>X</Button>
        </Overlay>
      ) : null}

      {recipes.map((r) => (
        <Recipe key={r.idDrink} r={r} setShowModal={setShowModal} />
      ))}
   
    </ContainerListaRecipes>
  );
};

export default ListaRecipes;
