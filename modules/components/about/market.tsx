// internal component
import { H2 } from "@/modules/components/utils";
// react
import React, { useState } from "react";

// external component
import { RichText } from "@graphcms/rich-text-react-renderer";
import { motion, AnimatePresence } from "framer-motion";
import MarketItem from "./components/marketItem";

interface Props {
    markets: {
        title?: string | null | undefined;
        marketItem: Array<{
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
        }>;
    };
}

export default function MarketsDisplay({ markets }: Props) {
    // assuming marketItem is your array
    const today = new Date();
    console.log('market', markets)
    // Separate items by date
    const upcomingMarkets = markets.marketItem.filter((item) => {
        const marketDate = new Date(item.marketDate);
        return marketDate >= today;
    });

    const pastMarkets = markets.marketItem.filter((item) => {
        const marketDate = new Date(item.marketDate);
        return marketDate < today;
    });
    const [expandedUpcoming, setExpandedUpcoming] = useState(true);
    const [expandedPast, setExpandedPast] = useState(false);

    const list = [
        {
            title: "Upcoming Markets",
            id: 1,
            content: upcomingMarkets,
            expanded: expandedUpcoming,
            setExpanded: setExpandedUpcoming
        },
        {
            title: "Past Markets",
            id: 2,
            content: pastMarkets,
            expanded: expandedPast,
            setExpanded: setExpandedPast
        },
    ];

    const parentSection = (
        title: string,
        id: number,
        content: any,
        expanded: boolean,
        setExpanded: any
    ): JSX.Element => {
        return (
            <motion.div
                key={id}
                initial={false}
                onClick={() => {
                    setExpanded(!expanded);
                }}
                className='w-full flex flex-col'>
                <button
                    className='flex flex-row w-full items-center justify-between text-left'
                    id={`market-${id}`}>
                    <h4 className='font-marcellus font-semibold text-lg md:text-2xl'>{title}</h4>
                    <div className='w-fit flex justify-end items-start ml-2'>
                        {expanded ? (
                            <svg
                                width='22'
                                height='2'
                                viewBox='0 0 22 2'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='transition-transform origin-center -rotate-180 duration-300 ease-out'>
                                <line
                                    x1='1'
                                    y1='1'
                                    x2='21'
                                    y2='1'
                                    stroke='#3D2217'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                />
                            </svg>
                        ) : (
                            <svg
                                width='22'
                                height='22'
                                viewBox='0 0 22 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='transition-transform origin-center rotate-180 duration-300 ease-out'>
                                <line
                                    x1='1'
                                    y1='10'
                                    x2='21'
                                    y2='10'
                                    stroke='#3D2217'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                />
                                <line
                                    x1='11'
                                    y1='1'
                                    x2='11'
                                    y2='21'
                                    stroke='#3D2217'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                />
                            </svg>
                        )}
                    </div>
                </button>
                <AnimatePresence initial={false}>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: 1,
                                height: "auto",
                                transition: {
                                    duration: 0.3,
                                },
                            }}
                            exit={{
                                opacity: 0,
                                height: 0,
                                transition: {
                                    duration: 0.3,
                                },
                            }}>
                            {detailSection(content, expanded)}
                        </motion.div>
                    )}
                </AnimatePresence>
                <hr className="border-ganache/70 my-3 w-full" />
            </motion.div>
        );
    };

    const detailSection = (
        item: any,
        expanded: boolean,
    ): JSX.Element => {
        if (expanded) {
            return (
                <div className="pt-4">
                    {item.map((i: any, index: number) => (
                        <div key={`market-${index}`}>
                            <MarketItem marketItem={i} />
                        </div>
                    ))}
                </div>
            );
        }
        return <></>;
    };

    return (
        <div className='max-w-screen-lg w-full flex flex-col items-center'>
            <H2 className='text-ganache'>{markets.title}</H2>
            <hr className="border-ganache/70 my-3 w-full" />
            {list.map((item) => 
                parentSection(item.title, item.id, item.content, item.expanded, item.setExpanded)
            )}
        </div> 
    );
}
