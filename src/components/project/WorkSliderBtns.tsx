"use client"

import React from "react"
import { useSwiper } from "swiper/react"
import {
    PiCaretLeftBold,
    PiCaretRightBold
} from "react-icons/pi"

interface PropsType {
    containerStyle: string
    btnStyles: string
}

const WorkSliderBtns: React.FC<PropsType> = ({containerStyle, btnStyles}) => {

    const swiper = useSwiper()

  return (
    <div className={containerStyle}>
        <button className={btnStyles} onClick={() => swiper.slidePrev()}>
            <PiCaretLeftBold />
        </button>
        <button className={btnStyles} onClick={() => swiper.slideNext()}>
            <PiCaretRightBold />
        </button>
    </div>
  )
}

export default WorkSliderBtns