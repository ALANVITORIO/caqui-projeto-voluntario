'use client';

import { useEffect } from 'react';
import './globals.css';

export const metadata = {
  title: 'Rifa do Caqui',
  description: 'Um site de rifa do caqui feito com Next.js',
};

export default function RootLayout({ children }) {
  useEffect(() => {
    // Importa o Bootstrap JS somente no lado do cliente
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
