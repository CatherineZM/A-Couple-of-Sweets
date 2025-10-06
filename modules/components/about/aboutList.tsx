"use client";

// type

// external component
import { useCallback, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

// internal component
import { Paragraph, H3 } from "@/modules/components/utils";
import MarketsDisplay from "./market";
import Achievement from "./achievement";
import AboutDisplay from "./aboutUs";

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
    achievements: {
        title: string | null | undefined;
        achievementItem: Array<{
            date: any;
            name: string;
            image: Array<any>;
            description: {
                raw: any;
            };
        }>;
    };
    about: {
        title: string | null | undefined;
        aboutList: Array<{
            title: string;
            image: Array<any>;
            description: {
                raw: any;
            };
        }>;
    };
}

export default function AboutList({ markets, achievements, about }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const fadeInVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.7 } },
    };

    const tabs = [
        { id: "markets", label: "Markets" },
        { id: "achievements", label: "Achievements" },
        { id: "about-us", label: "About Us" },
    ];

    // primary tab ("utm") stays as-is below
    const currentParam = searchParams.get("utm") ?? tabs[0].id;
    const active = tabs.some((t) => t.id === currentParam)
        ? currentParam
        : tabs[0].id;

    const setTab = useCallback(
        (id: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("utm", id);
            startTransition(() => {
                router.replace(`${pathname}?${params.toString()}`, {
                    scroll: false,
                });
            });
        },
        [router, pathname, searchParams]
    );

    let content: React.ReactNode = null;
    if (active === "markets") {
        console.log('in market')
        content = <MarketsDisplay markets={markets} />
    } else if (active === "achievements") {
        content = <Achievement achievements={achievements} />
    } else {
        content = <AboutDisplay about={about} />
    }

    return (
        <div className='max-w-screen-2xl pt-10 w-full flex flex-col items-center'>
            <div
                role='tablist'
                aria-label='Collections'
                className='flex flex-row gap-1 md:gap-2 border-b w-full justify-between md:justify-center'>
                {tabs.map((t) => {
                    const isActive = active === t.id;
                    return (
                        <button
                            key={t.id}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`panel-${t.id}`}
                            id={`tab-${t.id}`}
                            onClick={() => setTab(t.id)}
                            className={[
                                "px-0 md:px-4 py-2 -mb-px border-b-4 transition-colors",
                                isActive
                                    ? "border-olive text-olive"
                                    : "border-transparent text-ganache hover:text-olive",
                            ].join(" ")}>
                            <H3>
                                {t.label}
                            </H3>
                        </button>
                    );
                })}
            </div>

            {/* Panel */}
            <motion.div
                key={`${active}-first`}
                id={`panel-${active}`}
                role='tabpanel'
                aria-labelledby={`tab-${active}`}
                initial='hidden'
                animate='visible'
                variants={fadeInVariant}
                className='pt-6 w-full flex flex-col items-center'
            >
                {content}
                <div className='mt-8 text-ganache'>
                    {isPending && (
                        <Paragraph strong className='ml-2 animate-pulse'>
                            Fetching the content...
                        </Paragraph>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
