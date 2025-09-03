"use client";
import { useState } from "react";

// types
import { Product, DietaryRestriction } from "@/modules/gql/graphql";

// internal components
import {
    H4,
    Paragraph,
    RichTextRender,
    CldImage,
    Button,
} from "@/modules/components/utils/index";
import PopupModal from "./popup";

// external components
import { LuWheatOff, LuMilkOff, LuNutOff, LuChevronDown } from "react-icons/lu";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

interface Props {
    product: Product;
    collection: string;
}

// Hygraph RichText utils
const isRichTextEmpty = (raw?: any): boolean => {
    if (!raw) return true;
    const walk = (node: any): boolean => {
        if (!node) return true;
        if (Array.isArray(node)) return node.every(walk);
        if (typeof node.text === "string") return node.text.trim().length === 0;
        if (node.children) return walk(node.children);
        return true;
    };
    return walk((raw as any).children ?? raw);
};

export default function ProductCard(props: Props): JSX.Element {
    const { product, collection } = props;
    const [open, setOpen] = useState(false);
    const [activeFlavour, setActiveFlavour] = useState("");

    const selectedFlavour =
        product.flavour?.find((f) => f.flavourName === activeFlavour) ??
        product.flavour?.[0] ??
        null;

    const flavourPriceRaw = selectedFlavour?.flavourPrice?.raw;
    const hasFlavourPrice =
        flavourPriceRaw && !isRichTextEmpty(flavourPriceRaw);
    const displayedPriceRaw = hasFlavourPrice
        ? flavourPriceRaw
        : product.price?.raw ?? null;

    console.log(selectedFlavour);

    const effectiveDietary = selectedFlavour?.dietary ?? product.dietary ?? [];

    const handlePopupClose = () => {
        setOpen(false);
    };

    return (
        <div className="flex flex-col h-full w-full gap-y-2.5 max-w-60 justify-between">
            {product.productPhoto[0] && (
                <CldImage
                    src={`${product.productPhoto[0].url}`}
                    alt={product.name}
                    width={800}
                    height={800}
                    sizes="25vw, (min-width: 1024px) 50vw"
                    className="aspect-square w-full object-cover rounded-lg"
                />
            )}
            <Paragraph strong className="">
                {product.name}
            </Paragraph>

            <div className="flex flex-row justify-between">
                {product.price && (
                    <div className="gap-y-0">
                        <RichTextRender content={product.price?.raw} />
                    </div>
                )}
                <div className="flex flex-row gap-x-1">
                    {product.dietary.includes(
                        DietaryRestriction.GlutenFree
                    ) && (
                        <div className="flex items-center justify-center border-2 rounded-full border-olive h-7 w-7">
                            <LuWheatOff className="text-olive h-5 w-5" />
                        </div>
                    )}
                    {product.dietary.includes(DietaryRestriction.DairyFree) && (
                        <div className="flex items-center justify-center border-2 rounded-full border-olive h-7 w-7">
                            <LuMilkOff className="text-olive h-5 w-5" />
                        </div>
                    )}
                    {product.dietary.includes(DietaryRestriction.NutFree) && (
                        <div className="flex items-center justify-center border-2 rounded-full border-olive h-7 w-7">
                            <LuNutOff className="text-olive h-5 w-5" />
                        </div>
                    )}
                </div>
            </div>

            <RichTextRender content={product.shortDescription.raw} />
            <div className="relative flex flex-col justify-center gap-y-1.5">
                <Button
                    action={() =>
                        window.open(
                            "https://www.instagram.com/a_couple_ofsweets?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                            "_blank"
                        )
                    }
                    fill
                    theme="dark"
                    className="py-1 md:py-4">
                    Order Now
                </Button>
                <Button
                    action={() => setOpen(true)}
                    type="button"
                    theme="dark"
                    className="py-1 md:py-4">
                    Read More
                </Button>
                <PopupModal
                    isOpen={open}
                    onClose={handlePopupClose}
                    title={collection}>
                    <div className="grid grid-cols-2 gap-x-4 w-full">
                        <div className="basis-1/2 w-full popupSwiper flex items-center">
                            <Swiper
                                initialSlide={0}
                                spaceBetween={50}
                                rewind
                                pagination
                                centeredSlides
                                modules={[Pagination, EffectCreative]}
                                effect="creative"
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: ["-130%", 0, -500],
                                    },
                                    next: {
                                        shadow: true,
                                        translate: ["130%", 0, -500],
                                    },
                                }}
                                className="teamSwiper">
                                {product.productPhoto.map((item, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className="h-full w-auto flex items-center">
                                        <CldImage
                                            height={400}
                                            width={300}
                                            crop="fill"
                                            gravity="center"
                                            style={{ objectPosition: "center" }}
                                            src={item.public_id}
                                            sizes="(min-width: 768px) 48vw, (min-width: 1280px) 78vw"
                                            alt={item.display_name}
                                            className="w-full h-auto"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="basis-1/2 text-ganache flex flex-col gap-y-2 md:gap-y-6">
                            <Paragraph strong className="text-ganache">
                                {product.name}
                            </Paragraph>
                            <div className="flex flex-col gap-y-1.5">
                                {product.flavour.length > 0 && (
                                    <div className="flex flex-col gap-y-1.5">
                                        <Paragraph>Flavours:</Paragraph>
                                        {/* Mobile: dropdown */}
                                        <div className="relative md:hidden">
                                            <label
                                                htmlFor={`flavour-${product.name}`}
                                                className="sr-only">
                                                Choose flavour
                                            </label>
                                            <select
                                                id={`flavour-${product.name}`}
                                                value={
                                                    activeFlavour ||
                                                    product.flavour?.[0]
                                                        ?.flavourName ||
                                                    ""
                                                }
                                                onChange={(e) =>
                                                    setActiveFlavour(
                                                        e.target.value
                                                    )
                                                }
                                                className="w-full rounded-lg border-2 border-olive active:border-ganache bg-transparent text-ganache px-3 py-2 pr-10 capitalize appearance-none whitespace-normal break-words">
                                                {product.flavour.map((f, i) => (
                                                    <option
                                                        key={i}
                                                        value={f.flavourName}
                                                        className="capitalize">
                                                        {f.flavourName}
                                                    </option>
                                                ))}
                                            </select>
                                            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                                <LuChevronDown className="h-5 w-5 text-ganache" />
                                            </span>
                                        </div>

                                        {/* Desktop: buttons */}
                                        <div className="hidden md:flex flex-row gap-x-1 gap-y-1.5 flex-wrap">
                                            {product.flavour.map(
                                                (item, index) => (
                                                    <Button
                                                        theme="dark"
                                                        key={index}
                                                        isActive={
                                                            item.flavourName ===
                                                            activeFlavour
                                                        }
                                                        action={() =>
                                                            setActiveFlavour(
                                                                item.flavourName
                                                            )
                                                        }
                                                        className="px-2 py-0.5 capitalize">
                                                        {item.flavourName}
                                                    </Button>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                                <div className="flex flex-row justify-between items-center">
                                    {displayedPriceRaw && (
                                        <div className="gap-y-0">
                                            <RichTextRender
                                                content={displayedPriceRaw}
                                            />
                                        </div>
                                    )}
                                    <div className="flex flex-row gap-x-1">
                                        {effectiveDietary.includes(
                                            DietaryRestriction.GlutenFree
                                        ) && (
                                            <div className="flex items-center justify-center border-2 rounded-full border-olive h-7 w-7">
                                                <LuWheatOff className="text-olive h-5 w-5" />
                                            </div>
                                        )}
                                        {effectiveDietary.includes(
                                            DietaryRestriction.DairyFree
                                        ) && (
                                            <div className="flex items-center justify-center border-2 rounded-full border-olive h-7 w-7">
                                                <LuMilkOff className="text-olive h-5 w-5" />
                                            </div>
                                        )}
                                        {effectiveDietary.includes(
                                            DietaryRestriction.NutFree
                                        ) && (
                                            <div className="flex items-center justify-center border-2 rounded-full border-olive h-7 w-7">
                                                <LuNutOff className="text-olive h-5 w-5" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {selectedFlavour?.flavourDescription && (
                                <RichTextRender
                                    content={
                                        selectedFlavour.flavourDescription.raw
                                    }
                                />
                            )}
                            <RichTextRender
                                content={
                                    product.fullDescription
                                        ? product.fullDescription.raw
                                        : product.shortDescription.raw
                                }
                            />
                            <Button
                                action={() =>
                                    window.open(
                                        "https://www.instagram.com/a_couple_ofsweets?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                                        "_blank"
                                    )
                                }
                                theme="dark"
                                className="py-2 px-4 w-fit">
                                Order Now
                            </Button>
                        </div>
                    </div>
                </PopupModal>
            </div>
        </div>
    );
}
