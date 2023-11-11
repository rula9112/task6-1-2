import React from "react";
export default function BtnSlider ({direction, moveSlide}){
    return(
      <button className={direction == 'next'?"btn-slide next":"btn-slide"} onClick={moveSlide}>
        {direction == 'next' ? ">>":"<<"}
        </button>
    )
} 