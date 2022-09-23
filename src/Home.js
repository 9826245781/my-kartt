import React from 'react';
import './Home.css';
import './Header.css';

import Product from './Product';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Home() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
  }
}

  return (
    <div className="home">
    <div className='header'>
    <Link to='/'>
      <img className="header_logo"
        src='http://www.google.com/intl/en_com/images/logo_plain.png' alt='' />
    </Link>
    <div className="header_search">
      <input className='header_searchInput' type='text' />
      <SearchIcon className='header_searchIcon' />

    </div>
        <div className="header_nav">
          
      <Link  to={!user &&'/login'}>
      <div onClick={handleAuthentication } className='header_option'>
              <span className='header_optionLineOne'>Hello {user ?
              'Sign Out' :"SIgn In"}</span>
        <span className='header_optionLineTwo'>Sign in</span>          
      </div>
      </Link>
      
      <div className='header_option'>
        <span className='header_optionLineOne'>Returns</span>
        <span className='header_optionLineTwo'>&Orders</span>
                
      </div>
      <div className='header_option'>
        <span className='header_optionLineOne'>Your</span>
        <span className='header_optionLineTwo'>Prime</span>
                
      </div>
      <Link to={'/checkout'}>
      <div className='header_optionBasket'>
      <ShoppingBasketIcon />
    <span className='header_optionLineTwo header_basketCount'>{basket?.length} </span>
    </div>
      </Link>
   
    </div>

  </div>
      


      <div className='home__continer'>
        <img
          className='home_image'
          src='https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61GO0NKfxxL._SX3000_.jpg'
          alt=''
        />
        <div className='home_row'>
          <Product title="product" price={345677}
            image="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg"
          rating={5}
          />
          <Product title="product" price={345677}
          image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81AvLTNPBTL._AC_SY400_.jpg"
        rating={4}
        />
        </div>
        <div className='home_row'>
        <Product title="product" price={1993394}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/21gh7J64rvL._AC_SY400_.jpg"
          rating={3}
          />
          <Product title="product" price={3456}
          image="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg"
        rating={5}
        /> <Product title="product" price={34677}
        image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/310oMFhuDqL._AC_SY400_.jpg"
      rating={5}
      />
      
        </div>
        <div className='home_row'>
        <Product title="product" price={345677}
        image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/31Kje1cspyL._AC_SY400_.jpg"
      rating={5}
      />
        </div>

      </div>
      
    </div>
  );
}

export default Home;