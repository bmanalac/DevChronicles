import styled from 'styled-components'

export const index = {
  high: 200,
  mid: 100,
  normal: 1,
  low: -100,
  bottom: -200
}

export const Hr = styled.hr `
  margin: 0 auto;
  width: ${ props => props.width
  ? props.width
  : '100%' }
  opacity: ${ props => props.hide
    ? 0
    : 1 }
`

export const Overlay = styled.div `
  position: absolute
  top: 0
  left: 0
  height: 100%
  width: 100%
  background: ${ props => props.opacity
  ? `rgba(0,0,0,${ props.opacity })`
  : 'rgba(0,0,0,0.8)' }
`
