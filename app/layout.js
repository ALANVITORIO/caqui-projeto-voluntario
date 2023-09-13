import './globals.css' // Assumindo que você ainda deseja manter alguma estilização global

export const metadata = {
  title: 'Rifa do Caqui',
  description: 'Um site de rifa do caqui feito com Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
