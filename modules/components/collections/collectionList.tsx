// components/SeasonalTabs.tsx
"use client";

// type
import { Product } from "@/modules/gql/graphql";

// external component
import { useMemo, useCallback, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

// internal component
import { H3, Paragraph } from "@/modules/components/utils";
import CollectionDisplay from "@/modules/components/collections/collectionDisplay";
import CollectionAccordion from "@/modules/components/collections/collectionAccordion";

interface Props {
    seasonal: Array<{
        collectionName: string;
        pastCollection?: boolean;
        homepageDisplay?: boolean;
        collectionDescription: { raw: any };
        productList: Array<Product>;
    }>;
    featured: {
        collectionName: string;
        collectionDescription?: { raw: any };
        productList: Array<Product>;
    };
}

export default function SeasonalTabs({ seasonal, featured }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const { currentCollections, pastCollections } = useMemo(() => {
        const current = seasonal.filter((c) => !c.pastCollection);
        const past = seasonal.filter((c) => !!c.pastCollection);
        return { currentCollections: current, pastCollections: past };
    }, [seasonal]);

    const fadeInVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.7 } },
    };

    const tabs = [
        { id: "current", label: "Seasonal" },
        { id: "all-time", label: "All-time Fav" },
        { id: "past", label: "Past Seasonal" },
    ];

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

    const renderCollections = (cols: Props["seasonal"], emptyText: string) => {
        if (!cols.length) return <p className='text-ganache'>{emptyText}</p>;
        if (cols.length > 1) {
            return (
                <div>
                    <CollectionAccordion
                        items={cols.map((col) => ({
                            id: col.collectionName
                                .toLowerCase()
                                .replace(/\s+/g, "-"),
                            title: col.collectionName,
                            content: (
                                <CollectionDisplay
                                    key={col.collectionName}
                                    title={col.collectionName}
                                    description={col.collectionDescription}
                                    products={col.productList}
                                />
                            ),
                        }))}
                    />
                </div>
            );
        } else {
            return (
                <CollectionDisplay
                    title={cols[0].collectionName}
                    description={cols[0].collectionDescription}
                    products={cols[0].productList}
                />
            );
        }
    };

    let content: React.ReactNode = null;
    if (active === "current") {
        content = renderCollections(
            currentCollections,
            "Stay Tuned. New current seasonal collection is coming soon."
        );
    } else if (active === "all-time") {
        content = featured ? (
            <CollectionDisplay
                title={featured.collectionName}
                description={featured.collectionDescription}
                products={featured.productList}
            />
        ) : (
            <p className='text-ganache'>
                Stay Tuned. New featured collection is coming soon.
            </p>
        );
    } else {
        content = renderCollections(
            pastCollections,
            "No past seasonal collections yet."
        );
    }

    return (
        <div className='max-w-screen-2xl py-10 w-full flex flex-col items-center'>
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
                            <h3
                                className="font-dmsans font-semibold text-lg md:text-[32px]">
                                {t.label}
                            </h3>
                        </button>
                    );
                })}
            </div>

            {/* Panel */}
            <motion.div
                key={active}
                id={`panel-${active}`}
                role='tabpanel'
                aria-labelledby={`tab-${active}`}
                initial='hidden'
                animate='visible'
                variants={fadeInVariant}
                className='pt-6'>
                {content}
                <div className='mt-8 text-ganache'>
                    {isPending && (
                        <Paragraph strong className='ml-2 animate-pulse'>
                            Updating Collection…
                        </Paragraph>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
