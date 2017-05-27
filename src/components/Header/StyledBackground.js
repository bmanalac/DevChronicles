import React from 'react'
import styled from 'styled-components'

// assets
import img from '../../assets/img/banner.jpg'

const Background = styled.div `
  position: absolute
  top: 0
  left: 0
  z-index: ${ props => props.zIndex
  ? props.zIndex
  : 0 }
  opacity: ${ props => props.opac }
  background: no-repeat center url(${ img })
  background-size: cover
  height: 100vh
  width: 100%
`

const StyledBackground = ( props ) => {
  return (
    <Background zIndex={props.zIndex} opac={props.opac}></Background>
  )
}

export default StyledBackground
