import React from 'react'
import { createBrowserRouter, useParams } from 'react-router-dom'
import "./Detail.scss"
import DetailsBanner from './detailsBanner/DetailsBanner'
import useFetch from '../../hooks/useFetch'
const Detail = () => {
  const {mediaType,id}=useParams()
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`)
  const {data: credits,loading:creditLoading}=useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
    </div>
  )
}

export default Detail