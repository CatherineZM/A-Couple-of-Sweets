// data fetching
import getMarketData from "@/modules/fetchData/getMarketData";
import getAchieveData from "@/modules/fetchData/getAchieveData";
import getAboutData from "@/modules/fetchData/getAboutData";

// local component
import AboutList from "@/modules/components/about/aboutList";
import FloatingImage from "@/modules/components/utils/floatingImage";

// external component
import { Suspense } from "react";
import Image from "next/image";

import type { Metadata } from "next";
import JsonLd from "@/modules/components/utils/jsonLD";

export const metadata: Metadata = {
    title: "About Us | A Couple of Sweets",
    description:
        "Meet our chef duo and see where to find us at Toronto markets. Discover our philosophy and notable achievements — always 100% natural desserts.",
    alternates: { canonical: "https://acoupleofsweets.ca/about" },
    openGraph: {
        title: "About Us | A Couple of Sweets",
        description:
            "Toronto-based, chef-led, all-natural bakery. Find our market schedule and milestones.",
        url: "https://acoupleofsweets.ca/about",
        siteName: "A Couple of Sweets",
        images: [
            {
                url: "https://acoupleofsweets.ca/op-cover.png",
                width: 1200,
                height: 630,
                alt: "A Couple of Sweets",
            },
        ],
        locale: "en_CA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us — A Couple of Sweets",
        images: ["https://acoupleofsweets.ca/op-cover.png"],
    },
};

// --- JSON-LD blocks for About page ---
const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "A Couple of Sweets",
    url: "https://acoupleofsweets.ca/about",
    logo: "https://acoupleofsweets.ca/op-cover.png",
    description:
        "A Toronto-based bakery where every dessert is made with integrity, free from artificial sweeteners, colours, and flavours.",
    sameAs: [
        "https://www.instagram.com/a_couple_ofsweets",
    ],
};

const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About A Couple of Sweets",
    url: "https://acoupleofsweets.ca/about",
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://acoupleofsweets.ca/",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://acoupleofsweets.ca/about",
            },
        ],
    },
    about: {
        "@type": "Organization",
        name: "A Couple of Sweets",
    },
};

export default async function About(): Promise<JSX.Element> {
    const markets = getMarketData();
    const achievements = getAchieveData();
    const about = getAboutData();

    const marketContent = (await markets).marketData;
    const achieveContent = (await achievements).achieveData;
    const aboutContent = (await about).aboutData;

    const icons = [
        {
            icon: "/icons/chocolate.png",
            className: "top-[12%] -right-[5%] md:top-[10%] md:left-[5%]",
            svgClassName: "w-[12vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: 10,
            yRange: -20,
            duration: 3,
        },
        {
            icon: "/icons/olive_oil.png",
            className: "top-[27%] -left-[5%] md:top-[20%] md:left-[85%]",
            svgClassName: "w-[16vw] md:w-[10vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: 6,
            yRange: 20,
            duration: 3,
        },
    ];

    const icons2 = [
        {
            icon: "/icons/lemon.png",
            className: "top-[15%] -right-[0%] md:top-[10%] md:left-[-5%]",
            svgClassName: "w-[15vw] md:w-[12vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: 10,
            yRange: -20,
            duration: 3,
        },
        {
            icon: "/icons/honey.png",
            className: "top-[25%] -left-[5%] md:top-[20%] md:left-[95%]",
            svgClassName: "w-[20vw] md:w-[10vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: -10,
            yRange: -10,
            duration: 2,
        },
    ];

    return (
        <>
            <JsonLd json={orgJsonLd} />
            <JsonLd json={webPageJsonLd} />
            <div className="bg-cream">
                <div className="py-navbar md:pb-navbar px-mobileX md:px-tabletX lg:px-desktopX 3xl:px-plusDesktopX flex flex-col items-center w-full">
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
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        fill
                                        sizes="(max-width: 768px) 40vw, (max-width: 1280px) 25vw, 15vw"
                                        className="object-contain"
                                    />
                                </div>
                            </FloatingImage>
                        ))}
                    </div>
                    <Suspense
                        fallback={
                            <div className="mt-8 text-ganache">
                                Fetching contents...
                            </div>
                        }>
                        <AboutList
                            markets={marketContent}
                            achievements={achieveContent}
                            about={aboutContent}
                        />
                    </Suspense>
                    <div className="relative top-[-20px] left-0 w-full h-full pointer-events-none overflow-x-visible -mx-mobileX md:-mx-tabletX lg:-mx-desktopX 3xl:-mx-plusDesktopX ">
                        {icons2.map((item, index) => (
                            <FloatingImage
                                key={index}
                                xRange={item.xRange}
                                yRange={item.yRange}
                                duration={item.duration}
                                className={item.className}>
                                <div
                                    className={`${item.svgClassName} relative aspect-square`}>
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        fill
                                        sizes="(max-width: 768px) 40vw, (max-width: 1280px) 25vw, 15vw"
                                        className="object-contain"
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
