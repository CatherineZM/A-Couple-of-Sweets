"use client";
// import React components
import { useEffect, useState } from "react";
// types
import { Product } from "@/modules/gql/graphql";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// internal component
import { H2, Paragraph, Button, RichTextRender } from "@/modules/components/utils/index"
import ProductCard from "@/modules/components/home/productCard";

// external components
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

interface Props {
    name: string;
    description: {
        raw: any;
    };
    productList: Array<Product>;
    theme: any;
}

export default function CollectionRow (props: Props): JSX.Element {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!mounted) return <></>;

    return (
        <div className="flex flex-col md:flex-row md:items-stretch h-full gap-y-3 md:gap-x-6 w-full">
            <div
                className={`${props.theme.bgColor} flex flex-col py-3 md:py-8 px-4 basis-full md:basis-1/4 rounded-xl gap-y-2 md:gap-y-4 justify-center md:min-h-full text-center md:text-start`}>
                <H2 className={`${props.theme.titleColor} `}>{props.name}</H2>
                <RichTextRender
                    content={props.description.raw}
                    className={`${props.theme.titleColor}`}
                />
                <Button
                    theme={props.theme.btnTheme}
                    fill={props.theme.btnFill}
                    className="hidden md:block w-full py-4">
                    <Paragraph strong className={props.theme.btnText}>
                        View All
                    </Paragraph>
                </Button>
            </div>
            <div className="basis-full md:basis-3/4 overflow-hidden w-full">
                <Swiper
                    className="productSwiper h-full select-none"
                    spaceBetween={50}
                    slidesPerView={
                        props.productList.length <= 3
                            ? props.productList.length
                            : 3.5
                    }
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    loop={props.productList.length > 1}
                    modules={[Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView:
                                props.productList.length <= 3
                                    ? props.productList.length
                                    : 3.5,
                        },
                    }}>
                    {props.productList.map((item, index) => (
                        <SwiperSlide key={index} className="flex-shrink-0">
                            <ProductCard product={item} />
                        </SwiperSlide>
                    ))}
                    <div
                        className={`custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-20 cursor-pointer text-cream/60 bg-olive/30 rounded-full h-10 w-10 hover:text-cream hover:bg-olive/80 duration-300 transition-all ease-in-out ${
                            !isMobile &&
                            props.productList.length <= 3 &&
                            "opacity-0 pointer-events-none"
                        }`}
                        aria-hidden={isMobile || props.productList.length <= 3}>
                        <IoIosArrowDropleft className="h-10 w-10" />
                    </div>
                    <div
                        className={`custom-next absolute top-1/2 right-2 -translate-y-1/2 z-20 cursor-pointer text-cream/60 bg-olive/30 hover:text-cream hover:bg-olive/80 rounded-full h-10 w-10 duration-300 transition-all ease-in-out ${
                            !isMobile &&
                            props.productList.length <= 3 &&
                            "opacity-0 pointer-events-none"
                        }`}
                        aria-hidden={isMobile || props.productList.length <= 3}>
                        <IoIosArrowDropright className="h-10 w-10" />
                    </div>
                </Swiper>
            </div>
            <Button
                theme={props.theme.btnThemeMobile}
                fill={props.theme.btnFill}
                className="block md:hidden w-full py-2">
                <Paragraph strong className={props.theme.btnText}>
                    View All
                </Paragraph>
            </Button>
        </div>
    );
}