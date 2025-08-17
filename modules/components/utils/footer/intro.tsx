import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiInstagram, FiMail } from "react-icons/fi";

// local component
import { RichTextRender } from '@/modules/components/utils/index';

export default function FooterIntro({content}: {content: {raw: any}}): JSX.Element {
    return (
        <div className="flex flex-col px-mobileX md:pl-tabletX lg:pl-desktopX 3xl:pl-plusDesktopX gap-y-2.5 md:gap-y-4 py-5 md:py-10">
            <Link href="/">
                <Image
                    src="/a-couple-of-sweets.png"
                    alt="A Couple Of Sweets"
                    className="h-14 md:h-20 w-auto object-contain"
                    width={2641}
                    height={781}
                />
            </Link>
            <div>
                <RichTextRender
                    content={content.raw}
                    className="text-ganache"
                />
            </div>
        </div>
    );
}