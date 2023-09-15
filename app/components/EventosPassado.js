'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import Divider from './Divider';

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
          <h2 className="text-center teste">Projeto Família Amor Eterno</h2>
          <div className="blue-divider"></div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <Image
              src="/equipe.webp"
              alt="Background Image"
              width={600}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="col-md-6">
            <div className="bordered-text">
              <p className="divided-paragraph">
                O projeto conta com diversas pessoas que se mobilizaram para
                ajudar as familias carentes de nossa cidade.
              </p>
              <p className="divided-paragraph">
                A cada ano o projeto vai recebendo mais ajuda e mais pessoas se
                conscientizando da importância de ajudar o próximo.
              </p>
              <p className="divided-paragraph">
                A campanha de 2020 foi particularmente difícil, pois o mundo
                todo estava passando por uma pandemia e muitas pessoas perderam
                seus empregos e não tinham como sustentar suas famílias. Mesmo
                assim, conseguimos coletar até brinquedo para as crianças.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5"></div>
        <Divider />
        <div className="pt-5"></div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            {Object.keys(imagensPorAno).map((ano) => (
              <div key={ano}>
                <h2 className="text-center mb-2 mt-3 teste ">
                  Campanha de doação de {ano}
                </h2>
                <div className="blue-divider"></div>
                <div className="pt-3"></div>
                <CustomCarousel images={imagensPorAno[ano]} />
              </div>
            ))}
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="pt-5"></div>
    </section>
  );
}

function CustomCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    setActiveIndex(newIndex);
  };

  const goToNextSlide = () => {
    let newIndex = activeIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div style={{ position: 'relative' }}>
      {images.map((image, index) => (
        <div
          className={`carousel-image ${
            index === activeIndex ? 'd-block' : 'd-none'
          }`}
          key={index}
        >
          <Image
            src={image}
            alt={`Projeto ${index}`}
            width={730}
            height={550}
            layout="responsive"
          />
        </div>
      ))}
      <button onClick={goToPrevSlide} className="carousel-button prev">
        &#8249;
      </button>
      <button onClick={goToNextSlide} className="carousel-button next">
        &#8250;
      </button>
    </div>
  );
}
