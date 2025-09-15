"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
    menu: Array<{
        id: string;
        href: string;
        name: string;
        newWindow: boolean;
    }>;
}

export default function MobileNav(props: Props): JSX.Element {
    const { menu } = props;

    const currentPath = usePathname();
    return (
        <div
            className={`fixed md:hidden left-0 bottom-0 w-full z-50 bg-buttercream border-t border-bday-neutral transition-transform duration-500 px-mobileX sm:px-tabletX flex flex-col py-3 gap-y-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]`}>
            <div className="flex flex-row divide-x-2 divide-olive w-full justify-evenly">
                {menu.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        target={item.newWindow ? "_blank" : "_self"}
                        rel={item.newWindow ? "noopener noreferrer" : undefined}
                        className={`px-2 capitalize font-dmsans font-semibold text-xl lg:text-[32px] duration-300 transition-all ease-in-out ${
                            currentPath === item.href
                                ? "text-olive underline"
                                : "text-ganache hover:text-ganache/80 no-underline "
                        }`}>
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="block md:hidden w-full border-t border-ganache text-sm text-center">
                © 2025 A Couple Of Sweets. All rights reserved.
            </div>
        </div>
    );
}
