import Helmet from '@/components/webGL/Helmet'
import Horse from '@/components/webGL/Horse'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

const Scene = dynamic(() => import('@/components/webGL/Scene'), { ssr: false })
const Loader = dynamic(() => import('@/components/webGL/Loader'), { ssr: false })

interface PageProps {}

// Dom components go here
const Page: React.FC<PageProps> = (props) => {
  return (
    <>
      <Scene>
        <Suspense fallback={null}>
          <Horse />
          <Helmet />
        </Suspense>
      </Scene>

      <Loader />
    </>
  )
}

export default Page
