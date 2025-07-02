// Next.js specific
import { Metadata } from 'next'

// data fetch
import getHomeData from "@/modules/fetchData/getHomeData";

export default async function Home(): Promise<JSX.Element> {
    const HomeData = getHomeData();
    
    const homeData = (await HomeData).homeData;
    
    return (
        <div className="pt-navbar font-dmsans bg-cream">{homeData.welcome}</div>
    );
}
