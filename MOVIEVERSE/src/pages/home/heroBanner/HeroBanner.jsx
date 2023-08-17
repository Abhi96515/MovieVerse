import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.scss"
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch'
import Img from '../../../components/lazyLoadingImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [background,setbackground]=useState("")
  const [query,setquery]=useState("")
  const navigate= useNavigate()
  const {data,loading}=useFetch('/movie/upcoming')
  const {url} = useSelector((state)=>state.home)

  useEffect(()=>{
     const bg= url.backdrop +
     data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
     setbackground(bg)

  },[data])

  const seachQuerySelector=(event)=>{
    if(event.key==='Enter'& query.length>0){
      navigate(`/search/${query}`)
    }
  }

  return (
    <div className='heroBanner'>
      {!loading &&(
       <div className="backdrop-img">
        <Img src={background}/>
      </div>)}

      <div className="oppacity-layer"></div>

      <ContentWrapper>
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
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner