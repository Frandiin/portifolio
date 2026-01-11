import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NAV_LINKS } from '../constants';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="rounded-lg bg-indigo-500/10 p-2">
              <Code2 className="h-6 w-6 text-indigo-400" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-100">
              Dev<span className="text-indigo-400">Wellington</span>
            </span>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-slate-300 hover:text-indigo-400"
              >
                {t(link.key)}
              </a>
            ))}

            <div className="flex items-center gap-1 rounded-full bg-slate-800 p-1">
              <button
                onClick={() => i18n.changeLanguage('pt')}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                  i18n.language === 'pt'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                  i18n.language === 'en'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20"
            >
              {t('nav.hireMe')}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center gap-1 rounded-full bg-slate-800 p-1">
              <button
                onClick={() => i18n.changeLanguage('pt')}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
                  i18n.language === 'pt'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
                  i18n.language === 'en'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 transition-colors hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-slate-800 bg-slate-950 lg:hidden"
          >
            <div className="space-y-4 px-4 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-slate-300 hover:text-indigo-400"
                >
                  {t(link.key)}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                {t('nav.hireMe')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
