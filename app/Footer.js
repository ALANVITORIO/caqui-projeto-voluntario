'use client';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="container text-center mt-4">
      <p className="pt-5">
        © 2023. Site desenvolvido de maneira voluntária por{' '}
        <a
          href="https://www.vitorioweb.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          VITORIO WEB
        </a>
        .
      </p>
      <div className="d-flex align-items-center justify-content-center ">
        <a
          href="https://www.instagram.com/vitorioweb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <span className="mx-3 ">Acompanhe outros trabalhos dele</span>
      </div>
      <style jsx>{`
        .bi-instagram {
          font-size: 34px;
          color: #e1306c;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
