const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Take Control of Your Finances</h1>
        <p className="text-lg md:text-xl mb-8">
          Simplify budgeting, track expenses, and grow your savings with our intuitive tools.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
