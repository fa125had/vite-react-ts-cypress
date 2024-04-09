import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';


i18next
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    "hello": "Hello, Welcome",
                }
            },
            nl: {
                translation: {
                    "hello": "Hallo, Welkom",
                }
            },
            ru: {
                translation: {
                    "hello": "Привет, Добро пожаловать",
                }
            },
            fa: {
                translation: {
                    "hello": "سلام، خوش آمدید",
                }
            }
        }

    })

export default i18next;