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

export default async function Collections(): Promise<JSX.Element> {
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
                    <CollectionList seasonal={seasonal} featured={featured} />
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
    );
}
