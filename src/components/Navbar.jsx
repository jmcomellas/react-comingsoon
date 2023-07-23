import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";

function Navbar() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const onNavMenuClick = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="absolute flex h-14 w-screen max-w-[1280px] items-center bg-[#536dfe] px-4 text-gray-200 shadow-lg md:h-20 md:px-8">
      <h1 className="w-full text-xl md:text-2xl">{t("brand")}</h1>
      <ul className="m-4 hidden md:flex md:flex-row">
        <li>
          <a href="#home">{t("navbar_home")}</a>
        </li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={onNavMenuClick} className="block md:hidden">
        {isNavMenuOpen ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>

      {/* Fullscreen mobile menu */}
      <div
        className={`top-0 flex h-screen w-screen flex-col bg-[#2f2e41] md:hidden ${
          isNavMenuOpen
            ? "fixed left-0 duration-200 ease-in-out"
            : "fixed left-[-100%] duration-200 ease-in-out"
        }`}
      >
        <div
          onClick={onNavMenuClick}
          className="absolute mx-4 my-8 place-self-end md:hidden"
        >
          <AiOutlineClose size={20} onClick={onNavMenuClick} />
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <a href="#home" className="text-xl">
            {t("navbar_home")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
