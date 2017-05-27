import React from 'react'
import styled from 'styled-components'
import Grid from 'styled-components-grid'

// common
import { Container } from '../Common/_grid'
import { Hr } from '../Common/_normalize'
import Text from '../Common/_typography'

const StyledMission = styled( Container )`
  position: absolute
  z-index: ${ props => props.zIndex
  ? props.zIndex
  : 0 }
  height: 100vh
  width: 100%
`

const  StyledGrid = styled( Grid )`
  height: 100%
`

const mobile = {
  mobile: 1,
  tablet: 1 / 2,
  desktop: 1 / 3
}

const Flex = styled.div `
  display: flex
  flex-direction: column
  justify-content: space-between
`

const ImgContainer = styled.div `
  overflow: hidden;

  img {
      display: block
      max-height: 400px
      height: auto
      width: 100%
      margin: auto
      border-radius: 2px
  }
`

class Project1 extends React.Component {
  constructor( props ) {
    super( props )
  }

  render( ) {
    const { text, zIndex: i } = this.props

    return (
      <StyledMission id='mission' zIndex={i}>
        <StyledGrid horizontalAlign='justify-center' verticalAlign='center'>
          {/* mission-content */}
          <Grid.Unit id='mission-content' width={mobile}>
            <Flex>
              <Grid verticalAlign='center'>
                <Text.h2 sm gold>{text.subtext}</Text.h2>
                <Hr width={'75%'}></Hr>
              </Grid>
              <Grid>
                <Text.h1 md black>{text.title}</Text.h1>
                <Text xs>{text.description}</Text>
              </Grid>
            </Flex>
          </Grid.Unit>
          {/* mission-img */}
          <Grid.Unit id='mission-img' width={mobile}>
            <ImgContainer>
              <img src='../assets/img/office.jpg' alt='feature'></img>
            </ImgContainer>
          </Grid.Unit>
        </StyledGrid>
      </StyledMission>
    )
  }
}

export default Project1
