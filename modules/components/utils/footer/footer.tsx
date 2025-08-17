// data fetch
import getFooterData from "@/modules/fetchData/getFooterData";

// internal component
import FooterIntro from "./intro";

export default async function Footer(): Promise<JSX.Element> {
    const FooterData = getFooterData();

    const footer = (await FooterData).footerData;

    return (
        <div className="flex flex-col md:flex-row bg-cream">
            <div className="basis-full md:basis-1/2 bg-pistachio py-6">
                <FooterIntro content={footer.bio} />
            </div>
            <div className="basis-full md:basis-1/2 py-6"></div>
        </div>
    );
}
