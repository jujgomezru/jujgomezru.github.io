import React from 'react';
import './CodeFrame.css';
import img from './images/codigo.png'

const CodeFrame = () => {
    return (
      <div className="code-frame-container">
        <div className="code-frame">
          <h1 className="titulo">function_n</h1>
          <p className="texto">Recibe un número entero</p>
          <p className="texto">Verifica que sea un número entero, de lo contrario manda un 'console.log'</p>
          <p className="texto">Hace un ciclo del 1 hasta n</p>
          <p className="texto">Usa el módulo para determinar la divisibilidad,
            y asigna los valores si se cumple la condición
          </p>
          <p className="texto">Convierte i a string si ninguna condición se cumple</p>
        </div>
        <div className="code-frame with-image">
        <img src={img} className="image" alt ="codigo"/>
        </div>
      </div>
    );
  };

export { CodeFrame };