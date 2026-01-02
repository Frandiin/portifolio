import { Trans, useTranslation } from 'react-i18next';

type RichTextProps = {
  i18nKey: string;
  values?: Record<string, string | number>;
  components?: Record<string, React.ReactElement>;
  className?: string;
};

export function RichText({ i18nKey, values, components, className }: RichTextProps) {
  useTranslation();
  return (
    <p className={className}>
      <Trans i18nKey={i18nKey} values={values} components={components} />
    </p>
  );
}
