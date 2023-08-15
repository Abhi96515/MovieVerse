import { useEffect, useState } from 'react'

import { fetchDataFromApi } from './utils/api'
function App() {
 
  useEffect(()=>{
    apiTesting();
  },[])

  const apiTesting=()=>{
  fetchDataFromApi("/movie/popular").then((res)=> {console.log(res)})
  }
  return (
    <>
      <div>
        <div className="App">App

        </div>
      </div>
    </>
  )
}

export default App
