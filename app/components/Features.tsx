const Features = () => {
	return (
	  <section id="features" className="py-16 bg-gray-100">
		<div className="container mx-auto text-center">
		  <h2 className="text-3xl font-bold mb-8">Features</h2>
		  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div className="p-6 bg-white rounded-lg shadow-md">
			  <h3 className="text-xl font-semibold mb-4">Budgeting</h3>
			  <p className="text-gray-600">Easily set budgets and track your spending habits.</p>
			</div>
			<div className="p-6 bg-white rounded-lg shadow-md">
			  <h3 className="text-xl font-semibold mb-4">Expense Tracking</h3>
			  <p className="text-gray-600">Monitor your expenses in real time with our tools.</p>
			</div>
			<div className="p-6 bg-white rounded-lg shadow-md">
			  <h3 className="text-xl font-semibold mb-4">Savings Goals</h3>
			  <p className="text-gray-600">Set and achieve your financial goals effortlessly.</p>
			</div>
		  </div>
		</div>
	  </section>
	);
  };
  
  export default Features;
  