import React, { useContext, useState } from "react";
import { Context } from "../context/ContextApp";
import { RecipeContext } from "../context/RecetasContext";
import {
  Fieldset,
  Form,
  Input,
  InputSubmit,
  Legend,
  Select,
  Wrapper,
} from "./styles/stylesFormulario";

const Formulario = () => {
  //contextos
  const { categorias } = useContext(Context);
  const { setBuscar, setConsultar } = useContext(RecipeContext);
  //estados locales
  const [busqueda, setBusqueda] = useState({
    nameIngrediente: "",
    categoria: "default",
  });
  const handleChange = (e) => {
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setBuscar(busqueda);
    setConsultar(true);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset>
        <Legend>Buscar bebidas por Categoria o Ingrediente</Legend>
      </Fieldset>
      <Wrapper>
        <Input
          type={"search"}
          placeholder="Buscar por ingrediente"
          name="nameIngrediente"
          onChange={(e) => handleChange(e)}
        />
        <Select
          name="categoria"
          value={busqueda.categoria}          
          onChange={(e) => handleChange(e)}
        >
          <option value="default">
            Seleccione la categoria
          </option>
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria.strCategory}>
              {categoria.strCategory}
            </option>
          ))}
        </Select>
        <InputSubmit type={"submit"} value="Buscar Bebidas" />
      </Wrapper>
    </Form>
  );
};

export default Formulario;
