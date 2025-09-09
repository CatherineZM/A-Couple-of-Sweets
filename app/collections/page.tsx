// data fetching
import getSeasonalData from "@/modules/fetchData/getSeasonalData";
import getFeaturedData from "@/modules/fetchData/getFeaturedData";
import getCollectionData from "@/modules/fetchData/getCollectionData";

// local component
import CollectionList from "@/modules/components/collections/collectionList";
import { H1, H4, Paragraph } from "@/modules/components/utils";

// external component
import { LuWheatOff, LuMilkOff, LuNutOff } from "react-icons/lu";
import { RichText } from "@graphcms/rich-text-react-renderer";

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

    return (
        <div className='bg-cream'>
            <div className='pt-navbar pb-6 md:pb-navbar px-mobileX md:px-tabletX lg:px-desktopX 3xl:px-plusDesktopX flex flex-col items-center w-full'>
                <div className='flex flex-col text-center items-center gap-y-4 w-full md:w-[80%]'>
                    <H1 className='text-ganache'>{collection.title}</H1>
                    <RichText
                        content={collection.description?.raw}
                        renderers={{
                            p: ({ children }) => (
                                <H4 className='text-ganache'>{children}</H4>
                            ),
                        }}
                    />
                    <div className='flex flex-row gap-x-1 justify-between md:justify-normal md:gap-4'>
                        {dietaryFlags.map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className='flex flex-row items-center gap-x-0.5 md:gap-2'>
                                <div className='flex items-center justify-center border-2 rounded-full border-olive h-7 w-7'>
                                    <Icon className='text-olive h-5 w-5' />
                                </div>
                                <Paragraph strong className='text-olive'>
                                    {label}
                                </Paragraph>
                            </div>
                        ))}
                    </div>
                </div>
                <CollectionList seasonal={seasonal} featured={featured} />
            </div>
        </div>
    );
}
