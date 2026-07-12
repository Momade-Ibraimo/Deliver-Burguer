import React from 'react'
import { useLocation } from 'react-router-dom'

import LogoutIcon from '@mui/icons-material/Logout'

import { UseUser } from '../../hooks/UserContext'
import listLinks from './menu-list.jsx'
import { Container, ListLinks, ItensContainer } from './styles.js'

export function SideMenuAdmin() {
  const { pathname } = useLocation()
  const { logout } = UseUser()
  return (
    <Container>
      <hr />
      {listLinks.map(item => (
        <ListLinks key={item.id} isActive={pathname === item.link}>
          <ItensContainer to={item.link}>
            <item.icon className="icon" />
            {item.label}
          </ItensContainer>
        </ListLinks>
      ))}

      <hr />

      <ListLinks style={{ position: 'fixed', bottom: '30px' }}>
        <ItensContainer to="/login" onClick={logout}>
          <LogoutIcon style={{ color: '#FFFFFF' }} />
          Sair
        </ItensContainer>
      </ListLinks>
    </Container>
  )
}
