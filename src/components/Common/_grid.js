import styled, {css} from 'styled-components'

export const sharedSizeStyles = css `
    max-width: ${props => props.maxWidth ? `${props.maxWidth} !important` : '1280px'}
    max-height: ${props => props.maxHeight ? `${props.maxHeight} !important` : 'initial'}
    min-width: ${props => props.minWidth ? `${props.minWidth} !important` : '310px'}
    min-height: ${props => props.minHeight ? `${props.minHeight} !important` : 'initial'}
    width: ${props => props.width ? `${props.width} !important` : 'initial'}
    height: ${props => props.height ? `${props.height} !important` : 'initial'}
`

export const Container = styled.div `
    margin: 0 auto
    width: 90%
`

export const Flex = styled.div `
    display: flex
    flex-direction: ${props => props.direction ? props.direction : 'row'}
    justify-content: ${props => props.justify ? props.justify : 'initial'}
`
