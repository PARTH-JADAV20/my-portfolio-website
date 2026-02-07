import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function Header({ onThemeToggle, themeName, sectionsTheme, currentSection, showMarker }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkColors = useMemo(() => {
    if (!sectionsTheme) return {};
    return Object.fromEntries(
      Object.entries(sectionsTheme).map(([id, cfg]) => [id, cfg?.dot || cfg?.icon || 'text-text-gray'])
    );
  }, [sectionsTheme]);

  const getMarkerColor = (sectionId) => {
    const section = sectionsTheme?.[sectionId];
    return section?.thumb || '#000000';
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-text-gray-dark">
            Parth Jadav
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative transition-colors font-medium ${linkColors[link.id] || 'text-text-gray'} hover:opacity-90`}
              >
                {link.label}
                {showMarker && currentSection === link.id && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300"
                    style={{ backgroundColor: getMarkerColor(link.id) }}
                  ></span>
                )}
              </a>
            ))}
            <button
              onClick={onThemeToggle}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-text-gray hover:border-muted-blue-300 hover:bg-gray-50 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Theme: {themeName}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-flat hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-text-gray" />
              ) : (
                <Menu className="w-5 h-5 text-text-gray" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`relative block py-2 px-4 transition-colors rounded-flat hover:bg-gray-50 font-medium ${linkColors[link.id] || 'text-text-gray'} hover:opacity-90`}
              >
                <span className="flex items-center gap-2">
                  {showMarker && currentSection === link.id && (
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                      style={{ backgroundColor: getMarkerColor(link.id) }}
                    ></span>
                  )}
                  {link.label}
                </span>
              </a>
            ))}
            <button
              onClick={() => { onThemeToggle?.(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 text-text-gray border border-gray-200 rounded-flat hover:border-muted-blue-300 hover:bg-gray-50 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Theme: {themeName}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}