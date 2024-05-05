import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function Section4() {
  const [xPos, setXPos ] = React.useState(0);
    const [style, setStyle] = React.useState({transform: `translateX(${xPos}px)`});
  
    const onClick =(direction) => {
       (direction === "left") ? setXPos(x => x+300) : setXPos(x => x -300);
       setStyle({transform: `translateX(${xPos}px)`});
           console.log(xPos);
          //  var value =100;
          //  document.getElementById("latestreleasecards").style.transform = "translateX("+value+"px);"
        }

  return (
    <div className='section-2'>
      <div className='heading'>
        <h2>Comedy Movies</h2>
        <span> View All</span>
      </div>
      <div className='movie-list'>
        <div className='card-container' id='latestreleasecards' style={style}>
          <div className='card'>
            <img src="images/cm1.jpeg" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
          <div className='card'>
            <img src="images/cm2.jpeg" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
          <div className='card'>
            <img src="images/cm3.jpeg" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
          <div className='card'>
            <img src="images/cm4.jpeg" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
          <div className='card'>
            <img src="images/cm5.jpeg" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
          <div className='card'>
            <img src="images/cm6.jpeg" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
          <div className='card'>
            <img src="images/cm7.jpeg" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
          <div className='card'>
            <img src="images/cm8.jpeg" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
          <div className='card'>
            <img src="images/cm9.jpeg" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
          <div className='card'>
            <img src="images/cm10.jpeg" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
          <div className='card'>
            <img src="images/poster 12.png" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
          <div className='card'>
            <img src="images/poster 12.png" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
          <div className='card'>
            <img src="images/poster 12.png" class="card-img" alt="" />
            <div class="card-body">
              <h2 class="name">Movie Name</h2>
              <h6 class="des">Lorem ipsum dolor sit amet.</h6>
              <button class="watchlist-btn">add to watchlist</button>
            </div>
          </div>
        </div>
        <button className="prv-btn" onClick={(e)=>{
          e.preventDefault();
          onClick("left");
        }}><FontAwesomeIcon icon={faAngleLeft} /></button>
        <button className="nxt-btn" onClick={(e)=>{
          e.preventDefault();
          onClick("right");
        }}><FontAwesomeIcon icon={faAngleRight} /></button>
      </div>
    </div>
  )
}

export default Section4