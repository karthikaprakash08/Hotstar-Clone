import React from 'react'
import SideBar from './SideBar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import VideoCard from './VideoCard'
import '../App.css';
import BGVideo from './BGVideo'


function HomeContainer() {
  return (
    <>
    <BGVideo></BGVideo>
    <div className='home-container'>
        {/* <SideBar></SideBar> */}
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
        <VideoCard></VideoCard>
        
    
    </div>
    </>
    
  )
}

export default HomeContainer