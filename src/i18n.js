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
                    "welcome": "Hello, Welcome",
                    "under-construction": "This page is under construction",
                }
            },
            nl: {
                translation: {
                    "welcome": "Hallo, Welkom",
                    "under-construction": "Deze pagina is in aanbouw",
                }
            },
            ru: {
                translation: {
                    "welcome": "Привет, Добро пожаловать",
                    "under-construction": "Эта страница находится в стадии разработки",
                }
            },
            fa: {
                translation: {
                    "welcome": "سلام، خوش آمدید",
                    "under-construction": "این صفحه در حال ساخت است",
                }
            }
        }

    })

export default i18next;