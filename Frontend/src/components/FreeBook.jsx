import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards'


function FreeBook() {
    const filterData=list.filter((data)=>data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
    <>
    <div className='text-black  dark:bg-slate-900  dark:text-white max-w-screen-2x1  container mx-auto md:px-20 px-4  '>
        <h1 className='font-bold md:mt-1 mt-6'>Free offered course</h1>
        <p>Lorem ipsm doalr sit amet, consectue elis.Acuujmskns sjh dhhd hbdh jhdjbd eligible for all the necessay bjhvjh subscript bhjs  uywfuwu uwiwyi hbjhbh bhbh earum?
        </p>
        <div>
        <Slider {...settings}>
            {filterData.map((item)=>(
                <Cards item={item} key={item.id}/>

            ))}
      </Slider>
        </div>

    </div>
    </>
  )
}

export default FreeBook;