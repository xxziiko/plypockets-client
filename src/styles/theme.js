import { keyframes } from 'styled-components'

export const colors = {
  subGreen: 'var(--sub_green, #00C496)',
  green: '#00916F',
  red: 'var(--mainred, #F84A68)',
  white: ' var(--main_white, var(--White, #FFF))',
  black: '#111',
  grey: '#CCCCCC',
  fieldGrey: 'var(--field_grey, #F9F9F9)',
  strokeGrey: 'var(--stroke_grey, #ECECEC)',
  pink: '#FFB7B7',
  brown: 'var(--bg_brown, #3C2929)',
  letterPink: '#FFDDDD',
  highlight: 'var(--highlight, #498DFD)',
}

export const fontSize = {
  xsmall: '12px',
  small: '16px',
  medium: '20px',
  large: '32px',
  h1: '40px',
  h2: '36px',
}

export const fontWeight = {
  small: 500,
  medium: 600,
  large: 700,
}

export const shadow = {
  default: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
  page: '0px 0px 8px 4px rgba(0, 0, 0, 0.05)',
  input: 'inset 0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
}

export const border = '1px solid var(--stroke_grey, #ECECEC)'

export const animation = {
  fadeIn: keyframes`from { opacity: 0 } to { opacity: 1 }`,
  slideInFromBottom: keyframes`0% { transform: translateY(0); opacity: 0; } 20% { transform: translateY(40px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; }`,
  bounceUp: keyframes`0% { transform: translateY(0) } 50% { transform: translateY(-20px) } 100% { transform: translateY(0) }`,
  // snowMotion
  // giftBoxMotionzx
}

const theme = {
  colors,
  shadow,
  animation,
  fontSize,
  fontWeight,
  border,
}

export default theme
