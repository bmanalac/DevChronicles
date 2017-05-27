import React from 'react'
import styled from 'styled-components'
import Grid from 'styled-components-grid'

import LinkButton from './LinkButton'

// common
import colors from '../Common/_colors'

const StyledNav = styled.nav `
  background: rgba(0,0,0,0.4)
  box-shadow: 0 1px 5px ${ colors.black }
  position: fixed
  top: 0
  width: 100%
  height: 40px
  z-index: ${ props => props.zIndex
  ? props.zIndex
  : 1 }
`

const navStyles = {
  width: 50,
  minWidth: '310px'
}

class Nav extends React.Component {
  render( ) {
    const { urls, title, zIndex } = this.props

    return (
      <StyledNav id='nav' zIndex={zIndex}>
        <Grid horizontalAlign={'justify-center'} verticalAlign={'center'}>
          <Grid.Unit width={1}>
            <LinkButton urls={urls} title={title} color='white' width={`${ navStyles.width }%`} minWidth={navStyles.minWidth}/>
          </Grid.Unit>
        </Grid>
      </StyledNav>
    )
  }
}

export default Nav
