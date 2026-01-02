import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-500 text-sm">
          {t('footer.rights', { year: new Date().getFullYear() })}
        </p>
        <p className="text-slate-600 text-xs mt-2">
          {t('footer.madeWith')}
        </p>
      </div>
    </footer>
  );
};
