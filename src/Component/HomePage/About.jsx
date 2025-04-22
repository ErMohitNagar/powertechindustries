import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-7">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQE05JngxJk0lw/article-cover_image-shrink_720_1280/0/1685451447429?e=2147483647&v=beta&t=z-8uTuFlgRqfj02VNMQ7vVemOTdc7n-KYDHeeDWru3c"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">ABOUT US</h1>
          <p className="text-gray-600 mb-4">
            Hackney started as a small interior design firm in downtown Michigan, aiming to help home buyers to make do with the new space that they had acquired. It soon became obvious that it would make sense to help our clients see beyond the walls and floor plans, and be there with them from the get-go.
          </p>
          <p className="text-gray-600 mb-6">
            Currently, we offer house realtor, interior design, and architecture services in order to help our customers find their forever homes as seamlessly and painlessly as possible. We value our customers above everything else, meaning that we won’t take ‘OK’ as an answer.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link to="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-facebook text-2xl"></i>
            </Link>
            <Link to="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-twitter text-2xl"></i>
            </Link>
            <Link to="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-instagram text-2xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;