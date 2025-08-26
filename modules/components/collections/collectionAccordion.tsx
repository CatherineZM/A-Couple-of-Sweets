"use client";

import * as React from "react";

interface AccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean; // default false (single open)
    defaultOpenId?: string; // optional: force a default open item
}

export default function CollectionAccordion({
    items,
    allowMultiple = false,
    defaultOpenId,
}: AccordionProps) {
    // if no defaultOpenId provided, use the first item (if any)
    const initialOpen = defaultOpenId ?? items[0]?.id ?? "";
    const [openIds, setOpenIds] = React.useState<string[]>(
        initialOpen ? [initialOpen] : []
    );

    const toggle = (id: string) => {
        if (allowMultiple) {
            setOpenIds((prev) =>
                prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
            );
        } else {
            setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
        }
    };

    return (
        <div className='divide-y rounded-xl border'>
            {items.map((it) => {
                const isOpen = openIds.includes(it.id);
                return (
                    <div key={it.id}>
                        <button
                            onClick={() => toggle(it.id)}
                            className='flex w-full items-center justify-between px-4 py-3 text-left font-medium'
                            aria-expanded={isOpen}>
                            <span>{it.title}</span>
                            <span
                                className={`transition-transform duration-200 ${
                                    isOpen ? "rotate-180" : ""
                                }`}>
                                ▾
                            </span>
                        </button>
                        <div
                            className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}>
                            <div className='overflow-hidden px-4 pb-4'>
                                {it.content}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
