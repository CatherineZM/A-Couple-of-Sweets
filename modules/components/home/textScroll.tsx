"use client";

// external modules

// React specific
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

// motion
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
    text: string[];
    baseVelocity: number;
    images?: string[];
}

export default function HorizontalScrollCp({
    text,
    baseVelocity = 5,
    images,
}: ParallaxProps): JSX.Element {
    const [numberOfRepetitions, setNumberOfRepetitions] = useState(0);

    const baseX = useMotionValue(0);

    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });
    const x = useTransform(baseX, (v) => `${wrap(-200, 0, v)}%`);
    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        const bv =
            window.innerWidth > 768
                ? baseVelocity < 0
                    ? -0.6
                    : 0.6
                : baseVelocity;
        let moveBy = directionFactor.current * bv * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    useEffect(() => {
        const line = text.join("");
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const measuredText = ctx?.measureText(line);
        if (measuredText !== undefined) {
            const nor = Math.floor(window.innerWidth / measuredText.width);
            setNumberOfRepetitions(nor);
        }

        // eslint-disable-next-line
    }, []);

    return (
        <div className='flex no-wrap overflow-hidden whitespace-nowrap'>
            <motion.div
                className='flex gap-x-4 whitespace-nowrap min-w-[200%]'
                style={{ x }}>
                {Array.from({ length: numberOfRepetitions * 3 }).map(
                    (_, index) => (
                        <div
                            key={index}
                            className='flex flex-row items-center gap-x-3.5 text-ganache'>
                            {text.map((item, i) => (
                                <React.Fragment key={i}>
                                    <span className='font-dmsans font-semibold text-lg md:text-2xl text-ganache'>
                                        {item}
                                    </span>
                                    {images?.[i] && (
                                        <span className='relative w-12 h-12 align-middle inline-flex items-center justify-center'>
                                            <Image
                                                src={images[i]}
                                                alt={`icon-${i}`}
                                                width={56}
                                                height={56}
                                                className='object-contain'
                                            />
                                        </span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    )
                )}
            </motion.div>
        </div>
    );
}
