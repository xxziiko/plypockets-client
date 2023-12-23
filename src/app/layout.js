import './global.css'
import styles from './styles.module.css'

import { Suspense } from 'react'

import Provider from '@/lib/provider'
import Aside from '@/components/Aside'
import Mountains from '@/components/Mountains'

import Analytics from '@/components/gtmComponent'
import Script from 'next/script'

const seo = {
  title: '올 한해 마무리 크리스마스 플리보따리로',
  description:
    '연말을 따스하게 만들어줄 비밀편지들로 특별한 순간, 소중한 사람에게 전하고 싶은 마음을 선물보따리로 전하세요.',
  image: process.env.NEXT_PUBLIC_IMAGE_URL + '/og-image.jpg',
  url: 'https://www.plypockets.com',
  site_name: '올 한해 마무리 크리스마스 플리보따리로',
  locale: 'ko_KR',
  type: 'website',
}

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: seo.title,
  description: seo.description,
  openGraph: {
    type: seo.type,
    url: seo.url,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.image,
        width: 1200,
        height: 630,
        alt: seo.title,
      },
    ],
    site_name: seo.site_name,
    locale: seo.locale,
  },
  twitter: {
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.image,
        width: 1200,
        height: 630,
        alt: seo.title,
      },
    ],
  },
}

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
