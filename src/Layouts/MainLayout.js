import Header from '../components/Header';
import { Footer } from '../components/Footer';

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
