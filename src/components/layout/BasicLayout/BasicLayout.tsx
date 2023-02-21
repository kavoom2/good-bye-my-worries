import { forwardRef, useRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import styles from './BasicLayout.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

const BasicLayout = forwardRef<HTMLElement, LayoutProps>(({ children }, ref) => {
  const innerLayoutRef = useRef()

  return (
    <main ref={mergeRefs([ref, innerLayoutRef])} className={styles['layout-basic']}>
      {children}
    </main>
  )
})

BasicLayout.displayName = 'BasicLayout'

export default BasicLayout
