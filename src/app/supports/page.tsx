"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const SupportPage = () => {
  return (
    <div className="py-12">
      <div className="max-w-screen-lg px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Contact Support
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We&apos;re here to help! Reach out to us with any questions or
            concerns.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Phone Support */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaPhone className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
            <p className="mt-2 text-gray-700">
              Our support team is available 24/7.
            </p>
            <p className="mt-1 text-indigo-600 font-medium">
              +1 (800) 123-4567
            </p>
          </div>

          {/* Email Support */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaEnvelope className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
            <p className="mt-2 text-gray-700">
              We&apos;ll get back to you as soon as possible.
            </p>
            <p className="mt-1 text-indigo-600 font-medium">
              support@example.com
            </p>
          </div>

          {/* Office Location */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Visit Us</h3>
            <p className="mt-2 text-gray-700">
              Our office is open Monday to Friday.
            </p>
            <p className="mt-1 text-indigo-600 font-medium">
              123 Support St, Suite 456 <br /> San Francisco, CA 94107
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Need more help?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Submit a ticket
            </a>{" "}
            and our team will get back to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
