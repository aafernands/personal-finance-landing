import SEO from './components/SEO';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Personal Finance Landing Page"
        description="Simplify budgeting, track expenses, and grow your savings with our personal finance tool."
        keywords="personal finance, budgeting, expense tracking, savings"
        author="Alex Fernandes"
      />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
