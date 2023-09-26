'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import 'bootstrap-icons/font/bootstrap-icons.css';

const EsseAno = () => {
  const [pegos, setPegos] = useState([
    7, 9, 19, 20, 24, 27, 34, 29, 59, 74, 100,
  ]);

  const handleNumeroClick = (numero) => {
    if (!pegos.includes(numero)) {
      setPegos([...pegos, numero]);
      window.location.href = `https://api.whatsapp.com/send?phone=+5511974117799&text=Eu quero o número ${numero}`;
    }
  };

  return (
    <section id="EsseAno" className="container">
      <h2 className="text-center pt-5 teste">Projeto 2023</h2>
      <div className="blue-divider"></div>

      <div className="row">
        <div className="col-md-6">
          <Image
            src="/kit.webp"
            alt="Foto do kit da Chácara"
            width={800}
            height={800}
            layout="responsive"
          />
        </div>

        <div className="col-md-6">
          <p className="text-center lead">
            Esse ano nós vamos fazer diferente, vamos fazer uma rifa.
          </p>
          <div className="divided-paragraph bordered-text ">
            <p>
              Para ajudar nesse ano, em colaboração com a trigolat, como forma
              de agradecimento aos 100 primeiros que doarem{' '}
              <strong> R$ 20,00 em doces ou em dinheiro,</strong> terá direito a
              um número da sorte.
            </p>
            <p>
              O prêmio será um kit de festa personalizado fornecido por{' '}
              <strong>RR-GOMES</strong> e <strong>TRIGOLAT</strong>
            </p>
            <p>
              Todos os kits serão personalizados, você escolhe o tema e
              queriados amigos irão montar e entregar, um verdadeiro kit de
              festa
            </p>
          </div>
        </div>
      </div>

      <div className="pt-5 pb-5"></div>
      <div className="row">
        <h2 className="text-center teste">Confira que kit festa incrível</h2>
        <div className="col-md-6">
          <div className="bordered-text text-center">
            <ol className="list-inline">
              <li className="list-inline-item mx-5">
                <i className="bi bi-cake"></i> 1 bolo de 1kg
              </li>
              <li className="list-inline-item">
                <i className="bi bi-box-seam"></i> 100 salgados
              </li>
              <li className="list-inline-item">
                <i className="bi bi-box-seam"></i> 100 doces
              </li>
              <li className="list-inline-item">
                <i className="bi bi-award"></i> Topo de bolo
              </li>
              <li className="list-inline-item">
                <i className="bi bi-box"></i> 6 caixas de milk
              </li>
            </ol>
          </div>
        </div>

        <div className="col-md-6">
          <div className="bordered-text text-center">
            <ol className="list-inline " start="6">
              <li className="list-inline-item mx-5">
                <i className="bi bi-box mx-"></i> 6 caixas pirâmide
              </li>
              <li className="list-inline-item mx-5">
                <i className="bi bi-images"></i> Trio de painel
              </li>
              <li className="list-inline-item">
                <i className="bi bi-table"></i> 2 displays de mesa
              </li>
              <li className="list-inline-item">
                <i className="bi bi-flag"></i> Bandeirola
              </li>
              <li className="list-inline-item">
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
            diretamente ao <strong>whatsapp da Renata</strong> , que está
            fazendo o controle dos números.
          </p>
        </div>
        <div className="">
          <p>
            Ela irá reservar o seu número, não se preocupe se o número aparecer
            como disponível após selecionar, o controle será feito diretamente
            por ela.
          </p>
          <p>
            Lembre-se para concorrer é preciso contribuir com{' '}
            <strong>20 Reais em pix, ou em doce.</strong>
          </p>
        </div>
        <div className="">
          <p>
            O sorteio será gravado e você pode acompanhar diretamente no dia.
          </p>
        </div>
        <div className="divided-paragraph">
          <p className="teste text-center">
            Escolha agora o seu número, e ajude a fazer um dia das crianças mais
            feliz para os pequenos da comunidade do caqui!
          </p>
        </div>
      </div>
      <div className="row">
        <h2 className="text-center pt-5 teste">Escolha um número</h2>
        <div className="blue-divider"></div>
      </div>
      <div className="bordered-text">
        <div className="row">
          {Array.from({ length: 100 }, (_, i) => (
            <button
              key={i}
              className={`numero ${
                pegos.includes(i + 1) ? 'btn-disable' : 'btn-enable'
              }`}
              onClick={() => handleNumeroClick(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          margin-top: 70px;
        }
        .teste {
          font-family: 'Lobster Two', cursive;
        }
        .blue-divider {
          width: 200px;
          height: 5px;
          background-color: #1d72b8;
          margin: 10px auto;
        }
        .bordered-text {
          border: 2px solid #1d72b8;
          padding: 30px;
          margin: 10px;
        }
        .divided-paragraph {
          border-top: 2px solid #1d72b8;
          padding-top: 20px;
          margin-top: 20px;
        }
        .numero {
          width: 60px;
          height: 60px;
          font-size: 24px;
          margin: 5px;
          cursor: pointer;
          border: none;
          border-radius: 50%;
          outline: none;
        }
        .btn-enable {
          background-color: #1d72b8;
          color: white;
        }
        .btn-enable:hover {
          background-color: #155a8a;
          color: white;
          transform: scale(1.1);
        }
        .btn-disable {
          background-color: red;
          color: green;
          cursor: not-allowed;
        }
        .btn-disable:hover {
          background-color: darkred;
          color: lightgreen;
        }
      `}</style>
    </section>
  );
};

export default EsseAno;
