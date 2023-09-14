'use client';

import React from 'react';
import Image from 'next/image';

const imagensPorAno = {
  2022: [
    '/foto1-22.webp',
    '/foto2-22.webp',
    '/foto3-22.webp',
    '/foto4-22.webp',
  ],
  2021: [
    '/foto1-21.webp',
    '/foto2-21.webp',
    '/foto3-21.webp',
    '/foto4-21.webp',
  ],
  2020: [
    '/foto1-20.webp',
    '/foto2-20.webp',
    '/foto3-20.webp',
    '/foto4-20.webp',
  ],
};

export default function EventosPassados() {
  return (
    <section id="EventosPassados">
      <div className="container pt-5">
        <div className="text-center mb-5">
          <h2 className="text-center">Projeto Família Amor Eterno</h2>
          <div className="blue-divider "></div> {/* Centralizado */}
        </div>
        <p>O projeto conta com diversas pessoas que se mobilizaram...</p>

        <div className="row">
          <div className="col-2"></div> {/* Espaço vazio à esquerda */}
          <div className="col-8">
            {Object.keys(imagensPorAno).map((ano) => (
              <div key={ano}>
                <h2 className="text-center mb-2 mt-3 ">
                  Campanha de doação de {ano}
                </h2>
                <div className="blue-divider "></div>{' '}
                <div
                  id={`carousel${ano}`}
                  className="carousel slide "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {imagensPorAno[ano].map((imagem, index) => (
                      <div
                        className={`carousel-item ${
                          index === 0 ? 'active' : ''
                        }`}
                        key={index}
                      >
                        <Image
                          src={imagem}
                          alt={`Projeto ${ano}`}
                          width={730}
                          height={550}
                          layout="responsive"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carousel${ano}`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel${ano}`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-2"></div> {/* Espaço vazio à direita */}
        </div>
      </div>
    </section>
  );
}
