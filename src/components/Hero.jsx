import React from 'react'
import { useState } from 'react'
import { BsChevronCompactLeft,  BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


function Hero() {

    const slides = [

        {
            images: "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/01f0b54164c3703a3cd38bb749621f6647b11f0cb9fe052fae358e01502283a80c02f8fd2258d448bdf37c1fbcfb8d0d1a23bf29201567e0413215c613cf7099.jpeg"
        },

        {
            images: "https://content.production.cdn.art19.com/images/f5/16/e0/99/f516e099-4c64-4737-9fdb-55f4d45a4003/b3d0d5faff8545c8e120cd2a564a3baf4bfa07495808ac2be00b688a4b19393260d74ebd630d859a746e8b39a74224268f1b69e88bf19db720c9e52d8a4f612a.jpeg"
        },

        {
            images: "https://content.production.cdn.art19.com/images/1a/ad/4d/03/1aad4d03-1927-4b03-bf84-dd5ea15c954f/ee24f3831228fc828fdcde9f32d971a51a7d5c0b35af83d631eae0522eac7694242d5ebec108f4b2f0e76e2210af5c7db439ba46327776cc8bda6156b300742e.jpeg"
        },

        {
            images: "https://content.production.cdn.art19.com/images/88/d5/9d/bd/88d59dbd-34b3-4588-b173-f2860a70ee4f/d39fe5e91a7538baf18d19f2a7509a995d8852a63972a84058634ab791aa67986d5d6b7e1a49143089d6ce72b9f28cd92088476f1b310be35dd436621123d1c0.jpeg"
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    
  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
      <div 
      style={{background: `url${slides[currentIndex].images}`}}
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
        
      </div>
      {/**left arrow */}
      <div className=' hidden group-hover:block  absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide}  size={30}/>
      </div>
      {/**right arrow */}
      <div className=' hidden group-hover:block  absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
              <div 
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-sxl cursor-pointer text '>
                  <RxDotFilled />
              </div>
          ))}
      </div>
    </div>
    
  )
}

export default Hero
 // "8364", "6717", "8760"
 // 10716", "10276", "6756", "10660"