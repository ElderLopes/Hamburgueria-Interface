import React, { useEffect } from 'react'

import HomeLogo from '../../assets/burger (1) 1.svg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import api from '../../services/api'
import { Container, HomeImg } from './styles'

export function Home() {
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories')
      console.log(response)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
