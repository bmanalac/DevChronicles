import React from 'react'
import styled from 'styled-components'
import Grid from 'styled-components-grid'

// components
import QuoteBanner from './QuoteBanner'

// common
import { Overlay } from '../Common/_normalize'
import { Container } from '../Common/_grid'
import Text from '../Common/_typography'
import StyledBackground from './StyledBackground'
import Button from '../Common/Button.js'

const Hero = styled.header `
  position: absolute
  z-index: ${ props => props.zIndex }
  height: 100vh
  width: 100%
`

const StyledContainer = styled( Container )`
  height: 100%
`

const TriangleLeft = styled.div `
  position: absolute
  top: 36px
  left: -100px
  width: 0;
  height: 0;
  border-top: 0 solid transparent
  border-left: 0 solid transparent
  border-right: 100vw solid transparent
  border-bottom: 100vh solid rgba(0,0,0,0.2)
  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);

  ${ props => props.transform
  ? 'transform: translateX(-100%) translateY(100%)'
  : null }
`

const TriangleRight = styled.div `
  position: absolute
  top: 0
  left: 0
  width: 0;
  height: 0;
  border-top: 100vh solid rgba(0,0,0,0.2)
  border-left: 100vw solid transparent
  border-right: 0 solid transparent
  border-bottom: 0 solid transparent
  transition: all 1s cubic-bezier(0.22, 0.61, 0.36, 1);

  ${ props => props.transform
  ? 'transform: translateX(100%) translateY(-100%)'
  : null }
`

class Header extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      transform: false
    }

    this._toggleHandle = this._toggleHandle.bind( this )
  }

  _toggleHandle( ) {
    this.setState({
      transform: !this.state.transform
    })
  }

  render( ) {
    const { quote, zIndex } = this.props,
      btn = {
        zIndex: 999,
        position: 'absolute',
        props1: {
          top: 75,
          left: 25
        },
        props2: {
          top: 25,
          left: 75
        }
      },
      projects = 'My Workshop',
      aboutMe = 'My Everyday Carry'

    return (
      <Hero id='header' zIndex={zIndex}>

        <StyledBackground zIndex={-1} opac={1}/>
        <Overlay id='overlay' opacity={0.4}></Overlay>

        <StyledContainer id='container'>

          {/* triangle decision affect */}
          <TriangleLeft id='TriangleLeft' transform={this.state.transform} left></TriangleLeft>
          <TriangleRight id='TriangleRight' transform={this.state.transform} right></TriangleRight>
          <Button id='btn-left' onClick={this._toggleHandle} {...btn} {...btn.props1}>{projects}</Button>
          <Button id='btn-right' onClick={this._toggleHandle} {...btn} {...btn.props2}>{aboutMe}</Button>

          {/* quote loading bar */}
          <QuoteBanner quote={quote}/>
        </StyledContainer>

      </Hero>
    )
  }
}

export default Header
