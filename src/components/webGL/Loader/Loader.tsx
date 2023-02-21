import { useProgress } from '@react-three/drei'
import React from 'react'
import styles from './Loader.module.scss'

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  const progressData = useProgress()

  return <section className={styles['page-prelaoder']}>{progressData?.progress || 0}</section>
}

export default Loader
