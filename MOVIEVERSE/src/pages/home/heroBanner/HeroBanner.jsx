import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.scss"
import useFetch from '../../../hooks/useFetch'


const HeroBanner = () => {
  const [background,setbackground]=useState("")
  const [query,setquery]=useState("")
  const navigate= useNavigate()
  const {data,loading}=useFetch('/movie/upcoming')

  const seachQuerySelector=(event)=>{
    if(event.key==='Enter'& query.length>0){
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className='heroBanner'>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movie, TV show and people to discover.
          </span>
          <div className="searchInput">
            <input type="text" 
                   placeholder='Search for a tv show or movie....'
                   onChange={(e)=>setquery(e.target.value)}
                   onKeyUp={seachQuerySelector}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner