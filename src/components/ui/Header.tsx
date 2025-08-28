"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { headerLink } from '@/utils';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === (href === "/" ? href : `${href}/`);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
          >
            Scale Infotech
          </Link>

          {/* Desktop Header */}
          <div className="hidden md:flex items-center space-x-8">
            {headerLink?.map((item) => (
              <Link
                key={item?.name}
                href={item?.href}
                className={`relative font-medium transition-colors duration-300 hover:text-primary ${isActive(item?.href)
                  ? 'text-primary'
                  : 'text-foreground/80'
                  }`}
              >
                {item?.name}
                {isActive(item?.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <div className="px-4 py-4 space-y-3">
              {headerLink?.map((item) => (
                <Link
                  key={item?.name}
                  href={item?.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-3 rounded-lg font-medium transition-colors duration-300 ${isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/80 hover:text-primary hover:bg-secondary'
                    }`}
                >
                  {item?.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center btn-primary mt-4"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Header;