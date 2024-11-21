import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Integration = () => {
  return (
    <section className="relative w-full py-16 px-4 md:py-24 lg:py-32 bg-black text-white">
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between text-left space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-8 p-8">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl leading-tight">
            Seamless Integration
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Integrate effortlessly with our platform. Simplify your processes,
            enhance efficiency, and ensure robust security.
          </p>
          <Link to="/book-demo">
            <button
              className="bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:border-transparent text-lg font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
              style={{ marginTop: '20px' }}
            >
              Book a Demo
            </button>
          </Link>
      </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col items-center space-y-8 p-8">
          <h2 className="text-2xl font-semibold mb-6">
          We've got you covered everywhere!
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-8">
            <LazyLoadImage
              src="data:image/png;base64,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"
              alt="Razorpay"
              className="h-12 rounded-[10px]"
            />
            <LazyLoadImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPSwjrCGLsxtGAtrogMziqQ-uSR0bqT7yFg&s"
              alt="Cashfree"
              className="h-12 rounded-[10px]"
            />
            <LazyLoadImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIraYV_xvxD_Q5gOEfPbT7fsHxDjAf-WF4w&s"
              alt="Instamojo"
              className="h-12 rounded-[10px]"
            />
          </div>
          <div className="mt-8 text-left max-w-xl">
            <h3 className="text-xl font-semibold mb-4">
              How Seamless Integration?
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Automates workflow and reduce manual errors.</li>
              <li>Enhance data accuracy and accessibility.</li>
              <li>Ensure compatibility with various platforms.</li>
              <li>Improve overall operational efficiency.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
