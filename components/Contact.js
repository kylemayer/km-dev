function Contact() {
  return (
    <div className="divide-y-[1px] divide-gray-600">
      <span>
      </span>
      <div className="mt-5 mb-6 px-7 sm:px-0 container mx-auto">
        <a id="contact">
          <h2 className="text-xl font-light  text-gray-100 py-3">Contact</h2>
        </a>
        <form>
          <input
            type="text"
            className="w-full px-4 py-2 mb-4 border border-gray-600 bg-gray-800 rounded-lg"
            placeholder="Name"
          />
          <input
            type="text"
            className="w-full px-4 py-2 mb-4 border border-gray-600 bg-gray-800 rounded-lg"
            placeholder="Email"
          />
          <textarea
            className="w-full h-24 px-4 py-2 mb-4 border border-gray-600 bg-gray-800 rounded-lg text-gray-100"
            type="text"
            placeholder="Message"
          />
          <button className="w-full px-4 py-2 mb-4 border border-gray-600 bg-gray-900 rounded-lg text-gray-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
