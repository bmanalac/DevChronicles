import styled, { css } from 'styled-components'

const sizes = {
  giant: 1280,
  desktop: 992,
  tablet: 768,
  phone: 320,
  phoneLandscape: 570
}

// iterate through the sizes and create a media template
export const media = Object.keys( sizes ).reduce(( accumulator, label ) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = ( ...args ) => css `
        @media screen and (max-width: ${ emSize }em) {
            ${ css( ...args ) }
        }
    `
  return accumulator
}, { })
