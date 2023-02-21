import BasicLayout from '@/components/layout/BasicLayout'
import Header from '@/config'
import '@/styles/index.scss'
import '@/styles/reset.scss'
import type { AppProps } from 'next/app'
import { useRef } from 'react'

export default function App({ Component, pageProps = { title: 'index' } }: AppProps) {
  const layoutRef = useRef<HTMLElement>(null)

  return (
    <>
      <Header title={pageProps.title} />

      <BasicLayout ref={layoutRef}>
        <Component {...pageProps} />
      </BasicLayout>
    </>
  )
}
