import './global.css'
import styles from './styles.module.css'

import { Suspense } from 'react'

import Provider from '@/lib/provider'
import Aside from '@/components/Aside'
import Mountains from '@/components/Mountains'

import Analytics from '@/components/gtmComponent'
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <Script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `(function(w, d, a){
    w.__beusablerumclient__ = {
        load : function(src){
            var b = d.createElement("script");
            b.src = src; b.async=true; b.type = "text/javascript";
            d.getElementsByTagName("head")[0].appendChild(b);
        }
    };w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
})(window, document, "//rum.beusable.net/load/b230311e125302u285");`,
        }}
      />

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
