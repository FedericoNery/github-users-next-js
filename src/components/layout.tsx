import Navbar from './navbar';
import Footer from './footer';
import { Inter } from 'next/font/google';
import { GlobalStateProvider } from '@/context/UserContext';
const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <GlobalStateProvider>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className="flex flex-grow justify-center">{children}</main>
        <Footer />
      </div>
    </GlobalStateProvider>
  );
}
