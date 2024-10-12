//trazendo os componentes com import
import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./global.scss";
// o arquivo app é responsável por renderizar tudo

//criando a estrutura básica

function App () {
  return(
    //fragmento - Tag invisível
    <>
    {/*chamando para renderizar a Header*/}
      <Header/>
      <Main/>
    </>
  );
}

export default App

//Para instalar o SASS - só precisa ser instalado uma vez por projeto
//dar ctrl + c no terminal
//npm install sass
//para conferir se foi instalado ir no arquivo Jason e verificar as extensões 
//npm run dev para voltar ao projeto
