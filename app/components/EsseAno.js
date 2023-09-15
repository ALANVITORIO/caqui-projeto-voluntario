'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Divider from './Divider';

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
      <h2 className="text-center pt-5 teste">Projeto 2023</h2>
      <div className="blue-divider"></div>

      <div className="row">
        <div className="col-md-6">
          <Image
            src="/kit.png"
            alt="Foto do kit da Chácara"
            width={1080}
            height={1080}
            layout="responsive"
          />
        </div>

        <div className="col-md-6">
          <p className="text-center lead">
            Esse ano nós vamos fazer diferente, vamos fazer uma rifa.
          </p>
          <div className="divided-paragraph bordered-text">
            <p>
              Para ajudar nesse ano, em colaboração com a trigolat, como forma
              de agradecimento aos 100 primeiros que doarem R$ 20,00 em doces ou
              em dinheiro, terá direito a um número da sorte.
            </p>
            <p>O prêmio será um kit de festa personalizado!!</p>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-5"></div>
      <div className="row">
        <div className="col-md-6">
          <div className="bordered-text text-center">
            <ol>
              <li>
                <i className="bi bi-cake"></i> 1 bolo de 1kg
              </li>
              <li>
                <i className="bi bi-box-seam"></i> 100 salgados
              </li>
              <li>
                <i className="bi bi-box-seam"></i> 100 doces
              </li>
              <li>
                <i className="bi bi-award"></i> Topo de bolo
              </li>
              <li>
                <i className="bi bi-box"></i> 6 caixas de milk
              </li>
            </ol>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bordered-text text-center">
            <ol start="6">
              <li>
                <i className="bi bi-box"></i> 6 caixas pirâmide
              </li>
              <li>
                <i className="bi bi-images"></i> Trio de painel
              </li>
              <li>
                <i className="bi bi-table"></i> 2 displays de mesa
              </li>
              <li>
                <i className="bi bi-flag"></i> Bandeirola
              </li>
              <li>
                <i className="bi bi-stars"></i> 20 toppers de docinho
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="pt-5"></div>
      <div className="row bordered-text">
        <h2 className="text-center pb-3 ">Como contribuir e concorrer</h2>
        <div className="">
          <p>
            Assim que escolher um número disponível, você será mandado
            diretamente ao whatsapp da Renata, que está fazendo o controle dos
            números.
          </p>
        </div>
        <div className="">
          <p>
            Ela irá reservar o seu número, não se preocupe se o número aparecer
            como disponível após selecionar, o controle será feito por ela.
          </p>
        </div>
        <div className="">
          <p>
            O sorteio será gravado e você pode acompanhar diretamente com ela.
          </p>
        </div>
        <div className="divided-paragraph">
          <p className="lead">
            Escolha agora o seu número, e ajude a fazer um dia das crianças mais
            feliz para as crianças da Comunidade do Caqui.
          </p>
        </div>
      </div>
      <div className="pt-5"></div>
      <div className="d-flex flex-wrap justify-content-center cartela pt-5 bg-white">
        {Array.from({ length: 100 }, (_, i) => i + 1).map((numero) => (
          <div
            key={numero}
            className={`numero m-2 border rounded ${
              pegos.includes(numero) ? 'bg-secondary inativo' : ''
            }`}
            onClick={() => handleNumeroClick(numero)}
            style={{ fontWeight: 'bold', color: 'blue' }}
          >
            {pegos.includes(numero) ? 'X' : numero}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EsseAno;
