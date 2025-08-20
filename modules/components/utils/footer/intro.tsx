import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiInstagram, FiMail } from "react-icons/fi";

// local component
import {
    H4,
    Paragraph,
    RichTextRender,
} from "@/modules/components/utils/index";

export default function FooterIntro({
    content,
}: {
    content: { raw: any };
}): JSX.Element {
    return (
        <div className='flex flex-col gap-y-2.5 md:gap-y-4'>
            <Link href='/'>
                <Image
                    src='/a-couple-of-sweets.png'
                    alt='A Couple Of Sweets'
                    className='h-14 md:h-20 w-auto object-contain'
                    width={2641}
                    height={781}
                />
            </Link>
            <div>
                <RichTextRender
                    content={content.raw}
                    className='text-ganache'
                />
            </div>
            <div className='flex flex-col gap-y-2.5 md:gap-y-4'>
                <div className='flex flex-row items-center gap-x-3 text-ganache'>
                    <FiMapPin className='h-8 w-auto' />
                    <div className='flex flex-col text-ganache'>
                        <H4>Location</H4>
                        <Paragraph strong>Bolton, ON</Paragraph>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-x-3 text-ganache'>
                    <FiInstagram className='h-8 w-auto' />
                    <div className='flex flex-col text-ganache'>
                        <H4>Instagram</H4>
                        <Link
                            href='https://www.instagram.com/a_couple_ofsweets?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                            target='_blank'>
                            <Paragraph strong className="hover:text-olive duration-300 transition-all ease-in-out">@a_couple_ofsweets</Paragraph>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-x-3 text-ganache'>
                    <FiMail className='h-8 w-auto' />
                    <div className='flex flex-col text-ganache'>
                        <H4>Email</H4>
                        <Paragraph strong className='footerEmail'>
                            acoup<span className='hidden'>email.</span>leof
                            <span className='hidden'>hello.</span>sweets.
                            <span className='hidden'>bye.</span>as@g
                            <span className='hidden'>hi</span>mail.
                            <span className='hidden'>example.</span>com
                        </Paragraph>
                    </div>
                </div>
            </div>
        </div>
    );
}
