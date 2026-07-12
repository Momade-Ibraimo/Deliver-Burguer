import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import ProductsImg from '../../assets/logoAbaProducts.png'
import { CardProduct } from '../../components'
import api from '../../services/api.jsx'
import formateCurrency from '../../utils/formateCurrency.jsx'
import {
  Container,
  ProductsLogo,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer
} from './styles.js'

export function Products() {
  const { state } = useLocation()
  let categoryId = 0

  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])

  const [filteredProducts, setFilteredProducts] = useState([])

  const [products, setProducts] = useState([])

  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formateCurrency(product.price) }
      })

      setProducts(newProducts)
    }
    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newfilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilteredProducts(newfilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductsLogo src={ProductsImg} alt="Logo da home" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}
