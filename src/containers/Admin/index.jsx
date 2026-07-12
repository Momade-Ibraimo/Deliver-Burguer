import React from 'react'
import { useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'

import { SideMenuAdmin } from '../../components/SideMenuAdmin/index.jsx'
import paths from '../../Constants/paths.jsx'
import EditProduct from './EditProduct/index.jsx'
import Listproducts from './ListProducts/index.jsx'
import NewProducts from './NewProducts/index.jsx'
import Orders from './Orders/index.jsx'
import { Container, ContainerItens } from './styles.js'

export function Admin() {
  const { pathname } = useLocation()

  return (
    <Container>
      <SideMenuAdmin pathname={pathname} />
      <ContainerItens>
        {pathname === paths.Order && <Orders />}
        {pathname === paths.Products && <Listproducts />}
        {pathname === paths.NewProducts && <NewProducts />}
        {pathname === paths.EditProducts && <EditProduct />}
      </ContainerItens>
    </Container>
  )
}

Admin.propTypes = {}
