import { format } from "date-fns";

import { H2 } from "@/modules/components/utils";

interface Props {
    marketItem: {
        marketDate: any;
        location: string;
        streetAddress?: string | null;
        time?: string | null;
        description?: {
            raw: any;
        } | null;
        photos?: {
            image: any;
            captionAltText?: string | null;
        } | null;
    };
}

export default function MarketItem({ marketItem }: Props) {
    const date = new Date(marketItem.marketDate);

    const day = format(date, "EEE"); // e.g., Sat
    const month = format(date, "MMM"); // e.g., Oct
    const dayNum = format(date, "dd"); // e.g., 18

    return (
        <div className='grid grid-cols-7 md:grid-cols-10 text-olive rounded-xl py-2 md:py-4 gap-x-1 md:gap-x-4 w-full'>
            {/* Left date section */}
            <div className='col-span-2 flex flex-row items-center justify-center gap-x-2 border-r-2 border-olive'>
                <div className="flex flex-col text-right gap-y-1 justify-center">
                    <H2 className='!text-xl md:!text-[32px]'>{day}</H2>
                    <H2 className='!text-xl md:!text-[32px]'>{month}</H2>
                </div>
                <p className='font-dmsans text-4xl md:text-6xl font-bold text-olive'>
                    {dayNum}
                </p>
            </div>

            {/* Right info section */}
            <div className='col-span-5 flex flex-col text-olive'>
                <h3 className='text-lg md:text-xl font-semibold'>
                    {marketItem.location}
                    {marketItem.description?.raw ? (
                        <span className='font-normal'>
                            {" "}
                            ({String(marketItem.description.raw)})
                        </span>
                    ) : null}
                </h3>

                {marketItem.streetAddress && (
                    <p className='text-sm md:text-base font-medium text-olive'>
                        {marketItem.streetAddress}
                    </p>
                )}

                {marketItem.time && (
                    <p className='text-sm md:text-base mt-1 text-olive'>
                        {marketItem.time} EST
                    </p>
                )}
            </div>
        </div>
    );
}
