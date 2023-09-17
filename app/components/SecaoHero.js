import React from 'react';

const SecaoHero = () => {
  // Adiciona o padding-top apenas para dispositivos móveis
  const paddingTopMobile =
    typeof window !== 'undefined' && window.innerWidth <= 768 ? 'pt-5' : '';

  return (
    <div
      className={`bg-primary text-white d-flex flex-column justify-content-between align-items-center ${paddingTopMobile}`}
      style={{
        height: '80vh',
        backgroundImage: `url('/background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Conteúdo no topo da tela */}
      <div className="text-center">
        <h1
          style={{
            fontSize: '3.25rem',
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
            color: '#003CC3',
            textShadow: '3px 3px 2px rgba(0, 0, 0, 5)', // Borda nas letras
          }}
        >
          DIA DAS CRIANÇAS
        </h1>
        <p
          className="lead"
          style={{
            fontSize: '2rem',
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
            color: 'black',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 8)', // Borda nas letras
          }}
        >
          Projeto família amor eterno 2023
        </p>
      </div>

      {/* Conteúdo no meio da tela */}
      <div className="text-center mb-5">
        <p
          className="lead text-dark mb-5"
          style={{
            fontSize: '1.8rem',
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
            color: 'white-smoke',
            textShadow: '2px 2px 1px rgba(245, 253, 255, .6)', //

            fontWeight: 'bold',
          }}
        >
          Ajude a fazer um Dia das Crianças mais feliz
        </p>
        <button
          className="btn btn-success mb-5"
          style={{
            fontSize: '1.2rem',
          }}
        >
          QUERO AJUDAR
        </button>
      </div>
    </div>
  );
};

export default SecaoHero;
