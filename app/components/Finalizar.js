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
                src="/fuinha.webp"
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

            {/* Nova seção de prestação de contas */}
            <div className="prestacao-contas">
              <h2>Nossa prestação de contas</h2>
              <div className="instagram-embed">
                <iframe
                  src="https://www.instagram.com/p/DA6qXaQxKFJ/embed"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  scrolling="no"
                  allowtransparency="true"
                ></iframe>
              </div>
            </div>
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
        .prestacao-contas {
          margin: 3rem auto;
          text-align: center;
          max-width: 600px;
        }
        .prestacao-contas h2 {
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
          color: #333;
        }
        .instagram-embed {
          position: relative;
          width: 100%;
          background: #f8f8f8;
          border-radius: 8px;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
