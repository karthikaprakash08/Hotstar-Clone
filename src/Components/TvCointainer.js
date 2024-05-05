import React from 'react'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import TvBg from './TvBg'
import Section1 from './Section1'
import TvSec1 from './TvSec1'
import VideoCard from './VideoCard'
import Tvsec2 from './Tvsec2'

function TvCointainer() {
  return (
    <>
    <TvBg/>
        <div className='tv-container'>
            <TvSec1></TvSec1>
            <Tvsec2></Tvsec2>
            <Section3/>
            <Section4/>
            <Section5/>
            <VideoCard></VideoCard>

        </div>
    </>
  )
}

export default TvCointainer