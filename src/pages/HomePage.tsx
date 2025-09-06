// REMOVED: Header is no longer part of the HomePage
import Hero from '@/components/Hero';
import MenuPage from '@/components/MenuPage';
import Footer from '@/components/Footer';
import FloatingCartButton from '@/components/FloatingCartButton';
import ContactSection from '@/components/ContactSection';

const HomePage = () => {
  return (
    <>
      <main className="flex-grow">
        <Hero />
        <MenuPage />
         <ContactSection />
      </main>
      <Footer />
      <FloatingCartButton />
    </>
  );
};

export default HomePage;