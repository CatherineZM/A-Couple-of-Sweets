// external library
import type { Metadata } from "next";

// local components
import Head from "./head";
import SmoothScrolling from "@/modules/components/utils/smoothScrolling";

// style sheets
import "./globals.css";

// font
import { Marcellus, DM_Sans } from "next/font/google";
import Menu from "@/modules/components/utils/navigation/menu";
import Footer from "@/modules/components/utils/footer/footer";
import MobileNav from "@/modules/components/utils/navigation/mobile";

const marcellus = Marcellus({
    weight: ["400"],
    variable: "--font-marcellus",
    subsets: ["latin"],
});

const dmSans = DM_Sans({
    weight: ["600", "500", "400"],
    variable: "--font-dm_sans",
    subsets: ["latin"],
});

const menu = [
    {
        id: "nav-home",
        href: "/",
        name: "Home",
        newWindow: false,
    },
    {
        id: "nav-collections",
        href: "/collections",
        name: "Collections",
        newWindow: false,
    },
    {
        id: "nav-about",
        href: "/about",
        name: "About",
        newWindow: false,
    },
    {
        id: "nav-order",
        href: "https://www.instagram.com/a_couple_ofsweets?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        name: "Order",
        newWindow: true,
    },
];

export const metadata: Metadata = {
    title: "A Couple of Sweets",
    description:
        "A Couple of Sweets is a Toronto-based bakery where every dessert is made with integrity, free from artificial sweeteners, colors, and flavors. We believe that great desserts don’t need unnecessary additives—just quality ingredients, skill, and passion.",
    keywords: [
        "Toronto bakery",
        "natural sweets Toronto",
        "handmade desserts Toronto",
        "home-baked sweets",
        "no artificial ingredients bakery",
        "professional pastry chefs Toronto",
    ],
    openGraph: {
        title: "A Couple of Sweets",
        description:
            "A Couple of Sweets is a Toronto-based bakery where every dessert is made with integrity, free from artificial sweeteners, colors, and flavors. We believe that great desserts don’t need unnecessary additives—just quality ingredients, skill, and passion.",
        url: "http://acoupleofsweets.ca",
        siteName: "A Couple of Sweets",
        images: [
            {
                url: "http://acoupleofsweets.ca/op-cover.png",
                width: 1200,
                height: 630,
                alt: "All-natural sweets by A Couple of Sweets",
            },
        ],
        locale: "en_CA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "A Couple of Sweets",
        description:
            "Toronto bakery specializing in handmade, home-baked sweets using only natural ingredients. Crafted by professional chefs.",
        images: ["http://acoupleofsweets.ca/op-cover.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head />
            <body
                suppressHydrationWarning
                className={`${marcellus.variable} ${dmSans.variable}`}>
                <Menu menu={menu} />
                <MobileNav menu={menu} />
                <SmoothScrolling>{children}</SmoothScrolling>
                <Footer />
            </body>
        </html>
    );
}
