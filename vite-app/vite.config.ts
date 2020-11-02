// @ts-check
import reactPlugin from 'vite-plugin-react'
import type { UserConfig } from 'vite'

/**
 * @type { import('vite').UserConfig }
 */
const config: UserConfig = {
    jsx: 'react',
    optimizeDeps: {
      link: ['linked-pkg']
    },
    configureServer: [
      async ({resolver}) => {
        resolver.requestToFile('/@modules/smoldash/dist/esm/index.js')
      }
    ],
    plugins: [reactPlugin],
}

export default config
