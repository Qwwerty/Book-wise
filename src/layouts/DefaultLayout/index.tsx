import { ReactNode } from 'react'
import { Container, Content } from './styles'
import Head from 'next/head'
import { Sidebar } from '@components/templates/Sidebar'

interface DefaultLayoutProps {
  title: string
  children: ReactNode
}

export function DefaultLayout({ title, children }: DefaultLayoutProps) {
  return (
    <Container>
      <Head>
        <title>{`${title} | BookWise`}</title>
      </Head>

      <Sidebar />

      <Content>{children}</Content>
    </Container>
  )
}
