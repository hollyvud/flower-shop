import { useState } from 'react'

import Logo from '../icons/logo.svg?react'
import Favorite from '../icons/favoritter.svg?react'
import FavoriteActive from '../icons/favoritter-dark.svg?react'
import Kurv from '../icons/kurv-icon.svg?react'
import Account from '../icons/account.svg?react'
import Burger from '../icons/burger-button.svg?react'



function Header({ onCartOpen, cart, onFavoriteOpen, favorite }) {

  //mobile

  const [menuOpen, setMenuOpen] = useState(false);

  const clickOpenMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

  return (
    <>
      <header className="header">
        <div className="header__container container">
          <div className="header__logo logo">
            <div className="logo__container">
              <div className="logo__image">
                <Logo className="logo__image-inner"/>
              </div>
              <div className="logo__text">
                <h2 className="logo__name">Лепесток</h2>
              </div>
            </div>
          </div>
          <div className={menuOpen ? "header__overlay is-active" : "header__overlay"} data-js-header-overlay>
            <div className="header__navigation navigation">
              <div className="navigation__container">
                <ul className="navigation__menu">
                  <li className="navigation__menu-item">
                    <a href="#" className="navigation__menu-link">Авторские букеты</a>
                  </li>
                  <li className="navigation__menu-item">
                    <a href="#" className="navigation__menu-link">Собрать букет</a>
                  </li>
                  <li className="navigation__menu-item">
                    <a href="#" className="navigation__menu-link">О нас</a>
                  </li>
                  <li className="navigation__menu-item">
                    <a href="#" className="navigation__menu-link">Контакты</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__util util">
              <div className="util__container">
                <button className="util__button" onClick={onFavoriteOpen}>
                  <Favorite className="util__button-icon"/>
                </button>
                <button className="util__button">
                  <Account className="util__button-icon"/>
                </button>
              </div>
            </div>
          </div>
          <button className={menuOpen ? "header__burger-button burger-button visible-mobile is-active" : "header__burger-button burger-button visible-mobile"} data-js-header-burger-button type="button" aria-label="Open menu" title="Open menu" onClick={clickOpenMenu}>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
          </button>
          <div className="header__util util">
            <div className="util__container">
              <button className="util__button-kurv" onClick={onCartOpen}>
                <Kurv className="util__button-kurv-icon"/>
                <div className={totalPrice === 0 ? "util__cart--none" : "util__cart"}>
                  <p className="util__cart--quantity">{totalPrice} руб.</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header