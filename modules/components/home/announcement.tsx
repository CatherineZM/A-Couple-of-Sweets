"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// external components
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// internal components
import { RichTextRender } from "@/modules/components/utils/index";

interface Props {
    announcement: Array<
        {
        raw: any;
    }
    >
}

export default function HomeAnnouncement (props: Props): JSX.Element {
    return (
        <Swiper
            className="announceSwiper flex w-full min-h-[80px] select-none items-center justify-center"
            spaceBetween={50}
            slidesPerView={1}
            speed={800}
            autoplay={{
                delay: 3500,
                disableOnInteraction: true,
            }}
            navigation={{
                nextEl: ".announce-next",
                prevEl: ".announce-prev",
            }}
            loop={props.announcement.length > 1}
            modules={[Navigation, Autoplay]}>
            {props.announcement.map((item: any, index: number) => (
                <SwiperSlide key={index} className="w-full h-full">
                    <div className="h-full flex items-center justify-center">
                        <RichTextRender
                            content={item.raw}
                            classNameP="font-dmsans text-center w-[80%] h-full"
                        />
                    </div>
                </SwiperSlide>
            ))}
            <div
                className={`announce-prev absolute top-1/2 left-2 -translate-y-1/2 z-20 cursor-pointer text-ganache/60 rounded-full h-5 w-5 hover:text-ganache duration-300 transition-all ease-in-out ${
                    props.announcement.length === 1 &&
                    "opacity-0 pointer-events-none"
                }`}
                aria-hidden={props.announcement.length === 1}>
                <IoIosArrowBack className="h-5 w-5" />
            </div>
            <div
                className={`announce-next absolute top-1/2 right-2 -translate-y-1/2 z-20 cursor-pointer text-ganache/60 hover:text-ganache rounded-full h-5 w-5 duration-300 transition-all ease-in-out ${
                    props.announcement.length === 1 &&
                    "opacity-0 pointer-events-none"
                }`}
                aria-hidden={props.announcement.length === 1}>
                <IoIosArrowForward className="h-5 w-5" />
            </div>
        </Swiper>
    );
}