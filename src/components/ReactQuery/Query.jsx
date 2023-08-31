import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const Query = () => {
  const {}= useQuery(['cat'], ()=> {
    return axios.get('https://catfact.ninja/fact').then((res)=>(res.data))
  })
  return (
    <div>Query</div>
  )
}

export default Query