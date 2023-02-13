import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import {
  ButtonVerImagen as ButtonVerInfo,
  CardRecipe,
  ImgRecipe,
} from "./styles/stylesRecipe";

const Recipe = ({ r, setShowModal }) => {
  const { setIdReceta, inforecipe } = useContext(ModalContext);
  const { idDrink, strDrinkThumb, strDrink } = r;
  //datos receta

  const viewRecipe = (idDrink) => {
    setIdReceta(idDrink);
    setShowModal(true);
  };
  return (
    <CardRecipe>
      <ImgRecipe src={strDrinkThumb} />
      <p>Nombre trago: {strDrink}</p>
      <ButtonVerInfo onClick={() => viewRecipe(idDrink)}>
        Ver info
      </ButtonVerInfo>
    </CardRecipe>
  );
};

export default Recipe;
