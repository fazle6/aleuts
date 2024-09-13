"use client";

import Image from "next/image";
import NavLink from "./NavLink";
import Button from "../Button";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu
    setIsScrolling(true); // Set scrolling to true to change the background color
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);

      // Close the menu when the user scrolls if it is open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsMenuOpen(false)
    );
  }, []);

  const isHomePage = usePathname() === "/";

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        (isMenuOpen || isScrolling || !isHomePage)
          ? "bg-secondary shadow-lg py-3 px-2"
          : "backdrop-blur-sm py-1"
      }`}
    >
      <div className="lg:container lg:mx-auto px-4 mobile:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center text-sm">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={"/logo.svg"}
              width={138}
              height={52}
              alt="Logo"
              onClick={() => router.push("/")}
              className="cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/blogs">Blog</NavLink>
            <NavLink href="/supports">Support</NavLink>
            <NavLink href="#">Login</NavLink>
            <Button
              className="text-secondary bg-opacity-55"
              label="Get Access"
              withIcon={false}
            />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <RxHamburgerMenu
              onClick={handleOpen}
              className="cursor-pointer text-2xl text-white"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`${isMenuOpen ? "bg-secondary" : "bg-transparent"} py-2`}
        >
          <div className="px-4 pt-4 pb-2 space-y-2">
            <NavLink href="/" className="block text-white">
              Home
            </NavLink>
            <NavLink href="/products" className="block text-white">
              Products
            </NavLink>
            <NavLink href="/blogs" className="block text-white">
              Blog
            </NavLink>
            <NavLink href="/supports" className="block text-white">
              Support
            </NavLink>
            <NavLink href="#" className="block text-white">
              Login
            </NavLink>
            <Button
              className="text-secondary"
              label="Get Access"
              withIcon={false}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
