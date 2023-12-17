import styled from 'styled-components'

export default function NotFound() {
  return (
    <>
      <TextImageWrapper>
        <img src="/img/not-found-text.png" />
      </TextImageWrapper>
      <GifWrapper>
        <img src="https://s3-alpha-sig.figma.com/img/f25c/c44d/5dd1f00b59b64e53001dcdfe55d2c8db?Expires=1703462400&Signature=GZq0i86EsjazGeUZTDGLirIsgkvWaOn7EQTL8fP-xwiM-WUDjZvNl0Y9NaXnBl2x8z3yxJU0TGGNOplthtEnfcKD11zEeDZijBYBxFCdWfniuqKMRMCroUgKscdVskUa~dJ-uXn30dXwD83ShxxzYxX7Edy3X3XskYLJ534GmX6N-nC8cF5GkJ8bGkSxZD6ija-Wa4Fcw8s~9UqlDLCPLU-lXl8Vw35sKiTlCcyTsld3yZhvwOpLF7UIhtYSU6iLDuxkQMwXSz31WDUcPpUTWnsTbG6MvszOdJiprhdUfYUydlGtl94dYckToW9uRsHw~WKG8jR0-t-pI8mA~LHo6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      </GifWrapper>
    </>
  )
}

const TextImageWrapper = styled.div`
  width: 168px;
  height: 80px;
`

const GifWrapper = styled.div`
  width: 150px;
  height: 150px;
`
