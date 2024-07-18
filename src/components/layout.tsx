import Navbar from './navbar';
import Footer from './footer';
import { Inter } from 'next/font/google';
import { UserProvider } from '@/context/UserContext';
const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <UserProvider>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className="flex flex-grow justify-center">{children}</main>
        <Footer />
      </div>
    </UserProvider>
  );
}
