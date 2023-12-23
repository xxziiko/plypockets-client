import './global.css'
import styles from './styles.module.css'

import { Suspense } from 'react'

import Provider from '@/lib/provider'
import Aside from '@/components/aside'

import Analytics from '@/components/gtmComponent'

import {
  DESKTOP_WIDTH,
  MOBILE_MAX_WIDTH,
  MOBILE_MIN_WIDTH,
} from '@/lib/constants'

export default function RootLayout({ children }) {
  return (
    <html>
      <body suppressHydrationWarning={true}>
        <Suspense>
          <Analytics />
        </Suspense>
        <Provider>
          <Aside />
          <div className={styles.layout}>
            <main className={styles.main}>{children}</main>
          </div>
          <Mountain />
        </Provider>
      </body>
    </html>
  )
}
