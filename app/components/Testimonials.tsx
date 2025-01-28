const Testimonials = () => {
	const testimonials = [
	  {
		quote: 'This tool has completely transformed how I manage my finances. It&rsquo;s intuitive and easy to use!',
		author: 'Jane Doe',
	  },
	  {
		quote: 'I love how I can track my expenses and savings in one place. Highly recommended!',
		author: 'John Smith',
	  },
	  {
		quote: 'Budgeting has never been easier. This app is a lifesaver for anyone looking to save more.',
		author: 'Emily Johnson',
	  },
	];
  
	return (
	  <section id="testimonials" className="py-20 bg-gray-100">
		<div className="max-w-5xl mx-auto px-6">
		  <h2 className="text-3xl font-bold text-center text-gray-800">What Our Users Say</h2>
		  <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
			{testimonials.map((testimonial, index) => (
			  <div
				key={index}
				className="bg-white shadow-lg rounded-lg p-6 text-center"
			  >
				{/* Escaped quotes using &ldquo; and &rdquo; */}
				<p className="text-gray-600 italic">
				  &ldquo;{testimonial.quote}&rdquo;
				</p>
				<h4 className="text-gray-800 font-bold mt-4">- {testimonial.author}</h4>
			  </div>
			))}
		  </div>
		</div>
	  </section>
	);
  };
  
  export default Testimonials;
  