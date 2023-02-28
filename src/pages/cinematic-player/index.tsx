import SSRSheetProvider from '@/libs/cinematic/SSRSheetProvider'
import { cinematicProjectStates } from '@/libs/cinematic/theatre'
import { getProject } from '@theatre/core'
import { editable as e, PerspectiveCamera } from '@theatre/r3f'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'

const Scene = dynamic(() => import('@/components/webGL/Scene'), { ssr: false })

const demoSheet = getProject('DemoProject', { state: cinematicProjectStates['demo'] }).sheet('Demo Sheet')

interface PageProps {}

const PageForDevelopment: React.FC<PageProps> = ({}) => {
  useEffect(() => {
    demoSheet.project.ready.then(() => {
      demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 4] })
    })
  }, [])

  return (
    <Scene>
      <SSRSheetProvider sheet={demoSheet}>
        <PerspectiveCamera theatreKey='Camera' makeDefault position={[5, 5, -5]} fov={75} />

        <ambientLight />
        <e.pointLight theatreKey='Light' position={[10, 10, 10]} />
        <pointLight position={[10, 10, 10]} />

        <e.mesh theatreKey='Cube'>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color='orange' />
        </e.mesh>
      </SSRSheetProvider>
    </Scene>
  )
}

const PageForProduction: React.FC<PageProps> = ({}) => {
  return null
}

// TODO: Production에서 해당 페이지에 접근하지 못하도록 합니다.
// - NextJS Dynamic Routes 사용
const Page = process.env.NODE_ENV === 'development' ? PageForDevelopment : PageForProduction

export default Page
