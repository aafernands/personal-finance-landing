const Testimonials = () => {
	return (
	  <section className="py-16 bg-gray-100">
		<div className="container mx-auto text-center">
		  <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
		  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div className="p-6 bg-white rounded-lg shadow-md">
			  <p className="text-gray-600">"This tool changed my life!"</p>
			  <h4 className="mt-4 font-semibold">- Alex</h4>
			</div>
			<div className="p-6 bg-white rounded-lg shadow-md">
			  <p className="text-gray-600">"Super easy to use."</p>
			  <h4 className="mt-4 font-semibold">- Jamie</h4>
			</div>
			<div className="p-6 bg-white rounded-lg shadow-md">
			  <p className="text-gray-600">"Highly recommend it."</p>
			  <h4 className="mt-4 font-semibold">- Taylor</h4>
			</div>
		  </div>
		</div>
	  </section>
	);
  };
  
  export default Testimonials;
  