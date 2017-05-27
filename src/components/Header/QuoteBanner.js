import React from 'react'
import styled from 'styled-components'
import Grid from 'styled-components-grid'

// common
import Text from '../Common/_typography'

const StyledGrid = styled( Grid )`
  justify-content: space-between
  ${ props => props.direction
  ? `flex-direction:${ props.direction }`
  : null }
  ${ props => props.height
    ? `height:${ props.height }`
    : null }
`

StyledGrid.Unit = styled( Grid )`
  justify-content: space-between
  margin-top: 30px
`

const QuoteBanner = ( props ) => (
  <StyledGrid id='quote' direction='column' height='100%'>
    {props.quote.map( QuoteList )}
  </StyledGrid>
)

function QuoteList( word, i ) {
  return (
    <StyledGrid.Unit id='unit' key={i}>
      {word.split( '' ).map(( char, i ) => <Text.h1 key={i} size='lg' color='white'>{char}</Text.h1>)}
    </StyledGrid.Unit>
  )
}

export default QuoteBanner
