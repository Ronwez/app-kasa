import React from 'react';
import {Link} from "react-router-dom";

function Error_message() {
  return (
    <div className='err-page'>
      <h1 className="error_title">404</h1>
        <p>Oups! La page que vous demandez n'exsite pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error_message
