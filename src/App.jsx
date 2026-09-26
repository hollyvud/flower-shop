import { useState } from 'react'
import './App.css'
import './styles/main.scss'

import { Modal } from "./components/modal/AllBuket";
import { ModalFlow } from "./components/modal/AllFlow";
import { ModalFavorite } from "./components/modal/Favorite";

import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart'


import banner from './images/banner.png';
import bannerLaptop from './images/banner-laptop.png';

import buketOne from './images/buket-1.png';
import buketTwo from './images/buket-2.png';
import buketThree from './images/buket-3.png';
import flowOne from './images/flow-1.png';
import flowTwo from './images/flow-2.png';
import flowThree from './images/flow-3.png';
import flowFour from './images/flow-4.png';

import FlowIconOne from './icons/flow-icon-1.svg?react';
import FlowIconTwo from './icons/flow-icon-2.svg?react';
import FlowIconThree from './icons/flow-icon-3.svg?react';
import FlowIconFour from './icons/flow-icon-4.svg?react';
import FlowIconFive from './icons/flow-icon-5.svg?react';
import FlowIconSix from './icons/flow-icon-6.svg?react';

import Arrow from './icons/Vector.svg?react';
import Favorite from './icons/favoritter-light.svg?react';
import FavoriteActive from './icons/favoritter-dark.svg?react';


function App() {

  const buketsAll = [
    {id: 1,name:"Первый букет",src:buketOne, price:1234, desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", flow: ["роза", "тюльпан", "говно", "гартензия"], width:123, height: 234},
    {id: 2,name:"Второй букет",src:buketTwo, price:23032, desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", flow: ["роза", "тюльпан", "говно", "гартензия"], width:123, height: 234},
    {id: 3,name:"Третий букет",src:buketThree, price:2, desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", flow: ["роза", "тюльпан", "говно", "гартензия"], width:123, height: 234},
    {id: 4,name:"Четвертый букет",src:buketThree, price:234353, desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", flow: ["роза", "тюльпан", "говно", "гартензия"], width:123, height: 234},
    {id: 5,name:"Пятый букет",src:buketThree, price:343, desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", flow: ["роза", "тюльпан", "говно", "гартензия"], width:123, height: 234},
    {id: 6,name:"Шестой букет",src:buketThree, price:1000000, desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", flow: ["роза", "тюльпан", "говно", "гартензия"], width:123, height: 234},
    {id: 7,name:"Седьмой букет",src:buketThree, price:345, desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", flow: ["роза", "тюльпан", "говно", "гартензия"], width:123, height: 234},
  ];

    const flowsAll = [
    {id: 8,name:"Первые цветы",src:flowOne, price:"1234", desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", country: "Россия", color: "Желтый"},
    {id: 9,name:"Вторые цветы",src:flowTwo, price:"23032", desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", country: "Россия", color: "Розовый"},
    {id: 10,name:"Третьи цветы",src:flowThree, price:"2", desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", country: "Россия", color: "Красный"},
    {id: 11,name:"Четвертые цветы",src:flowFour, price:"234353", desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", country: "Россия", color: "Фиолетовый"},
    {id: 12,name:"Пятые цветы",src:flowFour, price:"343", desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", country: "Россия", color: "Фиолетовый"},
    {id: 13,name:"Шестые цветы",src:flowFour, price:"1000000", desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", country: "Россия", color: "Фиолетовый"},
    {id: 14,name:"Седьмые цветы",src:flowFour, price:"345", desc: "Так то так то, состоит из этого и этого. Служит долго и вообще он очень красивый. Мы его очень сильно люим и дорожим, вообще жалко вам отдавать, но так сложилась судьба, чтож поделать. Ну всё, забирайте и ухадите, не хочу вас больше видеть, гады..", country: "Россия", color: "Фиолетовый"},
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalFlowOpen, setIsModalFlowOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);


  const [cartContent, setCartContent] = useState([]);
  const [favoriteContent, setFavoriteContent] = useState([]);


  const addToFavorite = (item) => {
  setFavoriteContent((currentFavorite) => {
    const existingItem = currentFavorite.find(
      (favoriteItem) => favoriteItem.id === item.id
    );

    if (existingItem) {
      return currentFavorite.filter((noItem) => noItem.id !== item.id);
    }

    return [
      ...currentFavorite,
      item
    ];
  });
};

  

  const addToCart = (item) => {
    setCartContent((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem){
        return currentCart.map((cartItem) => 
          cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        );
      }
      return [
        ...currentCart,
        {
          ...item,
          quantity:1
        }
      ]
    })
  };

  const removeFromCart = (itemNeces) => {
    setCartContent((currentCart) =>
      currentCart.map((item) => 
        item.id === itemNeces.id ? {...item, quantity: item.quantity - 1} : item
      )
    );
    if (itemNeces.quantity === 1){
      setCartContent((currentCart) =>
      currentCart.filter((item) => item.id !== itemNeces.id))
    }
  };

  return (
    <>
      <ModalFavorite isOpen={isFavoriteOpen} onClose={() => setIsFavoriteOpen(false)}>
        <div className="modal__subtitle">
          <p className="modal__text">Выберите свой букет.</p>
        </div>
        <div className="modal__catalog">
          {favoriteContent.map((item) => (
            <div className="modal__card" key={item.id}>
              <picture className="modal__picture">
                <img src={item.src} className="modal__picture--img" alt="" />
              </picture>
              <div className="modal__content">
                <div className="modal__body">
                  <div className="modal__heading">
                    <h5 className="modal__name">{item.name}</h5>
                  </div>
                  <div className="modal__object">
                    <div className="modal__comparue">
                      <p className="modal__comparue--text">Состав букета:</p>
                      <p className='modal__bold'>
                        {item.flow?.join(", ")}
                      </p>
                    </div>
                    <div className="modal__size">
                      <p className="modal__height">Высота: <span className='modal__bold'>{item.height}см</span></p>
                      <p className="modal__width">Ширина: <span className='modal__bold'>{item.width}см</span></p>
                    </div>
                  </div>
                  <div className="modal__buy">
                    <h5 className="modal__title modal__price">{item.price} руб.</h5>
                    <div className="modal__buttons">
                      <div className="promo__button">
                        <button className="promo__btn" aria-label="Добавить в корзину" onClick={() => addToCart(item)}><span className='promo__btn--inner'>В корзину</span></button>
                      </div>
                      <button className="head__button" aria-label="Добавить в избранное" onClick={() => addToFavorite(item)}>
                        <span className='head__button--inner'>Убрать из избранного</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ModalFavorite>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal__subtitle">
          <p className="modal__text">Выберите свой букет.</p>
        </div>
        <div className="modal__catalog">
          {buketsAll.map((buket) => (
            <div className="modal__card" key={buket.id}>
              <picture className="modal__picture">
                <img src={buket.src} className="modal__picture--img" alt="" />
              </picture>
              <div className="modal__content">
                <div className="modal__body">
                  <div className="modal__heading">
                    <h5 className="modal__name">{buket.name}</h5>
                    <p className="modal__desc">{buket.desc}</p>
                  </div>
                  <div className="modal__object">
                    <div className="modal__comparue">
                      <p className="modal__comparue--text">Состав букета:</p>
                      <p className='modal__bold'>
                        {buket.flow?.join(", ")}
                      </p>
                    </div>
                    <div className="modal__size">
                      <p className="modal__height">Высота: <span className='modal__bold'>{buket.height}см</span></p>
                      <p className="modal__width">Ширина: <span className='modal__bold'>{buket.width}см</span></p>
                    </div>
                  </div>
                  <div className="modal__buy">
                    <h5 className="modal__title modal__price">{buket.price} руб.</h5>
                    <div className="modal__buttons">
                      <div className="promo__button">
                        <button className="promo__btn" aria-label="Добавить в корзину" onClick={() => addToCart(buket)}><span className='promo__btn--inner'>В корзину</span></button>
                      </div>
                      <button className="head__button" aria-label="Добавить в избранное" onClick={() => addToFavorite(buket)}>
                        <span className='head__button--inner'>В избранное</span>
                        {favoriteContent.some((item) => item.id ===buket.id) ? (
                          <FavoriteActive className="card__favorite-icon" />
                        ) : (
                          <Favorite className="card__favorite-icon" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      <ModalFlow isOpen={isModalFlowOpen} onClose={() => setIsModalFlowOpen(false)}>
        <div className="modal__subtitle">
          <p className="modal__text">Выберите свои цветы.</p>
        </div>
        <div className="modal__catalog">
          {flowsAll.map((flow) => (
            <div className="modal__card" key={flow.id}>
              <picture className="modal__picture">
                <img src={flow.src} className="modal__picture--img" alt="" />
              </picture>
              <div className="modal__content">
                <div className="modal__body">
                  <div className="modal__heading">
                    <h5 className="modal__name">{flow.name}</h5>
                    <p className="modal__desc">{flow.desc}</p>
                  </div>
                  <div className="modal__object">
                    <div className="modal__comparue">
                      <p className="modal__comparue--text">Страна: <span className='modal__bold'>{flow.country}</span></p>
                    </div>
                    <div className="modal__size">
                      <p className="modal__comparue--text">Цвет: <span className='modal__bold'>{flow.color}</span></p>
                    </div>
                  </div>
                  <div className="modal__buy">
                    <h5 className="modal__title modal__price">{flow.price} руб.</h5>
                    <div className="modal__buttons">
                      <div className="promo__button">
                        <button className="promo__btn" aria-label="Добавить в корзину" onClick={() => addToCart(flow)}><span className='promo__btn--inner'>В корзину</span></button>
                      </div>
                      <button className="head__button" aria-label="Добавить в избранное" onClick={() => addToFavorite(flow)}>
                        <span className='head__button--inner'>В избранное</span>
                        {favoriteContent.some((item) => item.id ===flow.id) ? (
                          <FavoriteActive className="card__favorite-icon" />
                        ) : (
                          <Favorite className="card__favorite-icon" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ModalFlow>
      <Header onCartOpen={() => setIsCartOpen(!isCartOpen)} cart={cartContent} onFavoriteOpen={() => setIsFavoriteOpen(!isFavoriteOpen)}/>
      <Cart isOpen={isCartOpen} cart={cartContent} onClose={() => setIsCartOpen(false)} onRemove={removeFromCart} toAdd={addToCart}/>
      <main>
        <section className='promo'>
          <picture className="promo__picture">
            <source media="(min-width: 768.98px) and (max-width: 1024px)" srcSet={bannerLaptop}/>
            <img src={banner} className="promo__img" alt=""/>
          </picture>
          <div className="promo__inner container">
            <div className="promo__content">
              <div className="promo__heading">
                <h1 className="promo__title">Тёплое внимание в каждом букете</h1>
              </div>
              <div className="promo__body">
                <h2 className="promo__subtitle">Изысканные композиции, наполненные заботой</h2>
              </div>
              <div className="promo__button">
                <button className="promo__btn"><span className='promo__btn--inner'>Выбрать букет</span></button>
              </div>
            </div>
          </div>
        </section>
        <section className="catalog">
          <div className="catalog__container container">
            <div className="catalog__head head">
              <h2 className="head__title">Авторские букеты</h2>
              <button className="head__button" onClick={() => setIsModalOpen(true)}>
                <span className="head__button--inner">Смотреть все</span>
                <Arrow className="head__button--arrow" />
              </button>
            </div>
            <div className="catalog__body">
              <div className="catalog__cards">
                {buketsAll.slice(0, 3).map((buket, index) => (
                  <div className={index === 0 ? "catalog__card--main card" : "catalog__card card"} key={buket.id}>
                    <picture className="card__picture">
                      <img src={buket.src} className="card__img" alt={buket.name}/>
                    </picture>
                    <div className="card__utils">
                      <button className="card__favorite" aria-label={`Добавить ${buket.name} в избранное`} onClick={() => addToFavorite(buket)}>
                        {favoriteContent.some((item) => item.id ===buket.id) ? (
                          <FavoriteActive className="card__favorite-icon" />
                        ) : (
                          <Favorite className="card__favorite-icon" />
                        )}
                      </button>
                      <div className="card__body card__body--brown">
                        <h5 className="card__title">{buket.name}</h5>
                        <div className="card__buy">
                          <h5 className="card__title card__price">{buket.price} руб.</h5>
                          {cartContent.some((item) => item.id === buket.id) ? (
                            <div className="card__quantity">
                                <button className={index === 0 ? "card__delete" : "card__delete--mini"} onClick={() => removeFromCart(cartContent.find((item) => item.id === buket.id))}>-</button>
                                <p className="card__number">
                                  {cartContent.find((item) => item.id === buket.id)?.quantity}
                                </p>
                                <button className={index === 0 ? "card__add" : "card__add--mini"} onClick={() => addToCart(buket)}>+</button>
                            </div>
                          ) : (
                            <button className="card__button" onClick={() => addToCart(buket)}>
                              <span className="card__button--inner">В корзину</span>
                            </button>
                          )}
                          {/*<button className="card__button" onClick={() => addToCart(buket)}><span className="card__button--inner">В корзину</span></button>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="catalog__description">
                <p className="catalog__text">«Авторские букеты — это искусство, рожденное из вдохновения и мастерства флористов. Мы соединяем нежность природы с нашей любовью к красоте, чтобы каждый букет был уникальным. Наши композиции создаются для тех, кто ценит особенные моментыи хочет дарить впечатления, а не просто цветы.»</p>
              </div>
            </div>
          </div>
        </section>
        <section className="catalog--light">
          <div className="catalog__container container">
            <div className="catalog__head head">
              <h2 className="head__title">Собрать букет</h2>
              <button className="head__button--light" onClick={() => setIsModalFlowOpen(true)}><span className="head__button--inner">Смотреть все</span>
                <Arrow className="head__button--arrow" />
              </button>
            </div>
            <div className="catalog--light__body">
              <div className="catalog__cards">
                {flowsAll.slice(0, 4).map((flow) => (
                  <div className="catalog--light__card card" key={flow.id}>
                    <picture className="card__picture">
                      <img src={flow.src} className="card__img" alt={flow.name}/>
                    </picture>
                    <div className="card__utils">
                      <button className="card__favorite--light" aria-label={`Добавить ${flow.name} в избранное`} onClick={() => addToFavorite(flow)}>
                        {favoriteContent.some((item) => item.id ===flow.id) ? (
                          <FavoriteActive className="card__favorite-icon" />
                        ) : (
                          <Favorite className="card__favorite-icon" />
                        )}
                      </button>
                      <div className="card__body card__body--silver">
                        <h5 className="card__title--light">{flow.name}</h5>
                        <div className="card__buy">
                          <h5 className="card__title--light card__price">{flow.price} руб.</h5>
                          {cartContent.some((item) => item.id === flow.id) ? (
                            <div className="card__quantity">
                                <button className="card__delete--mini--light" onClick={() => removeFromCart(cartContent.find((item) => item.id === flow.id))}>-</button>
                                <p className="card__number">
                                  {cartContent.find((item) => item.id === flow.id)?.quantity}
                                </p>
                                <button className="card__add--mini--light" onClick={() => addToCart(flow)}>+</button>
                            </div>
                          ) : (
                            <button className="card__button" onClick={() => addToCart(flow)}>
                              <span className="card__button--inner">В корзину</span>
                            </button>
                          )}
                          {/*<button className="card__button--light" onClick={() => addToCart(flow)}><span className="card__button--inner-light">В корзину</span></button>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="catalog--light__description">
                <p className="catalog__text">Каждый букет может быть отражением вашей истории. Подберите любимые цветы, оттенки и форму — и мы создадим композицию, которая подчеркнёт вашу индивидуальность. Здесь всё зависит только от ваших желаний.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="about__container container">
            <div className="about__head">
              <h2 className="about__title">О нас</h2>
            </div>
            <div className="about__body">
              <div className="about__menu">
                <div className="about__list">
                  <div className="about__list-item">
                    <div className="about__img">
                      <FlowIconOne className='about__img-content'/>
                    </div>
                    <div className="about__header">
                      <p className="about__subtitle">Наша история</p>
                    </div>
                    <div className="about__section">
                      <p className="about__text">Наша история началась с мечты дарить радость. Мы тщательно отбираем цветы со всего мира, чтобы каждый букет был не просто композицией, а настоящим впечатлением — с теплом, нежностью и заботой.</p>
                    </div>
                  </div>
                  <div className="about__list-item">
                    <div className="about__img">
                      <FlowIconTwo className='about__img-content'/>
                    </div>
                    <div className="about__header">
                      <p className="about__subtitle">Свежесть без компромиссов</p>
                    </div>
                    <div className="about__section">
                      <p className="about__text">Все цветы поступают напрямую от проверенных поставщиков и фермеров — мы гарантируем свежесть и долговечность каждого букета.</p>
                    </div>
                  </div>
                  <div className="about__list-item">
                    <div className="about__img">
                      <FlowIconThree className='about__img-content'/>
                    </div>
                    <div className="about__header">
                      <p className="about__subtitle">Индивидуальный подход</p>
                    </div>
                    <div className="about__section">
                      <p className="about__text">Хотите воплотить в жизнь свои идеи? У нас можно составить букет самому или заказать уникальную композицию по вашим предпочтениям.</p>
                    </div>
                  </div>
                </div>
                <div className="about__list">
                  <div className="about__list-item">
                    <div className="about__img">
                      <FlowIconFour className='about__img-content'/>
                    </div>
                    <div className="about__header">
                      <p className="about__subtitle">Украшение мероприятий</p>
                    </div>
                    <div className="about__section">
                      <p className="about__text">Мы создаём флористическое оформление для свадеб, корпоративов и частных торжеств, делая атмосферу по-настоящему особенной.</p>
                    </div>
                  </div>
                  <div className="about__list-item">
                    <div className="about__img">
                      <FlowIconFive className='about__img-content'/>
                    </div>
                    <div className="about__header">
                      <p className="about__subtitle">Авторские решения</p>
                    </div>
                    <div className="about__section">
                      <p className="about__text">Каждая композиция — это результат креативного подхода и вдохновения. Мы предлагаем авторские букеты, которые станут настоящим произведением искусства.</p>
                    </div>
                  </div>
                  <div className="about__list-item">
                    <div className="about__img">
                      <FlowIconSix className='about__img-content'/>
                    </div>
                    <div className="about__header">
                      <p className="about__subtitle">Забота о впечатлениях</p>
                    </div>
                    <div className="about__section">
                      <p className="about__text">Мы верим, что цветы — это не просто подарок, а способ выразить чувства. Поэтому каждое наше творение создано, чтобы дарить радость и тепло.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App
