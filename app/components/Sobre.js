'use client';

import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import { useScrollAnimation } from '../Hook/useScrollAnimation';

export default function Sobre() {
  useScrollAnimation();
  return (
    <section id="Sobre" className="pt-5">
      <div className="container pt-3">
        <div className="text-center">
          <h2 className="teste ">A comunidade do Caqui</h2>
          <div className="blue-divider"></div>
        </div>
        <div className="pt-5"></div>
        <div className="row">
          {/* Coluna para o texto */}
          <div className="col-md-6">
            <div className="bordered-text">
              <p className="pb-2 divided-paragraph">
                O Projeto começou no ano de 2019, Renata e seus familiares,
                queriam fazer a diferença. Pra isso escolheram a sua cidade
                Natal, Diadema.
              </p>
              <p className="divided-paragraph pb-2 fade-in left">
                A comunidade do Caqui fica localizada no Eldorado, Diadema.
                Atualmente conta com quase 100 pessoas vivendo em situação de
                vulnerabilidade social.
              </p>
              <p className="divided-paragraph pb-2 fade-in right">
                Muitos dos moradores são crianças e adolescentes. Muitas
                famílias antes do assentamento, viviam literalmente dormindo na
                rua, situação que se intensificou com a pandemia.
              </p>
              <p className="divided-paragraph pb-2 fade-in left">
                Nesse ano de 2023, a prefeitura tentou uma reintegração de posse
                forçada, deixando as famílias que já eram vulneráveis em uma
                situação ainda pior.
              </p>
              <p className="divided-paragraph fade-in right">
                Diante de um cenário tão desolador, Renata e seus familiares
                este ano estão novamente se mobilizando para ajudar a comunidade
                do Caqui. Ajudar as crianças a terem um dia das crianças mais
                feliz, trazer alegria para as crianças em um cenário tão
                difícil.
              </p>
            </div>
          </div>
          {/* Coluna para a foto */}
          <div className="col-md-6 pt-3">
            <div
              style={{ position: 'relative', width: '100%', height: 'auto' }}
            >
              <Image
                src="/chacara.webp"
                alt="Foto da comunidade"
                layout="responsive"
                width={1081} // Tamanho original da imagem
                height={801} // Tamanho original da imagem
                className="responsive-img"
              />
              <p className="lead">
                Comunidade do caqui no dia da desapropriação de posse
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
