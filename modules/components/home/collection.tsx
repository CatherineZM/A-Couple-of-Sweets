"use client";

// types
import { Product } from "@/modules/gql/graphql";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// internal component
import {H2, Paragraph, Button, RichTextRender} from "@/modules/components/utils/index"
import ProductCard from "@/modules/components/home/productCard";

interface Props {
    name: string;
    description: {
        raw: any;
    };
    productList: Array<Product>;
    theme: any;
}

export default function CollectionRow (props: Props): JSX.Element {
    return (
        <div className="flex flex-col md:flex-row md:items-stretch h-full md:gap-x-6">
            <div
                className={`${props.theme.bgColor} flex flex-col py-8 px-4 md:basis-1/4 rounded-xl gap-y-4 justify-center md:min-h-full`}>
                <H2 className={`${props.theme.titleColor}`}>{props.name}</H2>
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
            <Swiper
                className="productSwiper md:basis-3/4 h-full"
                spaceBetween={50}
                slidesPerView={
                    props.productList.length <= 3
                        ? props.productList.length
                        : 3.5
                }
                pagination={true}
                loop={props.productList.length > 1}
                modules={[Pagination]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView:
                            props.productList.length < 3
                                ? props.productList.length
                                : 3.5,
                    },
                }}>
                {props.productList.map((item, index) => (
                    <SwiperSlide key={index} className="flex h-auto">
                        <ProductCard product={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}