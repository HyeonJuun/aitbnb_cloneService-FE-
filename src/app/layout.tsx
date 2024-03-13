import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/navbar/Navbar';
import ClientOnly from '@/app/components/ClientOnly';
import RegisterModal from '@/app/components/modals/RegisterModal';
import ToasterProvider from '@/app/providers/ToasterProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'airbnb',
  description: 'Airbnb clone',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='font.className'>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        <div className='pb-20 pt-28'>{props.children}</div>
      </body>
    </html>
  );
}
