"use client";

// external library
import React, { useState, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
        name: "About Us",
        newWindow: false,
    },
    {
        id: "nav-order",
        href: "https://www.instagram.com/a_couple_ofsweets?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        name: "Order Now",
        newWindow: true,
    },
];

export default function Menu(): JSX.Element {
    const controls = useAnimation();
    const currentPath = usePathname();
    const [scrolled, setScrolled] = useState(false);

    const useMediaQuery = (width: number): boolean => {
        const [targetReached, setTargetReached] = useState(false);

        const updateTarget = useCallback((e: MediaQueryListEvent) => {
            if (e.matches) {
                setTargetReached(true);
            } else {
                setTargetReached(false);
            }
        }, []);

        useEffect(() => {
            const media = window.matchMedia(`(max-width: ${width}px)`);
            media.addEventListener("change", updateTarget);

            if (media.matches) {
                setTargetReached(true);
            }

            return () => media.removeEventListener("change", updateTarget);
        }, [width, updateTarget]);

        return targetReached;
    };

    useEffect(() => {
        const handleScroll = (): void => {
            const scrolledPos = window.scrollY;
            const moved = scrolledPos > 0;
            setScrolled(moved);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        return (): void => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isBreakpoint = useMediaQuery(1060);

    const menuVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    };

    const leftItems = menu.slice(0, 2);
    const rightItems = menu.slice(2, 4);

    return (
        <nav className="py-3 px-mobileX md:px-tabletX lg:px-desktopX 3xl:px-plusDesktopX w-full fixed z-40 h-[80px] bg-buttercream shadow-md duration-300 transition-all ease-in-out flex items-center justify-center">
            <div className="max-w-screen-2xl w-full flex flex-row md:grid md:grid-cols-5 md:gap-x-10 justify-between items-center md:items-end h-full">
                {/* Left Menu */}
                <div className="hidden col-span-2 md:flex flex-row justify-between">
                    {leftItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            target={item.newWindow ? "_blank" : "_self"}
                            rel={
                                item.newWindow
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className={`capitalize font-dmsans font-semibold text-xl lg:text-2xl duration-300 transition-all ease-in-out border-b-2 ${
                                currentPath === item.href
                                    ? "text-olive border-olive"
                                    : "text-ganache border-transparent hover:text-ganache/80 hover:border-ganache/80 "
                            }`}>
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Logo Centered */}
                <div className="flex justify-start md:justify-center basis-1/2 sm:basis-1/3 md:col-span-1">
                    <Link href="/">
                        <Image
                            src="/a-couple-of-sweets.png"
                            alt="A Couple Of Sweets"
                            className="h-14 w-auto object-contain"
                            width={2641}
                            height={781}
                        />
                    </Link>
                </div>

                {/* Right Menu */}
                <div className="hidden col-span-2 md:flex flex-row justify-between">
                    {rightItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            target={item.newWindow ? "_blank" : "_self"}
                            rel={
                                item.newWindow
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className={`capitalize font-dmsans font-semibold text-xl lg:text-2xl duration-300 transition-all ease-in-out border-b-2 ${
                                currentPath === item.href
                                    ? "text-olive border-olive"
                                    : "text-ganache border-transparent hover:text-ganache/80 hover:border-ganache/80 "
                            }`}>
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu */}
                <div className="flex md:hidden">
                    <Link
                        key={menu[3].id}
                        href={menu[3].href}
                        target={menu[3].newWindow ? "_blank" : "_self"}
                        rel={
                            menu[3].newWindow
                                ? "noopener noreferrer"
                                : undefined
                        }
                        className={`capitalize font-dmsans font-semibold text-xl lg:text-[32px] duration-300 transition-all ease-in-out ${
                            currentPath === menu[3].href
                                ? "text-olive underline"
                                : "text-ganache hover:text-ganache/80 no-underline "
                        }`}>
                        {menu[3].name}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
