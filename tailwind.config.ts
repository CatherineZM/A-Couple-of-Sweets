import { DM_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xs: "480px", // mobile
            sm: "640px",
            md: "768px", // tablet
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px", // desktop
            "3xl": "1920px", // desktop +++
        },
        extend: {
            fontFamily: {
                marcellus: ["var(--font-marcellus)"],
                dmsans: ["var(--font-dm_sans)"],
            },
            colors: {
                cream: "#F9F7EF",
                buttercream: "#F0EAD6",
                whiskey: "#D1B08A",
                pistachio: "#BAB86C",
                olive: "#4F5626",
                ganache: "#3D2217",
            },
            spacing: {
                navbar: "40px", // add the navbar height after set
                mobileX: "16px",
                tabletX: "60px",
                desktopX: "120px",
                plusDesktopX: "240px",
            },
        },
    },
    plugins: [],
};
export default config;
