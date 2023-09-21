import React from 'react'
import { Container, CounterTitle } from './styles'

interface ICounter {
  title: string | number
  subtitle: string
  icon: React.ReactNode
}

export function Counter({ title, subtitle, icon }: ICounter) {
  return (
    <Container>
      {icon}

      <CounterTitle>
        <p>{title}</p>
        <span>{subtitle}</span>
      </CounterTitle>
    </Container>
  )
}
