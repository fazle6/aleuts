"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  return (
    <Link href={href} className={`text-white hover:no-underline font-medium underline ${className}`} prefetch>
      {children}
    </Link>
  );
};

export default NavLink;
