import styled, { StyleSheetManager } from 'styled-components'
import { flexSpaceBetween } from '@/styles/common'
import { Typography, CircleButton } from '@/components'

export default function Footer(props) {
  const { text, buttonCommand, styles, nextUrl, buttonDisable } = props
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop}>
      <Box color={styles?.color} backgroundColor={styles?.backgroundColor}>
        <Content>
          <Typography size={({ theme }) => theme.fontSize.medium}>
            {text}
          </Typography>
          <CircleButton
            nextUrl={nextUrl}
            text={buttonCommand}
            backgroundColor={styles.buttonBackgroundColor}
          />
        </Content>
      </Box>
    </StyleSheetManager>
  )
}

const Box = styled.footer`
  width: 375px;
  padding: 16px 32px 40px;
  gap: 46px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`

const Content = styled.div`
  ${flexSpaceBetween}
`
