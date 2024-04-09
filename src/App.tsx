import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cypressLogo from "/cypress.svg";
import i18nLogo from "/i18n.png";
import tsLogo from "/typescript.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const langs: { [key: string]: string } = {
    en: "English",
    nl: "Dutch",
    ru: "Russian",
    fa: "Persian",
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://typescriptlang.org" target="_blank">
          <img src={tsLogo} className="logo ts" alt="TypeScript logo" />
        </a>
        <a href="https://cypress.io" target="_blank">
          <img src={cypressLogo} className="logo cypress" alt="Cypress logo" />
        </a>
        <a href="https://react.i18next.com" target="_blank">
          <img src={i18nLogo} className="logo i18n" alt="i18n logo" />
        </a>
      </div>
      <h1>{t("hello")}</h1>
      <div className="card">
        {Object.keys(langs).map((lang) => (
          <button
            style={{ marginBlock: "4px" }}
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
          >
            {langs[lang]}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
