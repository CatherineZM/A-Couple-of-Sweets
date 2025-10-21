// data fetching
import getSeasonalData from "@/modules/fetchData/getSeasonalData";
import getFeaturedData from "@/modules/fetchData/getFeaturedData";
import getCollectionData from "@/modules/fetchData/getCollectionData";

// local component
import FloatingImage from "@/modules/components/utils/floatingImage";
import CollectionList from "@/modules/components/collections/collectionList";
import { H1, H4, Paragraph } from "@/modules/components/utils";

// external component
import { LuWheatOff, LuMilkOff, LuNutOff } from "react-icons/lu";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Suspense } from "react";

import type { Metadata } from "next";
import JsonLd from "@/modules/components/utils/jsonLD";

export const metadata: Metadata = {
    title: "Dessert Collections — Seasonal & Signature | A Couple of Sweets",
    description:
        "Explore our Toronto-made dessert collections: signature cookies, tarts, cakes, and rotating seasonal boxes — all-natural, no artificial colours, flavours, or sweeteners.",
    alternates: { canonical: "https://acoupleofsweets.ca/collections" },
    keywords: [
        "Toronto bakery",
        "dessert collections",
        "seasonal desserts Toronto",
        "handmade sweets",
        "natural desserts",
    ],
    openGraph: {
        title: "Dessert Collections — Seasonal & Signature",
        description:
            "Signature and seasonal collections baked in Toronto with real ingredients only.",
        url: "https://acoupleofsweets.ca/collections",
        siteName: "A Couple of Sweets",
        images: [
            {
                url: "https://acoupleofsweets.ca/op-cover.png",
                width: 1200,
                height: 630,
                alt: "Assorted all-natural dessert collections",
            },
        ],
        locale: "en_CA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dessert Collections — Seasonal & Signature",
        images: ["https://acoupleofsweets.ca/op-cover.png"],
    },
};

export default async function Collections({ searchParams }: { searchParams?: Record<string, string | string[] | undefined> }): Promise<JSX.Element> {
    // Read UTM from query string (keep single canonical page)
    const rawUtm = searchParams?.utm_source;
    const utm = Array.isArray(rawUtm) ? rawUtm[0] : rawUtm || "";

    const jsonLdBase = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Dessert Collections",
        url: "https://acoupleofsweets.ca/collections",
        isPartOf: {
            "@type": "WebSite",
            name: "A Couple of Sweets",
            url: "https://acoupleofsweets.ca",
        },
    };

    let collectionDetails = {};

    switch (utm) {
        case "current":
            collectionDetails = {
                about: {
                    "@type": "ProductCollection",
                    name: "Seasonal Collection",
                    description:
                        "We release monthly drops of seasonal favourites, including new cake flavours, tarts, dessert cups, and cookies!",
                    image: "https://acoupleofsweets.ca/img/collections/op-cover.png",
                },
            };
            break;
        case "all-time":
            collectionDetails = {
                about: {
                    "@type": "ProductCollection",
                    name: "All-time Fav",
                    description:
                        "Our most popular dessert cups, tarts and cookies that's all-year around.",
                    image: "https://acoupleofsweets.ca/img/collections/op-cover.png",
                },
            };
            break;
        case "past":
            collectionDetails = {
                about: {
                    "@type": "ProductCollection",
                    name: "Past Seasonal",
                    description:
                        "Our past seasonal collections that are temporarily unavailable.",
                    image: "https://acoupleofsweets.ca/img/collections/op-cover.png",
                },
            };
            break;
        default:
            collectionDetails = {
                about: {
                    "@type": "ProductCollection",
                    name: "Collections",
                    description:
                        "Signature and seasonal collections baked in Toronto with real ingredients only.",
                    image: "https://acoupleofsweets.ca/img/collections/op-cover.png",
                    brand: {
                        "@type": "Organization",
                        name: "A Couple of Sweets",
                    },
                },
            };
            break;
    }

    const jsonLd = { ...jsonLdBase, ...collectionDetails };
    
    const SeasonalData = getSeasonalData();
    const FeaturedData = getFeaturedData();
    const Collection = getCollectionData();

    const seasonal = (await SeasonalData).productLists;
    const featured = (await FeaturedData).featuredLists;
    const collection = (await Collection).collection[0];

    const dietaryFlags = [
        { icon: LuWheatOff, label: "Gluten-Free" },
        { icon: LuMilkOff, label: "Dairy-Free" },
        { icon: LuNutOff, label: "Nut-Free" },
    ];

    const icons = [
        {
            icon: "/icons/vanilla.png",
            className: "top-[13%] -right-[0%] md:top-[10%] md:left-[5%]",
            svgClassName: "w-[12vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: 10,
            yRange: -20,
            duration: 3,
        },
        {
            icon: "/icons/beet_powder.png",
            className: "top-[15%] -left-[0%] md:top-[20%] md:left-[85%]",
            svgClassName: "w-[15vw] md:w-[10vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: 6,
            yRange: 10,
            duration: 3,
        },
    ];

        const icons2 = [
            {
                icon: "/icons/tumeric.png",
                className: "top-[5%] -right-[5%] md:top-[-5%] md:left-[95%]",
                svgClassName:
                    "w-[15vw] md:w-[12vw] md:max-w-[60%] xl:max-w-[70%]",
                xRange: 10,
                yRange: 10,
                duration: 2,
            },
            {
                icon: "/icons/rolling_pin.png",
                className: "top-[25%] -left-[5%] md:top-[20%] md:left-[-5%]",
                svgClassName:
                    "w-[20vw] md:w-[10vw] md:max-w-[60%] xl:max-w-[70%] rotate-45",
                xRange: 10,
                yRange: -10,
                duration: 3,
            },
        ];

    return (
        <>
            <JsonLd json={jsonLd} />
            <div className="bg-cream">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-x-clip">
                    {icons.map((item, index) => (
                        <FloatingImage
                            key={index}
                            xRange={item.xRange}
                            yRange={item.yRange}
                            duration={item.duration}
                            className={item.className}>
                            <div
                                className={`${item.svgClassName} relative aspect-square`}>
                                <img
                                    src={item.icon}
                                    alt=""
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </FloatingImage>
                    ))}
                </div>
                <div className="py-navbar md:pb-navbar px-mobileX md:px-tabletX lg:px-desktopX 3xl:px-plusDesktopX flex flex-col items-center w-full">
                    <div className="flex flex-col text-center items-center gap-y-4 w-full md:w-[80%]">
                        <H1 className="text-ganache">{collection.title}</H1>
                        <RichText
                            content={collection.description?.raw}
                            renderers={{
                                p: ({ children }) => (
                                    <H4 className="text-ganache">{children}</H4>
                                ),
                            }}
                        />
                        <div className="flex flex-row gap-x-1 justify-between md:justify-normal md:gap-4">
                            {dietaryFlags.map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className="flex flex-row items-center gap-x-0.5 md:gap-2">
                                    <div className="flex items-center justify-center border-2 rounded-full border-olive h-7 w-7">
                                        <Icon className="text-olive h-5 w-5" />
                                    </div>
                                    <Paragraph strong className="text-olive">
                                        {label}
                                    </Paragraph>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Suspense
                        fallback={
                            <div className="mt-8 text-ganache">
                                Loading collections…
                            </div>
                        }>
                        <CollectionList
                            seasonal={seasonal}
                            featured={featured}
                        />
                    </Suspense>
                    <div className="relative top-0 left-0 w-full h-full pointer-events-none overflow-x-visible -mx-mobileX md:-mx-tabletX lg:-mx-desktopX 3xl:-mx-plusDesktopX">
                        {icons2.map((item, index) => (
                            <FloatingImage
                                key={index}
                                xRange={item.xRange}
                                yRange={item.yRange}
                                duration={item.duration}
                                className={item.className}>
                                <div
                                    className={`${item.svgClassName} relative aspect-square`}>
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </FloatingImage>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
