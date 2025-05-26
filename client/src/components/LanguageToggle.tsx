import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  
  return (
    <div className="flex space-x-2">
      {['es', 'en'].map(lang => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            i18n.language === lang 
              ? 'bg-emerald-500 text-white' 
              : 'text-gray-300 hover:text-white'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}