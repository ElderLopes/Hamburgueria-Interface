import React, { useEffect } from 'react'

import CartLogo from '../../assets/logocart.svg'
import { CartItens, CartResume } from '../../components'
import api from '../../services/api'
import { Container, CartImg, Wrapper } from './styles'

export function Cart() {
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories')
      console.log(response)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <CartImg src={CartLogo} alt="logo do Carrinho" />
      <Wrapper>
        <CartItens />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
