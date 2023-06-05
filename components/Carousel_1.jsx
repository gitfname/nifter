
"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard } from "swiper"
import "swiper/css"
import "swiper/css/keyboard"

export default function Carousel_1({items=[], renderer, className="", title="", textCenter=false, centeredSlides=true, id="", spaceBetween=0}) {

    return (
        <div
            className={"w-full " + className}
        >

            <p className={`text-white w-10/12 mx-auto text-4xl font-medium tracking-wide mb-6 ${textCenter?"text-center":""}`}>
                {title}
            </p>

            <Swiper
                id={id}
                modules={[Keyboard]}
                spaceBetween={spaceBetween}
                slidesPerView="auto"
                centeredSlides={centeredSlides}
                keyboard
            >

                {
                    items.map(item => (
                        <SwiperSlide className="!w-max">
                            {
                                typeof renderer === "function" && renderer(item)
                            }
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    )
}