import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { globalStyles } from '../../styles/global'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/react-query'

import 'react-toastify/dist/ReactToastify.css'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </QueryClientProvider>
  )
}
