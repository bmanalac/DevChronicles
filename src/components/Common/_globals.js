import { injectGlobal } from 'styled-components'
import colors from './_colors'
import { fonts } from './_typography'

injectGlobal `
  @import url('https://fonts.googleapis.com/css?family=Rubik|Yellowtail|Montserrat|Playfair+Display');

	body {
    font-family: ${ fonts.para }
    background: ${ colors.grey.base }
    margin: 0
    overflow: hidden
	}
`
