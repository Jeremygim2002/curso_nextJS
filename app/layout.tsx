import './ui/global.css';
import {quicksand, roboto} from './ui/fonts.js'

export default function RootLayout({
children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased`}>
        <h1>Este es el layout</h1>
        <h1 className={`${roboto.className} antialiased`}>----------------------</h1>
        <div style={{border: '2px solid #000'}}>
        {children}
        </div>

        <footer className='text-white-500 text-center'>Falta plataa 💵💵</footer>
      </body>
    </html>
  );
}
