'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const EsseAno = () => {
  const [pegos, setPegos] = useState([1]);

  const handleNumeroClick = (numero) => {
    if (!pegos.includes(numero)) {
      setPegos([...pegos, numero]);
      window.location.href = `https://api.whatsapp.com/send?text=Eu quero o número ${numero}`;
    }
  };

  return (
    <section id="EsseAno" className="container">
      <h2 className="text-center pt-5">Projeto 2023</h2>
      <div className="blue-divider"></div>

      <div className="row">
        <div className="col-md-6">
          <Image
            src="/chacara.jpg"
            alt="Foto do kit da Chácara"
            width={500}
            height={400}
            layout="responsive"
          />
        </div>

        <div className="col-md-6">
          <p className="text-center lead">
            Esse ano nós vamos fazer diferente, vamos fazer uma rifa.
          </p>
          <p>
            Para ajudar nesse ano, em colaboração com a trigolat, como forma de
            agradecimento aos 100 primeiros que doarem R$ 20,00 em doces ou em
            dinheiro, terá direito a um número da sorte.
          </p>
          <p>O prêmio será um kit de festa personalizado!!</p>
          <ol>
            <li>1 bolo de 1kg</li>
            <li>100 salgados</li>
            <li>100 doces</li>
            <li>Topo de bolo</li>
            <li>6 caixas de milk</li>
            <li>6 caixas pirâmide</li>
            <li>Trio de painel</li>
            <li>2 displays de mesa</li>
            <li>Bandeirola</li>
            <li>20 toppers de docinho</li>
          </ol>
        </div>
      </div>

      <div className="row">
        <h2 className="text-center pb-3">Como contribuir e concorrer</h2>
        <p>
          Assim que escolher um número disponível, você será mandado diretamente
          ao whatsapp da Renata, que está fazendo o controle dos números
        </p>
        <p>
          Ela irá reservar o seu número, não se preocupe se o número aparecer
          como disponível após selecionar, o controle será feito por ela
        </p>
        <p>
          O sorteio será gravado e você pode acompanhar diretamente com ela.
        </p>
        <p className="lead">
          Escolha agora o seu número, e ajude a fazer um dia das crianças mais
          feliz para as crianças da Comunidade do Caqui.
        </p>
      </div>

      <div className="d-flex flex-wrap justify-content-center cartela pt-5">
        {Array.from({ length: 100 }, (_, i) => i + 1).map((numero) => (
          <div
            key={numero}
            className={`numero m-2 border rounded ${
              pegos.includes(numero) ? 'bg-secondary inativo' : ''
            }`}
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
