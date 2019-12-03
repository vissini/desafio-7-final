import React from "react";

import {Link} from "react-router-dom";

const NotFound = () => {
    return (
      <React.Fragment>
        <h1>Pagina Não Encontrada</h1>
        <Link to="/" data-test="voltar">Voltar Inicio</Link>
      </React.Fragment>
      
    )
}
export { NotFound };