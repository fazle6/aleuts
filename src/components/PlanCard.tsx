"use client";

import React from "react";
import { GoCheck } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

interface PlanCardProps {
  title: string;
  description: string;
  price: number;
  features: { name: string; included: boolean }[];
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  price,
  features,
}) => {
  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-md">
      <div className="p-6 sm:px-8">
        <h2 className="text-lg font-medium text-gray-900">
          {title}
          <span className="sr-only"> Plan</span>
        </h2>

        <p className="mt-2 text-gray-700">{description}</p>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
            ${price}
          </strong>
          <span className="text-sm font-medium text-gray-700"> /month</span>
        </p>

        <a
          className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
          href="#"
        >
          Get Started
        </a>
      </div>

      <div className="p-6 sm:px-8">
        <p className="text-lg font-medium text-gray-900 sm:text-xl">
          What&apos;s included:
        </p>
        <ul className="mt-2 space-y-2 sm:mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-1">
              {feature.included ? <GoCheck /> : <RxCross1 />}
              <span className="text-gray-700">{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
