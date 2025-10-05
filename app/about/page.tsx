// data fetching
import getMarketData from "@/modules/fetchData/getMarketData";
import getAchieveData from "@/modules/fetchData/getAchieveData";
import getAboutData from "@/modules/fetchData/getAboutData";

// local component
import AboutList from "@/modules/components/about/AboutList";

// external component
import { Suspense } from "react";

export default async function Collections(): Promise<JSX.Element> {
    const markets = getMarketData();
    const achievements = getAchieveData();
    const about = getAboutData();

    return (
        <div className="bg-cream">
            <div className="pt-navbar pb-6 md:pb-navbar px-mobileX md:px-tabletX lg:px-desktopX 3xl:px-plusDesktopX flex flex-col items-center w-full">
                <Suspense
                    fallback={
                        <div className="mt-8 text-ganache">
                            Fetching contents...
                        </div>
                    }>
                    <AboutList
                        markets={markets}
                        achievements={achievements}
                        about={about}
                    />
                </Suspense>
            </div>
        </div>
    );
}
