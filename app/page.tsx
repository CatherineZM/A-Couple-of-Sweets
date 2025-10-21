// Next.js specific
import { Metadata } from "next";
import Image from 'next/image';

// data fetch
import getHomeData from "@/modules/fetchData/getHomeData";
import getSeasonalData from "@/modules/fetchData/getSeasonalData";
import getFeaturedData from "@/modules/fetchData/getFeaturedData";

// local component
import { H1, RichTextRender } from "@/modules/components/utils/index";
import CollectionRow from "@/modules/components/home/collection";
import TextScroll from "@/modules/components/home/textScroll";
import HomeAnnouncement from "@/modules/components/home/announcement";
import FloatingImage from "@/modules/components/utils/floatingImage";

export const metadata: Metadata = {
    title: "A Couple of Sweets",
    description:
        "A Couple of Sweets is a Toronto-based bakery where every dessert is made with integrity, free from artificial sweeteners, colors, and flavors. We believe that great desserts don’t need unnecessary additives—just quality ingredients, skill, and passion.",
    keywords: [
        "Toronto bakery",
        "natural sweets Toronto",
        "handmade desserts Toronto",
        "home-baked sweets",
        "no artificial ingredients bakery",
        "professional pastry chefs Toronto",
    ],
    openGraph: {
        title: "A Couple of Sweets",
        description:
            "A Couple of Sweets is a Toronto-based bakery where every dessert is made with integrity, free from artificial sweeteners, colors, and flavors. We believe that great desserts don’t need unnecessary additives—just quality ingredients, skill, and passion.",
        url: "http://acoupleofsweets.ca",
        siteName: "A Couple of Sweets",
        images: [
            {
                url: "http://acoupleofsweets.ca/op-cover.png",
                width: 1200,
                height: 630,
                alt: "All-natural sweets by A Couple of Sweets",
            },
        ],
        locale: "en_CA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "A Couple of Sweets",
        description:
            "Toronto bakery specializing in handmade, home-baked sweets using only natural ingredients. Crafted by professional chefs.",
        images: ["http://acoupleofsweets.ca/op-cover.png"],
    },
};

export default async function Home(): Promise<JSX.Element> {
    const HomeData = getHomeData();
    const SeasonalData = getSeasonalData();
    const FeaturedData = getFeaturedData();

    const home = (await HomeData).homeData;
    const seasonal = (await SeasonalData).productLists;
    const featured = (await FeaturedData).featuredLists;

    const theme = {
        green: {
            bgColor: "bg-transparent md:bg-olive",
            titleColor: "text-ganache md:text-buttercream",
            btnTheme: "light",
            btnThemeMobile: "dark",
            btnFill: true,
            btnText: "text-ganache",
        },
        brown: {
            bgColor: "bg-transparent md:bg-whiskey",
            titleColor: "text-ganache",
            btnTheme: "light",
            btnThemeMobile: "dark",
            btnFill: true,
            btnText: "text-ganache",
        },
    };

    const icons = [
        {
            icon: "/icons/berries.png",
            className: "top-[15%] -right-[5%] md:top-[10%] md:left-[5%]",
            svgClassName: "w-[15vw] md:w-[12vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: 10,
            yRange: -20,
            duration: 3,
        },
        {
            icon: "/icons/pistachio.png",
            className: "top-[25%] -left-[5%] md:top-[20%] md:left-[85%]",
            svgClassName: "w-[20vw] md:w-[10vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: 6,
            yRange: 20,
            duration: 3,
        },
    ];

    const icons2 = [
        {
            icon: "/icons/lemon.png",
            className: "top-[15%] -right-[5%] md:top-[10%] md:left-[5%]",
            svgClassName: "w-[15vw] md:w-[12vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: 10,
            yRange: -20,
            duration: 3,
        },
        {
            icon: "/icons/olive_oil.png",
            className: "top-[25%] left-[5%] md:top-[20%] md:left-[85%]",
            svgClassName: "w-[20vw] md:w-[10vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: 10,
            yRange: 2,
            duration: 3,
        },
    ];

    const icons3 = [
        {
            icon: "/icons/honey.png",
            className: "top-[15%] -right-[5%] md:top-[10%] md:left-[5%]",
            svgClassName: "w-[15vw] md:w-[12vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: 10,
            yRange: -20,
            duration: 3,
        },
        {
            icon: "/icons/spatula.png",
            className: "top-[25%] -left-[5%] md:top-[20%] md:left-[105%]",
            svgClassName:
                "w-[20vw] md:w-[10vw] md:max-w-[60%] xl:max-w-[70%] rotate-45",
            xRange: 10,
            yRange: -10,
            duration: 3,
        },
    ];

    const tabs = [
        { id: "current", label: "Seasonal" },
        { id: "all-time", label: "All-time Fav" },
        { id: "past", label: "Past Seasonal" },
    ];

    const getTabUrl = (label: string) => {
        const id = tabs.find((t) => t.label === label)?.id;
        return id ? `/collections?utm=${id}` : "/collections";
    };

    return (
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
            <div className="py-navbar px-mobileX md:px-tabletX lg:px-desktopX 3xl:px-plusDesktopX flex flex-col gap-y-6">
                <div className="max-w-screen-2xl flex flex-col w-full justify-center items-center pt-8 md:py-8 gap-y-3">
                    <H1 className="font-dmsans text-center">{home.welcome}</H1>
                    <RichTextRender
                        content={home.slogan.raw}
                        classNameH2="font-dmsans text-center"
                    />
                </div>
                <div className="max-w-screen-2xl w-full border-y border-t-ganache border-b-ganache text-ganache py-0 md:py-5 px-2">
                    <HomeAnnouncement announcement={home.announcement} />
                </div>
                <CollectionRow
                    name={seasonal[0].collectionName}
                    description={seasonal[0].collectionDescription}
                    productList={seasonal[0].productList}
                    theme={theme.green}
                    url={getTabUrl("Seasonal")}
                />
                <div className="w-[99vw] relative left-1/2 right-1/2 -mx-[50vw] overflow-x-clip">
                    <hr className="border-t border-ganache/70 my-3" />
                    <TextScroll
                        text={["Natural Ingredients", "Natural Ingredients"]}
                        baseVelocity={-5}
                        images={["/icons/tumeric.png", "/icons/beetroot.png"]}
                    />
                    <hr className="border-t border-ganache/70 my-3" />
                    <TextScroll
                        text={[
                            "Dairy-free Option",
                            "Nut-free Option",
                            "Gluten-free Option",
                        ]}
                        baseVelocity={5}
                        images={[
                            "/icons/chocolate.png",
                            "/icons/vanilla.png",
                            "/icons/spirulina_powder.png",
                        ]}
                    />
                    <hr className="border-t border-ganache/70 my-3" />
                </div>
                <div className="block md:hidden relative top-0 left-0 w-full h-full pointer-events-none overflow-x-visible -mx-mobileX md:-mx-tabletX lg:-mx-desktopX 3xl:-mx-plusDesktopX">
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
                <CollectionRow
                    name={featured[0].collectionName}
                    description={featured[0].collectionDescription}
                    productList={featured[0].productList}
                    theme={theme.brown}
                    url={getTabUrl("All-time Fav")}
                />
                <div className="relative top-0 left-0 w-full h-full pointer-events-none overflow-x-visible -mx-mobileX md:-mx-tabletX lg:-mx-desktopX 3xl:-mx-plusDesktopX">
                    {icons3.map((item, index) => (
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
    );
}
