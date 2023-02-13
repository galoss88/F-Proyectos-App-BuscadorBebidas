import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaRecipes from "./components/ListaRecipes";
import ContextProvider from "./context/ContextApp";
import ModalProvider from "./context/ModalContext";
import RecetasProvider from "./context/RecetasContext";

function App() {
  return (
    <>
      <ContextProvider>
        <RecetasProvider>
          <ModalProvider>
            <Header />
            <Formulario />
            <ListaRecipes />
          </ModalProvider>
        </RecetasProvider>
      </ContextProvider>
    </>
  );
}

export default App;
