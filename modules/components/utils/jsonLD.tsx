"use client";
import Script from "next/script";

export default function JsonLd({ json }: { json?: object | string }) {
    if (!json) return null;
    const content = typeof json === "string" ? json : JSON.stringify(json);
    return (
        <Script
            id="jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
