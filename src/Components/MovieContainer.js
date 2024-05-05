import React from 'react'
import BGVideo from './BGVideo'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import MovieSec1 from './MovieSec1'

function MovieContainer() {
    return (
        <>
        <BGVideo></BGVideo>
        <div className='movie-container'>
            {/* <SideBar></SideBar> */}
            <Section1/>
            {/* <Section2/> */}
            {/* <Section3/> */}
            {/* <Section4/> */}
            {/* <Section5/> */}
            {/* <VideoCard></VideoCard> */}
            /<MovieSec1></MovieSec1>
        
        </div>
        </>
        
      )
}

export default MovieContainer