import React from 'react'

import CartLogo from '../../assets/logoAbaCategory.png'
import { CartItens, CartResume } from '../../components'
import { Container, CartImg, Wraper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="Logo da home" />

      <Wraper>
        <CartItens />
        <CartResume />
      </Wraper>
    </Container>
  )
}
