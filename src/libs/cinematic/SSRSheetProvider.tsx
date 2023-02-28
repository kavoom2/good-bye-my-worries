import type { ISheet } from '@theatre/core'
import { SheetProvider } from '@theatre/r3f'
import { initializeTheatreStudio, isTheatreStudioInitialized } from './theatre'

initializeTheatreStudio()

interface SSRSheerProviderProps {
  children: React.ReactNode
  sheet: ISheet
}

const SSRSheetProvider: React.FC<SSRSheerProviderProps> = ({ children, sheet }) => {
  const isInit = isTheatreStudioInitialized()

  if (isInit) {
    return <SheetProvider sheet={sheet}>{children}</SheetProvider>
  }

  return <>{children}</>
}

export default SSRSheetProvider
