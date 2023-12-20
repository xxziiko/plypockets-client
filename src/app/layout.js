import { Suspense } from 'react'

import Provider from '@/lib/provider'
// import { flexAlign } from '@/styles/common'

import Analytics from '@/components/gtmComponent'

// import {
//   DESKTOP_WIDTH,
//   MOBILE_MAX_WIDTH,
//   MOBILE_MIN_WIDTH,
// } from '@/lib/constants'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          <main>
            <Provider>{children}</Provider>
          </main>
        </div>
      </body>
    </html>

    // <Html>
    //   <Body suppressHydrationWarning={true}>
    //     <Suspense>
    //       <Analytics />
    //     </Suspense>
    //     <Layout>
    //       <Aside />
    //       <StyledComponentsRegistry>
    //         <Main>{children}</Main>
    //       </StyledComponentsRegistry>
    //     </Layout>

    //     {[0, 1, 2].map((value) => (
    //       <Mountain key={value} idx={value}>
    //         <svg
    //           width="594"
    //           height="470"
    //           viewBox="0 0 594 470"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M297.288 0L593.717 469.5H0.857849L297.288 0Z"
    //             fill="#018969"
    //             fillOpacity="0.7"
    //           />
    //         </svg>
    //       </Mountain>
    //     ))}
    //   </Body>
    // </Html>
  )
}

// const Html = styled.html`
//   display: flex;
//   justify-content: center;
// `

// const Body = styled.body`
//   width: 100vw;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   overflow-y: auto;
// `

// const Layout = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   height: 100vh;
//   display: flex;
//   justify-content: flex-end;
//   @media screen and (max-width: ${DESKTOP_WIDTH - 1}px) {
//     justify-content: center;
//   }
// `

// const Main = styled.main`
//   position: relative;
//   flex-direction: column;
//   min-width: ${MOBILE_MIN_WIDTH}px;
//   max-width: ${MOBILE_MAX_WIDTH}px;
//   @media screen and (min-width: ${DESKTOP_WIDTH}px) {
//     margin-right: 32px;
//     z-index: 0;
//   }

//   width: 100vw;
//   height: 100vh;
//   z-index: 0;
//   animation: ${({ theme }) => css`
//     ${theme.animation.slideInFromBottom} 1s
//   `};
//   ${flexAlign};
//   background-color: #ffffff;

//   ::-webkit-scrollbar {
//     display: none;
//   }
// `

// const Mountain = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 50%;
//   margin-left: ${({ idx }) => idx * (583 / 2) - 250}px;

//   display: flex;
//   z-index: -100;

//   gap: 0px;
//   overflow: hidden;

//   @media screen and (max-width: ${DESKTOP_WIDTH - 1}px) {
//     display: none;
//   }
// `
