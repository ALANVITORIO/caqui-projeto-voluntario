import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Historia = () => {
  return (
    <section id="Historia" className="container">
      <h2 className="text-center pt-5">Principais contribuintes</h2>
      <div className="blue-divider"></div>

      <div className="row">
        <div className="col-12 col-md-6 text-center">
          <h3>rrgomes.toposdeboloabc</h3>
          <div className="d-flex justify-content-center align-items-center flex-column flex-md-row">
            <div className="col-6 col-md-3">
              <Image
                src="/rr.jpg"
                alt="Logo de rrgomes.toposdeboloabc"
                width={250}
                height={250}
                className="rounded-circle"
              />
            </div>
            <div className="col-6 col-md-3">
              <a
                href="https://www.instagram.com/rrgomes.toposdeboloabc/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    fontSize: '24px',
                    width: '40px',
                    marginLeft: '100px',
                  }}
                />
              </a>
            </div>
          </div>
          <p>
            Especialistas em topos de bolo, tornando cada momento ainda mais
            especial.
          </p>
        </div>

        <div className="col-12 col-md-6 text-center">
          <h3>trigolat</h3>
          <div className="d-flex justify-content-center align-items-center flex-column flex-md-row">
            <div className="col-6 col-md-3">
              <Image
                src="/trigo.jpg"
                alt="Logo de trigolat"
                width={250}
                height={250}
                className="rounded-circle"
              />
            </div>
            <div className="col-6 col-md-3">
              <a
                href="https://www.instagram.com/trigolat/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    width: '40px',
                    marginLeft: '100px',
                  }}
                />
              </a>
            </div>
          </div>
          <p>
            Oferecendo uma gama de bolos, salgados e doces para fazer seu evento
            ainda melhor.
          </p>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>
          O sorteio está sendo patrocinado por rrgomes e trigolat, dois
          empreendedores de Diadema. Juntos, eles são especialistas em momentos
          festivos e estão aqui para tornar o projeto ainda mais significativo.
        </p>
      </div>
    </section>
  );
};

export default Historia;
