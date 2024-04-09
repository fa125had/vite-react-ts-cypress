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
                    "hello": "Hello",
                }
            },
            es: {
                translation: {
                    "hello": "Hola",
                }
            },
            fr: {
                translation: {
                    "hello": "Bonjour",
                }
            },
            tr: {
                translation: {
                    "hello": "Merhaba",
                }
            },
            de: {
                translation: {
                    "hello": "Hallo",
                }
            },
            it: {
                translation: {
                    "hello": "Ciao",
                }
            },
            pt: {
                translation: {
                    "hello": "Olá",
                }
            },
            ru: {
                translation: {
                    "hello": "Привет",
                }
            },
            zh: {
                translation: {
                    "hello": "你好",
                }
            },
            ja: {
                translation: {
                    "hello": "こんにちは",
                }
            },
            ko: {
                translation: {
                    "hello": "안녕하세요",
                }
            },
            ar: {
                translation: {
                    "hello": "مرحبا",
                }
            },
            hi: {
                translation: {
                    "hello": "नमस्ते",
                }
            },
            bn: {
                translation: {
                    "hello": "হ্যালো",
                }
            },
            ur: {
                translation: {
                    "hello": "ہیلو",
                }
            },
            fa: {
                translation: {
                    "hello": "سلام",
                }
            },
            vi: {
                translation: {
                    "hello": "Xin chào",
                }
            },
            th: {
                translation: {
                    "hello": "สวัสดี",
                }
            },
            ms: {
                translation: {
                    "hello": "Hello",
                }
            },
            fil: {
                translation: {
                    "hello": "Hello",
                }
            },
            id: {
                translation: {
                    "hello": "Halo",
                }
            },
            nl: {
                translation: {
                    "hello": "Hallo",
                }
            },
            pl: {
                translation: {
                    "hello": "Cześć",
                }
            },
            ro: {
                translation: {
                    "hello": "Salut",
                }
            },
            hu: {
                translation: {
                    "hello": "Helló",
                }
            },
            sv: {
                translation: {
                    "hello": "Hej",
                }
            },
            cs: {
                translation: {
                    "hello": "Ahoj",
                }
            },
            sk: {
                translation: {
                    "hello": "Ahoj",
                }
            },
            el: {
                translation: {
                    "hello": "Γεια σας",
                }
            },
            bg: {
                translation: {
                    "hello": "Здравейте",
                }
            },
            sr: {
                translation: {
                    "hello": "Здраво",
                }
            },
            hr: {
                translation: {
                    "hello": "Zdravo",
                }
            },
            sl: {
                translation: {
                    "hello": "Zdravo",
                }
            },
            et: {
                translation: {
                    "hello": "Tere",
                }
            },
            lv: {
                translation: {
                    "hello": "Sveiki",
                }
            },
            lt: {
                translation: {
                    "hello": "Labas",
                }
            },
            fi: {
                translation: {
                    "hello": "Hei",
                }
            },
            da: {
                translation: {
                    "hello": "Hej",
                }
            },
            is: {
                translation: {
                    "hello": "Halló",
                }
            },
        }

    })

export default i18next;