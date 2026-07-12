import React from 'react'

import HomeLogo from '../../assets/logoHomePage.png'
import { CategoryCarousel, OffersCarousel, Header } from '../../components'
import { Container, HomeImg } from './styles'

export function Home() {
  return (
    <Container>
      {/* <Header /> */}

      <HomeImg src={HomeLogo} alt="Logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
