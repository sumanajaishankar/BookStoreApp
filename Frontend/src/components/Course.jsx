import React from 'react'
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from 'react-router-dom';

function Course() {
  return (
    <>
    <div className='max-w-screen-2x1 text-black container mx-auto md:px-20 px-4'>
      <div className='text-center justify-center' >
        <h1 className='  dark:text-white md:text-3xl text-2xl font-semibold md:mt-31 mt-20 '>We are delight to have you <span className='text-pink-500'>here !</span></h1>
        <p className='md:mt-6  dark:bg-slate-900  dark:text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
           the industry's standard dummy text ever since the
           1500s, when an unknown printer took a galley of type and scrambled 
           it to make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining 
            essentially unchanged.</p>
            <Link to='/'>
            <button className='bg-pink-700 mt-3 text-white rounded px-3 py-1 hover:bg-pink-500 duration-300'>Back</button>
            </Link>
      </div>
     
      <div className='grid md:grid-cols-4 grid-cols-1'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>       
             ))}
      </div>
    </div>
    </>
  )
}

export default Course