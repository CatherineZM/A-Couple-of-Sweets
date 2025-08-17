"use client";

import { motion } from "framer-motion";

interface FloatingImageProps {
    children: React.ReactNode;
    xRange?: number;
    yRange?: number;
    duration?: number;
    className?: string;
}

export default function FloatingImage({
    children,
    xRange = 20,
    yRange = 20,
    duration = 4,
    className = "",
}: FloatingImageProps): JSX.Element {
    return (
        <motion.div
            className={`${className} w-fit h-fit absolute`}
            animate={{
                x: [0, -xRange, 0],
                y: [0, -yRange, 0],
            }}
            transition={{
                duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
            }}>
            {children}
        </motion.div>
    );
}
