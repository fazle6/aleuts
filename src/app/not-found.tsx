"use client";

import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
        <p className="text-2xl font-bold tracking-tight text-secondary sm:text-4xl">
          Uh-oh!
        </p>
        <p className="mt-4 text-gray-500 ">We can&apos;t find that page.</p>
        <Button href="/" className="mt-6 inline-bloc" label="Go back home" />
      </div>
    </div>
  );
};

export default NotFound;
