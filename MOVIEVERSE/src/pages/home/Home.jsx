import React from 'react'

import "./Home.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './treanding/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'



const Home = () => {
  return (
    <div className='homePage'>
       <HeroBanner/>
       <Trending/>
       <Popular/>
       <TopRated/>
      
    </div>
  )
}

export default Home