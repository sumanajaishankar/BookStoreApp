import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='md:mt-3 mt-2 my-3 md:mx-1 mx-6 p-3 hover:scale-105'>
    <div className="card w-92 shadow-xl dark:bg-slate-900 dark:text-white border">
  <figure>
    <img 
  src={item.image} 
  alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="curser-pointer px-2 py-1 rounded-full border-[1px] badge badge-outline hover:bg-pink-500 hover:text-white duration-300 ">Buy now</div>
    </div>
  </div>
</div>
        </div>
        </>
  )
}

export default Cards

