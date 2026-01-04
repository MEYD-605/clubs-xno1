import { useEffect, useRef } from 'react';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.css';

interface ParallaxBackgroundProps {
    imageSrc: string;
    speed?: number;
    opacity?: number;
    className?: string;
}

export default function ParallaxBackground({
    imageSrc,
    speed = 0.4,
    opacity = 0.6,
    className = ''
}: ParallaxBackgroundProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            jarallax(ref.current, {
                speed: speed,
                imgSrc: imageSrc,
            });
        }

        return () => {
            if (ref.current) {
                jarallax(ref.current, 'destroy');
            }
        };
    }, [imageSrc, speed]);

    return (
        <div
            ref={ref}
            className={`jarallax absolute inset-0 z-0 ${className}`}
            style={{ opacity }}
        >
            <div className="jarallax-img" />
        </div>
    );
}
