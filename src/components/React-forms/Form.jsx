import React from 'react'
import {useForm} from 'react-hook-form' 

const Form = () => {
  const {register,handleSubmit}= useForm()
  const onSubmit = ()=>{
    console.log('hellow world!')
  }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} style={{marginLeft: '20vh', marginTop: '20px'}}>
            <input type="text" placeholder='Fullname....'/> <br/>
            <input type="text" placeholder='Email....'/><br/>
            <input type="text" placeholder='Age....'/><br/>
            <input type="password" placeholder='password....'/><br/>
            <input type="password" placeholder='Confirm Password....'/><br/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form