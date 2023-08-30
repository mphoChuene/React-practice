import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const Query = () => {
  const {}= useQuery(['cat'], ()=> {
    axios.get('').then()
  })
  return (
    <div>Query</div>
  )
}

export default Query