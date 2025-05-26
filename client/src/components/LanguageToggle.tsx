import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <div className="flex items-center space-x-1 bg-slate-800 rounded-lg p-1">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
            i18n.language === lang.code
              ? 'bg-emerald-500 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
}