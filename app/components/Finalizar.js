import React from 'react';
import Image from 'next/image';

export default function Finalizar() {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col text-center">
            <Image
              src="/fuinha.png"
              alt="Palhaço Fuinha"
              width={400}
              height={400}
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
