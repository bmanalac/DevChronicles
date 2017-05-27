import React from 'react'
import content from '../stores/contentStore'
import Nav from '../components/Nav/NavComponent'

import { index } from '../components/Common/_normalize'

const Contact = ( ) => (
  <div id='contact'>
    <Nav urls={content.urls} title={content.title} zIndex={index.high}/>
    <h1>Contact</h1>
  </div>
)

export default Contact
