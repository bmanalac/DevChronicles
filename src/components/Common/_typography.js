import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import colors from './_colors'

// text sizes
export const textSize = {
  xs: '1rem',
  sm: '1.3rem',
  md: '2rem',
  lg: '2.9rem'
}
// fonts
export const fonts = {
  header: 'Rubik, sans-serif',
  para: 'Montserrat, sans-serif',
  handwriting: 'Yellowtail, cursive'
}
// shared styles
const sharedTextStyles = css `
  color: ${ props => {
      switch ( props.color ) {
        case 'white':
          return colors.grey.lighten5
          break
        case 'gold':
          return colors.gold
          break
        default:
          return colors.grey.darken4
      }
    }
  }

  font-size : ${ props => {
      switch ( props.size ) {
        case 'xs':
          return textSize.xs
          break
        case 'sm':
          return textSize.sm
          break
        case 'md':
          return textSize.md
          break
        case 'lg':
          return textSize.lg
          break
        default:
          return '16px'
      }
    }
  }
`

// =============== p, headers =============== //
const Text = styled.p `
  ${ sharedTextStyles }
  font-family: ${ props => props.font
        ? props.font
        : `${ fonts.para } !important` }
  margin: 5px 0
`

      Text.h1 = styled.h1 `
        ${ sharedTextStyles }
        margin: ${ props => props.margin
        ? props.margin
        : '0px' }
        font-family: ${ props => props.font
          ? props.font
          : `${ fonts.header } !important` }
`

      Text.h2 = styled.h2 `
        ${ sharedTextStyles }
        margin: ${ props => props.margin
        ? props.margin
        : '0px' }
          font-family: ${ props => props.font
          ? props.font
          : `${ fonts.handwriting } !important` }
`

      Text.Link = styled( Link )`
          ${ sharedTextStyles }
          font-family: ${ props => props.font
          ? props.font
          : `${ fonts.para } !important` }
          font-size: 0.89rem
          text-align: center
          text-transform: uppercase
          text-decoration: none
          padding: 10px 20px 3px
          letter-spacing: 2px
          display: inline-block
          position: relative;

          &.sliding-u-l-r-l:before {
            content: ''
            display: block
            position: absolute
            left: 0
            bottom: 0
            height: 3px
            width: 0
            transition: width 0s ease, background 0.5s ease
          }

          &.sliding-u-l-r-l:after {
            content: ''
            display: block
            position: absolute
            right: 0
            bottom: 0
            height: 3px
            width: 0
            background: #d2bb92
            transition: width 0.5s ease
          }

          &.sliding-u-l-r-l:hover:before {
            width: 100%
            background: #d2bb92
            transition: width 0.5s ease
            }

            &.sliding-u-l-r-l:hover:after {
            width: 100%
            background: transparent
            transition: all 0s ease
          }
`

export default Text
