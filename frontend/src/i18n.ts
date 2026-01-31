import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入翻译文件
import jp from '../i18n/locales/jp.json';
import zhCN from '../i18n/locales/zh-CN.json';
import en from '../i18n/locales/en.json';
import kr from '../i18n/locales/kr.json';
import ru from '../i18n/locales/ru.json';
import Fa from '../i18n/locales/Fa.json';
import zhTW from '../i18n/locales/zh-TW.json';


// 配置i18next
i18n
  // 检测用户语言
  .use(LanguageDetector)
  // 将i18n实例传递给react-i18next
  .use(initReactI18next)
  // 初始化i18next
  .init({
    resources: {
      'jp': {
        translation: jp,
      },
      'zh-TW': {
        translation: zhTW,
      },
      'Fa': {
        translation: Fa,
      },
      'ru': {
        translation: ru,
      },
      'kr': {
        translation: kr,
      },
      'zh-CN': {
        translation: zhCN,
      },
      en: {
        translation: en,
      },
    },
    fallbackLng: 'jp',
    debug: import.meta.env.MODE === 'development',
    interpolation: {
      escapeValue: false, // 不转义HTML
    },
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'localStorage'],
      caches: ['localStorage'],
    },
  });

export default i18n;
