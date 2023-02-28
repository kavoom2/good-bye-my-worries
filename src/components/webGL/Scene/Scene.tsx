import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import React, { useRef } from 'react'
import styles from './Scene.module.scss'

const isDevelopment = process.env.NODE_ENV === 'development'

interface SceneProps {
  children: React.ReactNode
}

const Scene: React.FC<SceneProps> = ({ children }) => {
  const canvasRootRef = useRef<unknown>(null) as React.MutableRefObject<HTMLElement>

  return (
    <section ref={canvasRootRef} className={styles['main-app']}>
      <Canvas eventSource={canvasRootRef} gl={{ preserveDrawingBuffer: true }}>
        {isDevelopment && <Perf />}

        <directionalLight intensity={0.75} />
        <ambientLight intensity={0.75} />
        {children}
        <Preload all />
        <OrbitControls />
      </Canvas>
    </section>
  )
}

export default Scene
