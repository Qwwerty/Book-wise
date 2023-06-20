import { ComponentProps, ReactElement } from 'react'
import { Container } from './styles'

interface PageTitleProps extends ComponentProps<typeof Container> {
  title: string
  icon: ReactElement
}

export function PageTitle({ title, icon, ...rest }: PageTitleProps) {
  return (
    <Container {...rest}>
      {icon}
      {title}
    </Container>
  )
}
