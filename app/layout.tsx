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
                    <Menu />
                    <SmoothScrolling>{children}</SmoothScrolling>
                    <Footer />
                    <div className='flex justify-center w-full border-t border-ganache bg-cream py-2'>
                    © 2025 A Couple Of Sweets. All rights reserved.
                </div>
            </body>
        </html>
    );
}
