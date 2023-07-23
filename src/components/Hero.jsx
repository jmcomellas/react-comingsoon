import Reac from "react";
import { useTranslation } from "react-i18next";
import imgdev from "../assets/developer.svg";

function Hero() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <img src={imgdev} className="fluid h-40 md:h-60" />
      <h1 className="mb-8 mt-12 text-3xl font-bold md:text-4xl">
        {t("ongoing_title")}
      </h1>
      <p className="text-lg md:text-xl">{t("ongoing_body")}</p>
    </div>
  );
}

export default Hero;
