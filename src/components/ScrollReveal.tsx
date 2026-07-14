"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    direction?: "up" | "left" | "right";
    delay?: number;
    className?: string;
}) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px"});
    const variants = {
        up: { initial: { opacity: 0, t: 60 }, animate: { opacity: 1, y: 0 } },
        left: { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 } },
        right: { initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 } },
    };

    return (
        <motion.div
            ref={ref}
            initial={variants[direction].initial}
            animate={isInView ? variants[direction].animate : variants[direction].initial}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
