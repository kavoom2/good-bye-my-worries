import { canUseDom } from '@/libs/dom/canUseDom'
import extension from '@theatre/r3f/dist/extension'
import studio from '@theatre/studio'
import demoProjectStates from './_states/demo-project-states.json'

export const theatre = { isInit: false }

/**
 * SSR 환경에서 Theatre Studio를 사용할 때, 조건부 렌더링을 사용해야 합니다. (Studio ID 중복 이슈)
 * - 페이지 외부에서 선언합니다.
 * - Client에서만 실행되어야 합니다.
 *
 * @see https://github.com/theatre-js/theatre/issues/303
 * @see https://www.theatrejs.com/docs/0.5/getting-started/with-react-three-fiber#getting-ready-for-production
 */
export function initializeTheatreStudio() {
  if (process.env.NODE_ENV === 'development' && !theatre.isInit && canUseDom) {
    studio.initialize()
    studio.extend(extension)
    theatre.isInit = true
  }
}

export const isTheatreStudioInitialized = () => {
  return theatre.isInit
}

export const cinematicProjectStates = {
  demo: demoProjectStates,
}
