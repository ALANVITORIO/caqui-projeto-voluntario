import React from 'react';
import Image from 'next/image'; // Importar o componente Image de next/image

export default function Sobre() {
  return (
    <section id="Sobre" className="">
      <div className="container pt-3">
        <div className="text-center">
          <h2 className="teste">A comunidade do Caqui</h2>
          <div className="blue-divider"></div>
        </div>
        <div className="row">
          {/* Coluna para o texto */}
          <div className="col-md-6">
            <div className="bordered-text">
              <p className=" pb-2 divided-paragraph">
                O Projeto começou no ano de 2019, Renata e seus familiares,
                queriam fazer a diferença. Pra isso escolheram a sua cidade
                Natal, Diadema.
              </p>
              <p className="divided-paragraph pb-2">
                A comunidade do Caqui fica localizada no Eldorado, Diadema.
                Atualmente conta com quase 100 pessoas vivendo em situação de
                vulnerabilidade social.
              </p>
              <p className="divided-paragraph pb-2">
                Muitos dos moradores são crianças e adolescentes. Muitas
                famílias antes do assentamento, viviam literalmente dormindo na
                rua, situação que se intensificou com a pandemia.
              </p>
              <p className="divided-paragraph pb-2">
                Nesse ano de 2023, a prefeitura tentou uma reintegração de posse
                forçada, deixando as famílias que já eram vulneráveis em uma
                situação ainda pior.
              </p>
              <p className="divided-paragraph">
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
            <Image
              src="/chacara.jpg"
              alt="Foto da comunidade"
              width={360} // Defina as dimensões que preferir
              height={750}
              className="rounded-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
