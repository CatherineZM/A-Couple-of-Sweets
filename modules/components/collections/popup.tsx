import React, { useEffect, useRef } from "react";

import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { H4 } from "../utils";

interface popupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

export default function PopupModal(props: popupProps): JSX.Element | null {
    const { isOpen, onClose, children, title } = props;
    // Robust scroll lock: prefer Lenis if available, otherwise fallback to CSS lock
    useEffect(() => {
        const w = window as any;
        const lenis = w?.lenis || w?.__lenis; // common globals for Lenis instance

        if (lenis && typeof lenis.stop === "function" && typeof lenis.start === "function") {
            if (isOpen) {
                lenis.stop();
            } else {
                lenis.start();
            }
            return () => {
                // ensure scroll is restored on unmount
                try { lenis.start?.(); } catch {}
            };
        }

        // Fallback: CSS body lock if Lenis instance isn't found
        if (isOpen) {
            document.body.style.overflow = "hidden";
            (document.documentElement as HTMLElement).style.overscrollBehavior = "contain";
        } else {
            document.body.style.overflow = "";
            (document.documentElement as HTMLElement).style.overscrollBehavior = "";
        }
        return () => {
            document.body.style.overflow = "";
            (document.documentElement as HTMLElement).style.overscrollBehavior = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <motion.div
            data-lenis-prevent
            className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40 w-full overscroll-contain'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <motion.div
                className='bg-cream rounded-lg shadow-lg p-3 md:p-6 w-[90%] md:w-[60%] relative '
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}>
                <div className='flex flex-row items-center justify-between'>
                    <H4 className='text-ganache'>{title}</H4>
                    <button
                        onClick={onClose}
                        className='text-ganache hover:text-olive z-50'
                        id='close_popup'>
                        <IoMdClose className='w-6 md:w-10 h-auto' />
                    </button>
                </div>

                <div className='z-50 max-h-[90vh] md:max-h-[75vh] w-full'>
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
}
