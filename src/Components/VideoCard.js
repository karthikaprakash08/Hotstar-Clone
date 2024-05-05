import React from 'react'

function VideoCard() {
  return (
    <div className='section-2'>
      <div class="video-card-container">
        <div class="video-card">
          <img src="images/disney.PNG" class="video-card-image" alt="" />
          <video  muted loop autoPlay class="card-video">
            <source src="videos/disney.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div class="video-card">
          <img src="images/pixar.PNG" class="video-card-image" alt="" />
          <video  muted loop autoPlay class="card-video">
            <source src="videos/pixar.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div class="video-card">
          <img src="images/marvel.PNG" class="video-card-image" alt="" />
          <video  muted loop autoPlay class="card-video">
            <source src="videos/marvel.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div class="video-card">
          <img src="images/star-wars.PNG" class="video-card-image" alt="" />
          <video  muted loop autoPlay class="card-video">
            <source src="videos/star-war.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div class="video-card">
          <img src="images/geographic.PNG" class="video-card-image" alt="" />
          <video class="card-video" muted loop autoPlay>
            <source src="videos/geographic.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  )
}

export default VideoCard