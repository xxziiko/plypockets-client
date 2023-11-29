"use client";

import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyle";
import styled from "styled-components";

export default function RootLayout({ children }) {
  return (
    <html>
      <GlobalStyles />
      <StyledComponentsRegistry>
        <Layout suppressHydrationWarning={true}>{children}</Layout>
      </StyledComponentsRegistry>
    </html>
  );
}

const Layout = styled.body`
  /* border: 1px solid red; */
`;
