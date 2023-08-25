import React from 'react'

const Form = () => {
  return (
    <div>
        <form>
            <input type="text" placeholder='Fullname....'/>
            <input type="text" placeholder='Email....'/>
            <input type="text" placeholder='Age....'/>
            <input type="password" placeholder='password....'/>
            <input type="password" placeholder='Confirm Password....'/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form