import React from 'react';

const SecaoHero = () => {
  return (
    <div className="bg-primary text-white d-flex justify-content-center align-items-center" style={{ height: '90vh', backgroundImage: `url('/69.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div>
        <h1 className="display-4">Comunidade do Caqui</h1>
        <p className="lead">Ajude a comunidade do Caqui a fazer um Dia das Crianças mais feliz</p>
      </div>
    </div>
  );
};

export default SecaoHero;
