"use client";

// type
import { Product } from "@/modules/gql/graphql";

// external component
import { useMemo, useCallback, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

// internal component
import { Button, H4, Paragraph } from "@/modules/components/utils";
import CollectionDisplay from "@/modules/components/collections/components/collectionDisplay";

const toSlug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

interface Props {
    seasonal: Array<{
        collectionName: string;
        pastCollection?: boolean;
        homepageDisplay?: boolean;
        collectionDescription: { raw: any };
        productList: Array<Product>;
    }>;
    featured: Array<{
        collectionName: string;
        collectionDescription?: { raw: any };
        productList: Array<Product>;
    }>;
}

export default function SeasonalTabs({ seasonal, featured }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const { currentCollections, pastCollections } = useMemo(() => {
        // Prepare filtered arrays
        const current: typeof seasonal = [];
        const past: typeof seasonal = [];

        seasonal.forEach((collection) => {
            const { productList = [], pastCollection } = collection;

            // Filter product lists
            const currentProducts = productList.filter((p) => !p.pastProduct);
            const pastProducts = productList.filter((p) => p.pastProduct);

            // Include collection in "current" if it’s not a past collection and has any current products
            if (!pastCollection && currentProducts.length > 0) {
                current.push({
                    ...collection,
                    productList: currentProducts,
                });
            }

            // Include collection in "past" if:
            // - it's a past collection, OR
            // - it has any past products
            if (pastCollection || pastProducts.length > 0) {
                past.push({
                    ...collection,
                    productList: pastProducts,
                });
            }
        });

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

    // primary tab ("utm") stays as-is below

    const currentParam = searchParams.get("utm") ?? tabs[0].id;
    const active = tabs.some((t) => t.id === currentParam)
        ? currentParam
        : tabs[0].id;

    const setTab = useCallback(
        (id: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("utm", id);
            params.delete("col"); // reset secondary tab on primary change
            startTransition(() => {
                router.replace(`${pathname}?${params.toString()}`, {
                    scroll: false,
                });
            });
        },
        [router, pathname, searchParams]
    );

    const collectionsForActiveTab = useMemo(() => {
        if (active === "current") return currentCollections;
        if (active === "all-time") return featured;
        return pastCollections;
    }, [active, currentCollections, featured, pastCollections]);

    const subTabs = useMemo(
        () =>
            collectionsForActiveTab.map((c) => ({
                id: toSlug(c.collectionName),
                label: c.collectionName,
            })),
        [collectionsForActiveTab]
    );

    const currentColParam = searchParams.get("col");
    const activeSub = subTabs.some((t) => t.id === currentColParam)
        ? (currentColParam as string)
        : subTabs[0]?.id ?? undefined;

    const setSubTab = useCallback(
        (id: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set("col", id);
            startTransition(() => {
                router.replace(`${pathname}?${params.toString()}`, {
                    scroll: false,
                });
            });
        },
        [router, pathname, searchParams, active]
    );

    const renderCollections = (
        cols: Props["seasonal"] | Props["featured"],
        emptyText: string,
        selectedId?: string
    ) => {
        if (!cols.length) return <p className="text-ganache">{emptyText}</p>;

        // Find selected collection; default to first
        const targetId =
            selectedId &&
            cols.some((c) => toSlug(c.collectionName) === selectedId)
                ? selectedId
                : toSlug(cols[0].collectionName);

        const selected = cols.find(
            (c) => toSlug(c.collectionName) === targetId
        )!;

        return (
            <CollectionDisplay
                key={selected.collectionName}
                title={selected.collectionName}
                description={selected.collectionDescription}
                products={selected.productList}
            />
        );
    };

    let content: React.ReactNode = null;
    if (active === "current") {
        content = renderCollections(
            currentCollections,
            "Stay Tuned. New current seasonal collection is coming soon.",
            activeSub
        );
    } else if (active === "all-time") {
        content = renderCollections(
            featured,
            "Stay Tuned. New featured collection is coming soon.",
            activeSub
        );
    } else {
        content = renderCollections(
            pastCollections,
            "No past seasonal collections yet.",
            activeSub
        );
    }

    return (
        <div className="max-w-screen-2xl pt-10 w-full flex flex-col items-center">
            <div
                role="tablist"
                aria-label="Collections"
                className="flex flex-row gap-1 md:gap-2 border-b w-full justify-between md:justify-center">
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
                            <h3 className="font-dmsans font-semibold text-lg md:text-[32px]">
                                {t.label}
                            </h3>
                        </button>
                    );
                })}
            </div>

            {/* Secondary tablist: collection names under the active primary tab */}
            {subTabs.length > 1 && (
                <div
                    role="tablist"
                    aria-label={`${
                        tabs.find((t) => t.id === active)?.label
                    } collections`}
                    className="mt-4 flex flex-row gap-x-2 md:gap-x-6 w-full justify-center overflow-x-auto">
                    {subTabs.map((t) => {
                        const isActive = activeSub === t.id;
                        return (
                            <Button
                                key={t.id}
                                type="tab"
                                aria-selected={isActive}
                                aria-controls={`sub-panel-${t.id}`}
                                id={`sub-tab-${t.id}`}
                                action={() => setSubTab(t.id)}
                                isActive={isActive}
                                theme="dark"
                                className="py-2 px-2">
                                <H4>{t.label}</H4>
                            </Button>
                        );
                    })}
                </div>
            )}

            {/* Panel */}
            <motion.div
                key={`${active}-${activeSub ?? "first"}`}
                id={`panel-${active}-${activeSub ?? "first"}`}
                role="tabpanel"
                aria-labelledby={`tab-${active}${
                    activeSub ? ` sub-tab-${activeSub}` : ""
                }`}
                initial="hidden"
                animate="visible"
                variants={fadeInVariant}
                className="pt-6">
                {content}
                <div className="mt-8 text-ganache">
                    {isPending && (
                        <Paragraph strong className="ml-2 animate-pulse">
                            Updating Collection…
                        </Paragraph>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
