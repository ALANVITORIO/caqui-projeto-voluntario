import React from 'react';
import Image from 'next/image';

export default function Finalizar() {
  return (
    <section className="">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col text-center">
            <Image
              src="/caminho/para/a/imagem/do/palhaco.jpg"
              alt="Palhaço Fuinha"
              width={300}
              height={300}
            />
            <p>
              Ajude o palhaço Fuinha, o palhaço mais sem graça do Brasil, a
              fazer um feliz dia das crianças
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
