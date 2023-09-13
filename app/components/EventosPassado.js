// components/EventosPassados.js
import React from 'react';

export default function EventosPassados() {
  return (
    <section id="EventosPassados">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Projetos Passados</h2>
        </div>
        <p>Quantos pacotes foram entregues: X pacotes.</p>

        {/* Primeiro grid */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mb-4">
            <img src="/foto1.jpg" alt="Projeto 1" className="img-fluid" />
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <img src="/foto2.jpg" alt="Projeto 2" className="img-fluid" />
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <img src="/foto3.jpg" alt="Projeto 3" className="img-fluid" />
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <img src="/foto4.jpg" alt="Projeto 4" className="img-fluid" />
          </div>
        </div>

        {/* Segundo grid */}
        <div className="row">
          <div className="col-lg-3 col-sm-6 mb-4">
            <img src="/foto5.jpg" alt="Projeto 5" className="img-fluid" />
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <img src="/foto6.jpg" alt="Projeto 6" className="img-fluid" />
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <img src="/foto7.jpg" alt="Projeto 7" className="img-fluid" />
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <img src="/foto8.jpg" alt="Projeto 8" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
