import React from 'react'

function Contacts() {
  return (
    <>
    <div className=' text-black p-9 flex flex-col items-center mt-5'>
        <div>
            <h1 className='flex bold-full items-center justify-center text-4xl mt-11   dark:text-white'> Contact Us </h1>
        </div>
        <div className='mt-6  dark:text-white'>
        <span>Name</span> <br></br>
        <input type='email' placeholder='Enter your email' className='bg-white w-80 px-5 py-1 rounded border border-bold border-black' ></input>
    </div>
    <br></br>
    <div className=' dark:text-white'>
    <span>Email</span> <br></br>
    <input type='text' placeholder='Enter your password' className=' dark:bg-white dark:text-white bg-white w-80 px-3 py-1 rounded mb-4 border border-bold border-black'></input>
    </div>
    <div className=' dark:text-white'>
    <span>Message</span> <br></br>
    <textarea className="rounded bg-white border w-80 p-3 border-black" placeholder="Enter the message"></textarea>
    </div>
    </div>
    </>
  )
}

export default Contacts