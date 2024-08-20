import React from "react";
import navlogo from "../../assets/nav.png";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  const footer = [
    "Все права защищены © 2015 интернет-магазин AIKEA.BY Беларусь.",
    "УНП 191828159 ИП Парейко В.С., регистрационный номер в торговом реестре 158299",
    "Политика конфиденциальности",
  ];
  const footer1 = [
    "Главная | Каталог | Товары в наличиинск",
    "Скидки | Популярное | Вдохновение",
    "Доставка | Услуги | Условия",
    "Контакты | Вставить | Cписок покупок",
    "Корзина | Личный кабинет | Избранное",
  ];
  const footer2 = [
    "г.Минск",
    "Ул. Первомайская, Д. 1, Кв. 43",
    "+ 375 434 847 28 84",
    "+ 375 448 473 09 48",
    "ikeaekspress@gmail.com",
  ];
  return (
    <div className="bg-slate-100 pt-16 pb-10">
      <div className="container mx-auto px-4">
        <img className="mb-6" src={navlogo} alt="" />
        <div className="flex flex-col md:flex-row gap-12 footer">
          <ul className="footer__collection w-full md:w-1/4 leading-normal flex flex-col gap-3 text3">
            <p className="text-xl font-semibold">Информация</p>
            {footer?.map((el, index) => (
              <li key={index} className="footer__item text-sm">
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
          <ul className="footer__collection w-full md:w-1/4 leading-normal flex flex-col gap-3 footer__p">
            <p className="text-xl font-semibold">Меню</p>
            {footer1?.map((el, index) => (
              <li key={index} className="footer__item text-sm">
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
          <ul className="footer__collection w-full md:w-1/4 flex-end leading-normal flex flex-col gap-3 text3">
            <p className="text-xl font-semibold">Контакты</p>
            {footer2?.map((el, index) => (
              <li key={index} className="footer__item text-sm">
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
          <ul className="footer__collection w-full md:w-1/4 flex justify-center md:justify-end items-end text1 display:none;">
            <FaInstagram className="  text-5xl text-red-500 footer__p" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
