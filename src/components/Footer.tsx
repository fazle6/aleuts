"use client";

import React from "react";
import Input from "./Input";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-secondary w-full text-white">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Logo and Description */}
        <div className="space-y-4 lg:col-span-1 md:col-span-2">
          <Image src="/logo.svg" width={138} height={52} alt="Logo" />
          <p className="text-off-white text-sm">
            Collaboration platform for modern teams
          </p>
        </div>

        {/* Company Links */}
        <div className="space-y-3">
          <h3 className="text-primary text-lg font-semibold">Company</h3>
          <ul className="space-y-2 text-off-white text-sm">
            <li
              onClick={() => router.push("/products")}
              className="cursor-pointer"
            >
              Products
            </li>
            <li
              onClick={() => router.push("/blogs")}
              className="cursor-pointer"
            >
              Blog
            </li>
            <li
              onClick={() => router.push("/supports")}
              className="cursor-pointer"
            >
              Support
            </li>
          </ul>
        </div>

        {/* Features Links */}
        <div className="space-y-3">
          <h3 className="text-primary text-lg font-semibold">Features</h3>
          <ul className="space-y-2 text-off-white text-sm">
            <li>Screen Sharing</li>
            <li>iOS & Android Apps</li>
            <li>File Sharing</li>
            <li>User Management</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <h3 className="text-primary text-lg font-semibold cursor-pointer" onClick={() => router.push('/supports')}>Contact Us</h3>
          <ul className="space-y-2 text-off-white text-sm">
            <li>info@teamapp.com</li>
            <li>1-800-200-300</li>
            <li>
              1010 Sunset Blvd.
              <br />
              Palo Alto, California
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-4">
          <h3 className="text-primary text-lg font-semibold">
            Stay up to date
          </h3>
          <p className="text-off-white text-sm">Subscribe to our newsletter</p>
          <Input
            label="newsletter"
            placeholder="Email"
            aria-label="Email"
            className="text-black"
          />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-4 text-center text-off-white text-sm">
        &copy; {new Date().getFullYear()} Team Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
