import React from 'react'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext.jsx'
import { Button } from '../Button'
import { Container, ProductName, ProductPrice, Image } from './styles.js'

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()

  return (
    <Container>
      <Image src={product.url} alt="Imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  Children: PropTypes.object
}
