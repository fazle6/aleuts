"use client";

import PlanCard from "@/components/PlanCard";

const ProductsPage = () => {
  // Array of plans
  const plans = [
    {
      title: "Starter",
      description: "Ideal for individuals getting started with our platform.",
      price: 20,
      features: [
        { name: "10 users", included: true },
        { name: "2GB storage", included: true },
        { name: "Email support", included: true },
        { name: "Help center access", included: false },
      ],
    },
    {
      title: "Pro",
      description: "Best for growing businesses and teams.",
      price: 60.99,
      features: [
        { name: "50 users", included: true },
        { name: "10GB storage", included: true },
        { name: "Priority email support", included: true },
        { name: "Help center access", included: true },
      ],
    },
    {
      title: "Enterprise",
      description: "Advanced features for large organizations.",
      price: 99.9,
      features: [
        { name: "Unlimited users", included: true },
        { name: "100GB storage", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Help center access", included: true },
      ],
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Select a plan that fits your needs. Simple, transparent pricing.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>

        {/* Additional section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Need a custom plan?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Contact us
            </a>{" "}
            for a tailored solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
