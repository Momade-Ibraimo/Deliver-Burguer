import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/CATEGORIAS.png'
import api from '../../services/api.jsx'
import {
  Container,
  CategoryImg,
  ContainerItens,
  Images,
  Button
} from './styles'

export function CategoryCarousel() {
  const [categories, setcategories] = useState([])
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setcategories(data)
    }

    loadCategories()
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
      <CategoryImg src={Category} alt="Logo da Categoria" />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakpoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItens key={category.id}>
              <Images src={category.url} alt="foto da Categoria" />
              <Button to="/produtos" state={{ categoryId: category.id }}>
                {category.name}
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
