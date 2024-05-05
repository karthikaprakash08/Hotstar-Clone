import React from 'react'

function Section1() {
  return (
    <div className='section-1'>
      <div className='section-empty'>
      </div>
      <div className="container">
        
        {/* <div className='description'> */}
          <h1>THE EPIC NATURE</h1>
          <p>
            THE NATURE | 2023 | Episode 1 | Languages.
          </p>
          <p>
            A single misplaced word could mean death, and a new bride finds<br/> 
            herself in such a situation in a conflict-ridden land. Who will save her?
          </p>
        {/* </div> */}
        <div className="genres">
          <span>Thriller|</span>
          <span>Drama |</span>
          <span>Action |</span>
          <span>Family</span>
        </div>
        <a className="watch-button" href="#watch-now">
          Watch Now +
        </a>
        {/* <div className="storytellers-present">
          <p>STORYTELLERS PRESENTS</p>
        </div> */}
        {/* Add other content here */}
      </div>


    </div>
  )
}

export default Section1