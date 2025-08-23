import getSeasonalData from '@/modules/fetchData/getSeasonalData';
import getFeaturedData from '@/modules/fetchData/getFeaturedData';
import getCollectionData from '@/modules/fetchData/getCollectionData';
import { H1, RichTextRender } from '@/modules/components/utils';

export default async function Collections(): Promise<JSX.Element> {
    const SeasonalData = getSeasonalData();
    const FeaturedData = getFeaturedData();
    const Collection  = getCollectionData();

    const seasonal = (await SeasonalData).productLists;
    const featured = (await FeaturedData).featuredLists;
    const collection = (await Collection).collection;

    return (
        <div className="bg-cream">
            <div className="text-center py-navbar px-mobileX md:px-tabletX lg:px-desktopX 3xl:px-plusDesktopX">
                <H1 className="text-ganache">{collection.title}</H1>
                <RichTextRender content={collection.description.raw} />
            </div>
        </div>
    );

}