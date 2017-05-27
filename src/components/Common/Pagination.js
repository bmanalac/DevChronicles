import React from 'react'
import styled from 'styled-components'

import colors from '../Common/_colors'
import { Flex } from '../Common/_grid'

const StyledPagination = styled.div `
  position: absolute
  z-index: 3
  left: calc(50% - ${ 100 / 2 }px)
  bottom: 0
  width: 100px
  height: 40px
`

const StyledFlex = styled( Flex )`
  width: 100%
  height: 90%
  align-items: flex-end
`

const Bar = styled.div `
  background: ${ props => props.background }
  width: 2px
  height: ${ props => props.height }
  border-radius: 5px
  transition: background 0.5s ease-in
`

class Pagination extends React.Component {
  constructor( ) {
    super( );
  }

  render( ) {
    const pages = {
      1: 'hero',
      2: 'work1',
      3: 'work2',
      4: 'work3'
    }

    return (
      <StyledPagination>
        <StyledFlex id='flex' direction='row' justify='space-between'>
          {Object.keys( pages ).map(( key ) => {
            key = parseInt( key )
            return (
              <Bar key={key} background={( ) => key === 1
                ? `${ colors.gold }`
                : `${ colors.grey.darken4 }`} height={( ) => key === 1
                ? '100%'
                : '70%'}></Bar>
            )
          })}
        </StyledFlex>
      </StyledPagination>
    )
  }
}

export default Pagination
