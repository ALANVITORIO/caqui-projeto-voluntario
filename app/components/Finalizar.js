'use client';

import React from 'react';
import Image from 'next/image';

export default function Finalizar() {
  return (
    <section className="">
      <div className="container pt-5">
        <div className="row justify-content-center align-items-center ">
          <div className="col text-center image-container">
            <div className="rounded-image">
              <Image
                src="/fuinha.png"
                alt="Palhaço Fuinha"
                width={900}
                height={520}
                layout="responsive"
              />
            </div>
            <p>
              Vamos fazer como o palhaço fuinha, o palhaço mais sem graça do
              Brasil, a fazer um feliz dia das crianças
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .image-container {
          max-width: 600px;
          margin: auto;
        }
        .rounded-image img {
          border-radius: 50%;
        }
        @media (min-width: 768px) {
          .image-container {
            max-width: 400px;
          }
        }
        @media (min-width: 992px) {
          .image-container {
            max-width: 500px;
          }
        }
      `}</style>
    </section>
  );
}
