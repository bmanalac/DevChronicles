import React from 'react'
import styled from 'styled-components'
import Grid from 'styled-components-grid'

// common
import Text from '../Common/_typography'

const StyledGrid = styled( Grid )`
  text-align: center
  margin: 2px 0
`

const Link = styled( Text.Link )`
  color: ${ props => props.color
  ? props.color
  : 'initial' };
`

const Flex = styled.div `
  display: flex
  width: 100%
  flex-direction: row
  justify-content: space-between
`

const mobile = {
  mobile: 1,
  tablet: 1 / 2
}

const LinkButton = ( props ) => (
  <StyledGrid horizontalAlign={'justify-center'} verticalAlign={'center'}>
    <Flex>
      <Link to={props.urls.work} color={props.color}>{props.title}</Link>
      <div>
        {/* comp: LinkList */}
        {Object.keys( props.urls ).map( LinkList )}
      </div>
    </Flex>
  </StyledGrid>
)

function LinkList( key, i ) {
  return (
    <Grid.Unit width={1} key={i}>
      <Link className='sliding-u-l-r-l' to={`/${ key }`} color='white'>
        {key}
      </Link>
    </Grid.Unit>
  )
}

export default LinkButton
