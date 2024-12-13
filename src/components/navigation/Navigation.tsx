import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { NavLink } from './NavLink';

interface NavigationProps {
  className?: string;
  itemClassName?: string;
}

export function Navigation({ className = '', itemClassName = '' }: NavigationProps) {
  const t = useTranslation();
  const navigationLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#rates", label: t.nav.rates },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact }
  ];

  return (
    <div className={className}>
      {navigationLinks.map((link) => (
        <NavLink 
          key={link.href} 
          href={link.href}
          className={itemClassName}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}