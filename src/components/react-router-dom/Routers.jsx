import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import FetchData from '../lifecycle/FetchData'
import ExerciseApi from '../lifecycle/ExerciseApi'
import Todo from '../CRUD/Todo'
import Navbar from './Navbar'

const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<FetchData/>}/>
          <Route path='/API' element={<ExerciseApi/>}/>
          <Route path='/todo' element={<Todo/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Routers