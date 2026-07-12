import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/carrinho.svg'
import Person from '../../assets/profile(1).svg'
import { UseUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText,
  Line,
  PageLinkExit
} from './styles'

export function Header() {
  const { logout, userData } = UseUser()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const logutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={Person} alt="Imagem para ir ao perfil" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img
            src={Cart}
            alt="Carrinho de compras"
            onClick={() => navigate('/carrinho')}
          />
        </PageLink>

        <ContainerText>
          <p>Ola, {userData.name}</p>

          <PageLinkExit onClick={logutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
