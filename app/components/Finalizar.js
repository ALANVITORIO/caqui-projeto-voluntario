import React from 'react';
import Image from 'next/image'; // Importar o componente Image de next/image

export default function Finalizar() {
  return (
    <div className={styles.centeredContainer}>
      <Image
        src="/caminho/para/a/imagem/do/palhaco.jpg" // Substitua pelo caminho correto
        alt="Palhaço Fuinha"
        width={300} // Defina a largura que você quer
        height={300} // Defina a altura que você quer
      />
      <p className={styles.caption}>
        Ajude o palhaço Fuinha, o palhaço mais sem graça do Brasil, a fazer um
        feliz dia das crianças
      </p>
    </div>
  );
}
