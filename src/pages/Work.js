import React from 'react'
import content from '../stores/contentStore'

import Nav from '../components/Nav/NavComponent'
import Header from '../components/Header/HeaderComponent'
import Project1 from '../components/Projects/Project1'

// common
import { index } from '../components/Common/_normalize'
import Pagination from '../components/Common/Pagination'

const Work = ( ) => (
  <div id='home'>
    <Nav urls={content.urls} title={content.title} zIndex={index.high}/>
    {/* <Pagination/>  */}

    {/* component slides */}
    <Header quote={content.header.quote} zIndex={index.mid}/>
    {/* <Project1 text={content.mission} zIndex={1}/> */}
  </div>
)

export default Work
