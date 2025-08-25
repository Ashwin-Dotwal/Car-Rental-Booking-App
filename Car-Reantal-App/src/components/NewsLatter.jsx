import React from "react";

const NewsLatter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 max-md:px-4 my-10 mb-40">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest offers, new arrivals, and exclusive
        discounts
      </p>

      <form className="flex items-center max-w-2xl w-full h-12">
        <input
          className="border border-gray-300 h-full w-full px-3 text-gray-600 rounded-l-md outline-none focus:border-primary transition"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="px-8 md:px-12 h-full text-white bg-primary hover:bg-primary-dull transition-colors rounded-r-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLatter;
