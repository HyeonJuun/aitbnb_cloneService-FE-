import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/navbar/Navbar';
import ClientOnly from '@/app/components/ClientOnly';
import RegisterModal from '@/app/components/modals/RegisterModal';
//import ListingRooms from '@/app/components/listings/LilstingRooms';

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
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {props.children}
      </body>
    </html>
  );
}
