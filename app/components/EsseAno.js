'use client'

import React, { useState } from 'react';

const EsseAno = () => {
  const [pegos, setPegos] = useState([1]);  // Incluído o número 1 como inativo inicialmente

  const handleNumeroClick = (numero) => {
    if (!pegos.includes(numero)) {
      setPegos([...pegos, numero]);
      // Redirecionar para o WhatsApp aqui, se necessário
      window.location.href = `https://api.whatsapp.com/send?text=Eu quero o número ${numero}`;
    }
  };

  return (
    <section id="EsseAno" className="container">
      <h2 className="text-center">Projeto 2023</h2>
      <p className="text-center">Esse ano nós vamos fazer diferente, vamos fazer uma rifa.</p>
      <div className="d-flex flex-wrap justify-content-center cartela">
        {Array.from({ length: 100 }, (_, i) => i + 1).map((numero) => (
          <div
            className={`numero m-2 border rounded ${pegos.includes(numero) ? 'bg-secondary inativo' : ''}`}
            onClick={() => handleNumeroClick(numero)}
          >
            {pegos.includes(numero) ? 'X' : numero}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EsseAno;
