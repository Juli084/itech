import { Menu, X, MessageCircleMore } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Assistência Técnica', href: '/assistencia' },
    { label: 'Desenvolvimento Web', href: '/desenvolvimento' },
    { label: 'Tráfego Pago', href: '/trafego' },
  ];

  return (
    <header className="bg-white text-[#1d1d1f] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Marca */}
        <a href="/" className="text-2xl font-bold tracking-tight">
          iTech
        </a>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-blue-600 transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5515997534529"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition"
          >
            <MessageCircleMore className="w-4 h-4" />
            WhatsApp
          </a>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-2 text-sm border-b border-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5515997534529"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
