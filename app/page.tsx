// Next.js specific
import { Metadata } from 'next'

// data fetch
import getHomeData from "@/modules/fetchData/getHomeData";
import getSeasonalData from '@/modules/fetchData/getSeasonalData';
import getFeaturedData from '@/modules/fetchData/getFeaturedData';

// local component
import { H1, H4, RichTextRender } from '@/modules/components/utils/index';
import CollectionRow from '@/modules/components/home/collection';
import TextScroll from '@/modules/components/home/textScroll';
import HomeAnnouncement from '@/modules/components/home/announcement';
import FloatingImage from '@/modules/components/utils/floatingImage';

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
            titleColor: "test-ganache md:text-buttercream",
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
            className: "bottom-[25%] -left-[3%] md:top-[10%] md:left-[5%]",
            svgClassName: "w-[20vw] md:w-[12vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: 10,
            yRange: -20,
            duration: 3,
        },
        {
            icon: "/icons/pistachio.png",
            className: "top-[25%] -left-[3%] md:top-[20%] md:left-[90%]",
            svgClassName: "w-[20vw] md:w-[10vw] md:max-w-[60%] xl:max-w-[70%]",
            xRange: 10,
            yRange: 20,
            duration: 3,
        },
    ];

    return (
        <div className="bg-cream">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
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
            <div className="py-navbar px-mobileX md:px-tabletX lg:px-desktopX 3xl:px-plusDesktopX flex flex-col gap-y-6">
                <div className="max-w-screen-2xl flex flex-col w-full justify-center items-center pt-8 md:py-8 gap-y-3">
                    <H1 className="font-dmsans text-center">{home.welcome}</H1>
                    <RichTextRender
                        content={home.slogan.raw}
                        className="font-dmsans text-center"
                    />
                </div>
                <div className="max-w-screen-2xl w-full border-y border-t-ganache border-b-ganache text-ganache py-5 px-2">
                    <HomeAnnouncement announcement={home.announcement} />
                </div>
                <CollectionRow
                    name={seasonal[0].collectionName}
                    description={seasonal[0].collectionDescription}
                    productList={seasonal[0].productList}
                    theme={theme.green}
                />
                <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
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
                <CollectionRow
                    name={featured[0].collectionName}
                    description={featured[0].collectionDescription}
                    productList={featured[0].productList}
                    theme={theme.brown}
                />
            </div>
        </div>
    );
}
