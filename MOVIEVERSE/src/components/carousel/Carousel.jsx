import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import  Img from "../../components/lazyLoadingImage/Img";
import PosterFallback from "../../assets/Moviex-images/no-poster.png";
import CircleRating from "../cirleRating/CircleRating";
import "./style.scss";
    

const Carousel = ({data,loading}) => {

    const carouselSection = useRef()
    const {url} = useSelector((state)=>state.home)
    const navigate = useNavigate()

    const navigation =(dir)=>{

    }
    const sktItem =()=>{
        return(
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
                </div>
            </div>
        )
    }


  return (
    <div className="carousel">
       <ContentWrapper>
         <BsFillArrowLeftCircleFill
             className="carouselLeftNav arrow"
             onClick={()=>navigation("left")}
         />
         <BsFillArrowRightCircleFill
             className="carouselRightNav arrow"
             onClick={()=>navigation("right")}
         />
         {!loading?(
            <div className="carouselItems">
                
                {data?.map((item)=>{
                    const posterUrl=item.poster_path ? 
                    url.poster + item.poster_path :
                    PosterFallback
                    return(
                        <div className="carouselItem" key={item.id}>
                            <div className="posterBlock">
                                <Img src={posterUrl}/>
                                <CircleRating rating={item.vote_average.toFixed(1)}/>
                            </div>
                            <div className="textBlock">
                                <span className="title">
                                    {item.title || item.name}
                                </span>
                                <span className="date">
                                    {dayjs(item.release_date).format("MMM D, YYYY")}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
         ):(
            <div className="loadingSkeleton">
                {sktItem()}
                {sktItem()}
                {sktItem()}
                {sktItem()}
                {sktItem()}
                {sktItem()}
                {sktItem()}
            </div>
         )}
       </ContentWrapper>
    </div>
  )
}

export default Carousel