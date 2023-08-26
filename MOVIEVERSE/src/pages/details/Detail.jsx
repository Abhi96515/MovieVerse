import React from 'react'
import { createBrowserRouter, useParams } from 'react-router-dom'
import "./Detail.scss"
import DetailsBanner from './detailsBanner/DetailsBanner'
import useFetch from '../../hooks/useFetch'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideosSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'
const Detail = () => {
  const {mediaType,id}=useParams()
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`)
  const {data: credits,loading:creditLoading}=useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Detail