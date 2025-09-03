import React from "react";

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

    if (!isOpen) return null;

    return (
        <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40'
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

                <div className='z-50 max-h-[95vh] md:max-h-[75vh] w-full'>
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
}
