import { useState } from 'react'




function Cart({ isOpen, cart, onClose, onRemove, toAdd}) {

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    if (!isOpen) {
        return null;
    }

  return (
    <aside className="cart">
        <div className="cart__header">
            <h2 className="cart__title">Корзина</h2>            
        </div>
        <div className="cart__body">
            <div className="cart__content">
                {cart.length === 0 ? (
                    <div className="cart__container">
                        <p className="cart__nothing">Корзина пуста...</p>
                    </div>
                ) : (
                    <>
                    {cart.map((item, index) => (
                        <div className="cart__item" key={`${item.id}-${index}`}>
                            <div className="cart__picture">
                                <img src={item.src} alt="" className="cart__picture--img" />
                            </div>
                            <div className="cart__item--info">
                                <h2 className="cart__title">{item.name}</h2>
                                <p className="cart__price">{item.price} ₽/шт.</p>
                            </div>
                            <div className="cart__item--utils">
                                <div className="cart__quantity">
                                    <button className="cart__delete" onClick={() => onRemove(item)}>-</button>
                                    <p className="cart__number">{item.quantity}</p>
                                    <button className="cart__add" onClick={() => toAdd(item)}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </>
                )}
            </div>
            <div className="cart__pay">
                <div className="cart__totalPrice">
                    <h3 className="cart__price--title"><span>Итого: </span>{totalPrice} руб.</h3>
                </div>
                <div className="promo__button">
                    <button className="promo__btn" aria-label="Оформить заказ"><span className='promo__btn--inner'>Купить</span></button>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Cart