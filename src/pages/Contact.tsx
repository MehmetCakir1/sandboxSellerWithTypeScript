import React from 'react'

const Contact = () => {
  return (
    <main className='grid place-items-center py-28'>
      <h1 className='font-bold text-3xl'>GET IN TOUCH</h1>
      <form className='flex flex-col w-full max-w-2xl py-3'>
        <div className='flex w-full max-w-2xl py-3 gap-2'>
            <div className='flex flex-col w-6/12 gap-4'>
          <input type="text" placeholder='Name' className="p-3 bg-blue-100"/>
          <input type="email"placeholder='Email'  className="p-3 bg-blue-100"/>
          <input type="text" placeholder='Title' className="p-3 bg-blue-100"/>
        </div>
        <textarea placeholder='Your Message' className="p-3 bg-blue-100 w-6/12 resize-none overflow-auto"></textarea>
        </div>
        <button className='bg-blue-600 w-3/12 m-auto py-1 font-semibold text-white'>SEND MESSAGE</button>
      </form>
    </main> 
  )
}

export default Contact