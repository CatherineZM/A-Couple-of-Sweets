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
    title: "A Couple Of Sweets",
    description: "Your number one choice of sweets in Toronto",
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
