import BtnSlider from './BtnSlider'
import dataSlider from './dataSilder'
import { useState } from 'react';
export default function Slider (){
    const [slideIndex , setSlideIndex] = useState(1);
    const nextSlide = ()=>{
        if(slideIndex!== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if(slideIndex === dataSlider.length){
            setSlideIndex(1);
        }

    }
    const prevSlide = ()=>{

        if(slideIndex !== 1){
            setSlideIndex(slideIndex -1)
        }
        else if(slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }
    return(
        <div className='slide-container'>
       <div className='container'>
        {dataSlider.map((obj , index)=>{
         return(
            <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                <img src={process.env.PUBLIC_URL + `/img/image${index+1}.jpg`}  />
                </div>

         )   
        }) }
        <BtnSlider moveSlide={nextSlide}  direction={'next'} />
        <BtnSlider moveSlide={prevSlide} direction={'prev'}/>

        </div>
        </div>


    )
}
