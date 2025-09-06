import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          i18n.language === 'en' ? 'bg-primary text-white' : 'text-white hover:bg-white/20'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('sw')}
        className={`px-3 py-1 text-sm rounded-md transition-colors ${
          i18n.language === 'sw' ? 'bg-primary text-white' : 'text-white hover:bg-white/20'
        }`}
      >
        SW
      </button>
    </div>
  );
};

export default LanguageSwitcher;