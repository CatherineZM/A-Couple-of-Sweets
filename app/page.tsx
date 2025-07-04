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

export default async function Home(): Promise<JSX.Element> {
    const HomeData = getHomeData();
    const SeasonalData = getSeasonalData();
    const FeaturedData = getFeaturedData();

    const home = (await HomeData).homeData;
    const seasonal = (await SeasonalData).productLists;
    const featured = (await FeaturedData).featuredLists;

    const theme = {
        green: {
            bgColor: "bg-olive",
            titleColor: "text-buttercream",
            btnTheme: "light",
            btnFill: true,
            btnText: "text-ganache",
        },
        brown: {
            bgColor: "bg-whiskey",
            titleColor: "text-ganache",
            btnTheme: "light",
            btnFill: true,
            btnText: "text-ganache",
        },
    };
    return (
        <div className="pt-navbar px-mobileX md:px-tabletX lg:px-desktopX 3xl:px-plusDesktopX bg-cream flex flex-col gap-y-6">
            <div className="flex flex-col w-full justify-center items-center py-8 gap-y-3">
                <H1 className="font-dmsans text-center">{home.welcome}</H1>
                <RichTextRender
                    content={home.slogan.raw}
                    className="font-dmsans text-center"
                />
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
    );
}
