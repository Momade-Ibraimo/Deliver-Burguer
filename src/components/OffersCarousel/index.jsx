import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import Offers from '../../assets/OFERTAS.png'
import { useCart } from '../../hooks/CartContext.jsx'
import api from '../../services/api.jsx'
import formateCurrency from '../../utils/formateCurrency.jsx'
import {
  Container,
  CategoryImg,
  ContainerItens,
  Images,
  Button
} from './styles.js'

export function OffersCarousel() {
  const [offers, setoffers] = useState([])
  const { putProductInCart } = useCart()

  const navigate = useNavigate()

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formateCurrency(product.price) }
        })

      setoffers(onlyOffers)
    }

    loadOffers()
  }, [])

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Offers} alt="Logo de produtos em ofertas " />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakpoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItens key={product.id}>
              <Images src={product.url} alt="foto de produtos em ofertas" />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button
                onClick={() => {
                  ;(putProductInCart(product), navigate('/carrinho'))
                }}
              >
                Peca Agora
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
