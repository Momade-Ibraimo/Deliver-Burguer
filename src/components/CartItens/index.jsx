import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formateCurrency from '../../utils/formateCurrency'
import { Container, Header, Body, EmptyCart } from './styles'

export function CartItens() {
  const { cartProducts, increaseProducts, decreaseProducts } = useCart()
  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Precos</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p style={{ marginLeft: 13 }}>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formateCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>

            <p>{formateCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  )
}
