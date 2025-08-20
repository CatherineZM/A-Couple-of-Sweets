// data fetch
import getFooterData from "@/modules/fetchData/getFooterData";

// internal component
import FooterIntro from "./intro";
import FooterContact from "./contact";

export default async function Footer(): Promise<JSX.Element> {
    const FooterData = getFooterData();

    const footer = (await FooterData).footerData;

    return (
        <section className='relative isolate'>
            <div className='hidden md:block absolute inset-y-0 left-0 w-1/2 bg-pistachio -z-10' />
            <div className='hidden md:block absolute inset-y-0 right-0 w-1/2 bg-[#F0EAD6] -z-10' />
            
            <div className='max-w-screen-2xl mx-auto flex flex-col md:flex-row px-mobileX md:px-tabletX lg:px-desktopX 3xl:px-0 py-5 md:py-14 gap-x-10'>
                <div className='basis-full md:basis-1/2'>
                    <FooterIntro content={footer.bio} />
                </div>
                <div className='basis-full md:basis-1/2'>
                    <FooterContact />
                </div>
            </div>
        </section>
    );
}
