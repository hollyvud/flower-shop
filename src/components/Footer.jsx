import { useState } from 'react'

import ElipsIcon from '../icons/elips.svg?react';
import Logo from '../icons/logo.svg?react';


function Footer() {

  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__contacts contacts">
            <div className="contacts__header">
              <h2 className="contacts__title">Наши контакты</h2>
            </div>
            <div className="contacts__body">
              <div className="contacts__menu">
                <div className="contacts__list">
                  <div className="contacts__list-item">
                    <div className="contacts__icon">
                      <ElipsIcon className="contacts__icon-inner"/>
                    </div>
                    <div className="contacts__heading">
                      <p className="contacts__heading-inner">Адрес студии</p>
                    </div>
                    <div className="contacts__text">
                      <p className="contacts__text-inner">г. Алматы, ул. Цветочная, 15</p>
                    </div>
                  </div>
                  <div className="contacts__list-item">
                    <div className="contacts__icon">
                      <ElipsIcon className="contacts__icon-inner"/>
                    </div>
                    <div className="contacts__heading">
                      <p className="contacts__heading-inner">Часы работы</p>
                    </div>
                    <div className="contacts__text">
                      <p className="contacts__text-inner">Пн–Вс: 9:00 – 21:00</p>
                    </div>
                  </div>
                  <div className="contacts__list-item">
                    <div className="contacts__icon">
                      <ElipsIcon className="contacts__icon-inner"/>
                    </div>
                    <div className="contacts__heading">
                      <p className="contacts__heading-inner">Телефон</p>
                    </div>
                    <div className="contacts__text">
                      <p className="contacts__text-inner"> +7 (777) 123-45-67</p>
                    </div>
                  </div>
                </div>
                <div className="contacts__list">
                  <div className="contacts__list-item">
                    <div className="contacts__icon">
                      <ElipsIcon className="contacts__icon-inner"/>
                    </div>
                    <div className="contacts__heading">
                      <p className="contacts__heading-inner">E-mail</p>
                    </div>
                    <div className="contacts__text">
                      <p className="contacts__text-inner">hello@flowerdream.kz</p>
                    </div>
                  </div>
                  <div className="contacts__list-item">
                    <div className="contacts__icon">
                      <ElipsIcon className="contacts__icon-inner"/>
                    </div>
                    <div className="contacts__heading">
                      <p className="contacts__heading-inner">WhatsApp / Telegram</p>
                    </div>
                    <div className="contacts__text">
                      <p className="contacts__text-inner"> +7 (777) 123-45-67</p>
                    </div>
                  </div>
                  <div className="contacts__list-item">
                    <div className="contacts__icon">
                      <ElipsIcon className="contacts__icon-inner"/>
                    </div>
                    <div className="contacts__heading">
                      <p className="contacts__heading-inner">Мы в соцсетях</p>
                    </div>
                    <div className="contacts__text">
                      <p className="contacts__text-inner"> [Instagram] • [Telegram] • [WhatsApp]</p>
                    </div>
                  </div>
                </div>
              </div>
              <section className="contacts__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.0686261198778!2d65.56004396634539!3d57.133350415278336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43bbe1142a8cf3d9%3A0xf0c2cfd1bc570253!2z0KLQpiDQn9GA0LXQvNGM0LXRgA!5e0!3m2!1sru!2sru!4v1789752931413!5m2!1sru!2sru"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Наш магазин на карте"
                />
              </section>
            </div>
          </div>
          <div className="footer__body">
            <div className="logo__container">
              <div className="logo__image">
                <Logo className="logo__image-inner--dark"/>
              </div>
              <div className="logo__text">
                <h2 className="logo__name">Лепесток</h2>
              </div>
            </div>
            <div className="footer__menu">
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">Авторские букеты</a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">Собрать букет</a>
                </li>
                <li className="footer__list-item">
                  <a href="" className="footer__list-link">О нас</a>
                </li>
              </ul>
              <div className="footer__contact">
                <a href="" className="footer__list-link"> +7 (777) 123-45-67</a>
                <a href="" className="footer__list-link"> hello@flowerdream.kz</a>
                <a href="" className="footer__list-link"> [Instagram] • [Facebook] • [WhatsApp]</a>
              </div>
            </div>
            <div className="footer__save">
              <span className="footer__text">© 2025 Лепесток.</span>
              <span className="footer__text-one">Все права защищены.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

