import './global.css'
import styles from './styles.module.css'

import { Suspense } from 'react'

import Provider from '@/lib/provider'
import Aside from '@/components/aside'
import Mountains from '@/components/Mountains'

import Analytics from '@/components/gtmComponent'

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
          <Mountains />
        </Provider>
      </body>
    </html>
  )
}
