const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-3 border rounded-lg"
            rows={5}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
