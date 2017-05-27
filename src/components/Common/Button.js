import React from 'react'
import styled, { css } from 'styled-components'

import colors from '../Common/_colors'
import { textSize, fonts } from '../Common/_typography'

const styleChunkHover = {
  hover: `
    color: ${ colors.gold }
    transition: all 0.3s ease-in
  `,
  hoverBeforeAfter: `
    color: ${ colors.grey.darken1 }
    font-style: italic
    font-size: ${ textSize.lg }
  `
}

const StyledButton = styled.button `
  color: ${ colors.grey.lighten5 }
  background: transparent
  font-size: ${ textSize.sm }
  font-family: ${ fonts.para }
  padding: 10px 20px
  position: ${ props => props.position }
  z-index: ${ props => props.zIndex }
  width: 380px
  cursor: pointer
  top: ${ props => props.top
  ? `${ props.top }%`
  : 0 }
  left: ${ props => props.left
    ? `calc(${ props.left }% - 190px)`
    : 0 }
  ${ props => props.border
      ? `border: 2px solid ${ colors.grey.lighten5 }; border-radius: 2px`
      : 'border: none' };

  &:focus {
    outline: none
  }

  &:hover {
    ${ styleChunkHover.hover }
  }

  &:before {
    content: '{ '
    ${ styleChunkHover.hoverBeforeAfter }
  }

  &:after {
    content: ' }'
    ${ styleChunkHover.hoverBeforeAfter }
  }
`

const Button = ( props ) => {
  return (
    <StyledButton {...props}></StyledButton>
  )
}

export default Button
