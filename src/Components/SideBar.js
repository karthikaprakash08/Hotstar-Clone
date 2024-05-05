import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faVolleyball } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className='side-bar'>
      <div className='disney-logo'>
        <img src="./images/logo-d-plus.webp" alt='subscribe' />
      </div>
      <div className='menu-icons'>
        <Link to="/my-space" className="menu-icon">
          <FontAwesomeIcon icon={faUserCircle} />
          <span className='menu-name'> My Space</span>
        </Link>

        <Link to="/search" className="menu-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span className='menu-name'> Search</span>
        </Link>

        <Link to="/home" className="menu-icon">
          <FontAwesomeIcon icon={faHouse} />
          <span className='menu-name'> Home</span>
        </Link>

        <Link to="/tv" className="menu-icon">
          <FontAwesomeIcon icon={faTv} />
          <span className='menu-name'> TV</span>
        </Link>

        <Link to="/movies" className="menu-icon">
          <FontAwesomeIcon icon={faFilm} />
          <span className='menu-name'> Movies</span>
        </Link>

        {/* <Link to="/sports" className="menu-icon">
          <FontAwesomeIcon icon={faVolleyball} />
          <span className='menu-name'> Sports</span>
        </Link>

        <Link to="/categories" className="menu-icon">
          <FontAwesomeIcon icon={faList} />
          <span className='menu-name'> Categories</span>
        </Link> */}
      </div>
    </div>
  );
}

export default SideBar;
