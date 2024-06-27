import React from 'react'
import {Link} from 'react-router-dom'
import { useForm} from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/'className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById('my_modal_3').close()}>✕</Link>
   
    <h3 className="font-bold text-lg">Login</h3>
    <div>
        <span>Email</span> <br></br>
        <input type='email' placeholder='Enter your email' 
        className='bg-white w-80 px-3 py-1 rounded border border-bold border-black'
        {...register("email", { required: true })} />
        <br/>
        {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
    <span>Password</span> <br></br>
    <input type='text' placeholder='Enter your password' 
    className=' dark:bg-white dark:text-white bg-white w-80 px-3 py-1 rounded  border border-bold border-black'
    {...register("password", { required: true })}/>
    <br/>
    {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-5'>
      <button className='bg-pink-500 rounded px-2 
      py-1 hover:bg-pink-700'>
        Login</button>
      <p>Not registered?<Link to="/Signup" className='underline text-blue-500 cursor-pointer'>Sign up</Link>
      </p>
    </div>
    </form>
  </div>
</dialog>
</div>
  )
}

export default Login
