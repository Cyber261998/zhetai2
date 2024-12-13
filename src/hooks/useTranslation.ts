import { useLanguage } from '../contexts/LanguageContext';
import { en } from '../locales/en';
import { zhCN } from '../locales/zh-CN';
import { zhTW } from '../locales/zh-TW';

const translations = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
};

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language];
}