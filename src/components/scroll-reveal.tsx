import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
    width?: "auto" | "100%";
}

export default function ScrollReveal({
    children,
    delay = 0.2,
    direction = 'up',
    className = "",
    width = "auto"
}: ScrollRevealProps) {

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        },
    };

    return (
        <div style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                    duration: 0.8,
                    delay: delay,
                    ease: [0.21, 0.47, 0.32, 0.98]
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
