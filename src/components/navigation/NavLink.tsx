import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = '' }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className={`text-gray-600 hover:text-blue-600 ${className}`}
    >
      {children}
    </a>
  );
}