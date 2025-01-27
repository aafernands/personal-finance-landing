const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-gray-600">$9.99/month</p>
          </div>
          <div className="p-6 border rounded-lg bg-blue-500 text-white">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p>$19.99/month</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-gray-600">Custom Pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
