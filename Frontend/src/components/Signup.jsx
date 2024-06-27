import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login';
import { useForm} from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
        <div className='flex h-screen items-center justify-center'>
  <div className="modal-box bg-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg text-black">Signup</h3>
    <div>
        <span className='text-black'>Name</span> <br></br>
        <input type='name' placeholder='Enter your fullname' className='bg-white w-80 px-3 py-1 rounded border border-black' 
        {...register("name", { required: true })} />
        <br/>
        {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
    </div>
    <div>
        <span className='text-black'>Email</span> <br></br>
        <input type='email' placeholder='Enter your email' className='bg-white w-80 px-3 py-1 rounded  border border-black' 
        {...register("email", { required: true })} />
        <br/>
        {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
    </div>
    <div>
    <span className='text-black'>Password</span> <br></br>
    <input type='text' placeholder='Enter your password' className=' dark:bg-white dark:text-white bg-white w-80 px-3 py-1  border border-black rounded '
    {...register("password", { required: true })}/>
    <br/>
    {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-5'>
      <button className='bg-pink-500 text-white rounded px-2 py-1 hover:bg-pink-700'>Signup</button>
      <p className='text-black'>Have account?
        <button
         className='underline text-blue-500 cursor-pointer'
        onClick={()=>document.getElementById('my_modal_3').showModal()}>
        Login
        </button>{""}
        <Login/>
        </p>
    </div>
    </form>
  </div>
</div>
    </>
  )
}

export default Signup
