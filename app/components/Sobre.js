// components/MeuComponente.js
import React from 'react';

export default function Sobre() {
  return (
    <section id="Sobre">
      <div className="container">
        <div className="text-center">
          <h2>Sobre o projeto</h2>
        </div>
        <div className="row">
          {/* Coluna para o texto */}
          <div className="col-md-6">
            <p>O Projeto começou no ano de 2019, Renata e seus amigos queriam fazer a diferença, fazer um dia das crianças feliz para eles.</p>
            <p>A comunidade do caqui é uma comunidade carente, localizada em Diadema.</p>
            <p>O projeto conta com diversos colaboradores, desde a confecção dos pacotinhos à entrega.</p>
            <p>Falar mais um pouco sobre a comunidade e do que eles fizeram de diferença.</p>
          </div>
          
          {/* Coluna para a foto */}
          <div className="col-md-6">
            <img src="/chacara.jpg" alt="Foto da comunidade" className="img-fluid" />
          </div>
        </div>  
      </div>
    </section>
  );
}
