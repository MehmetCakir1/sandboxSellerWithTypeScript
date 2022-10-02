import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate=useNavigate()
  return (
    <div>
        <img src="images/notFound.jpg" alt="error" className='m-auto h-[calc(100vh-140px)] '/>
        <button className='bg-orange-600 py-1 px-3 font-semibold rounded-sm absolute left-5 top-[12%]' onClick={()=>navigate("/")}>BACK TO HOME</button>
    </div>
  )
}

export default Error