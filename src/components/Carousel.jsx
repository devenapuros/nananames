import styles from "@/styles/carousel.module.css";
import { useEffect, useRef } from "react";

export const Carousel = ({ currentSelected, children }) => {
    const carouselRef = useRef();
    useEffect(() => {
        carouselRef.current.style.transform = `translateX( calc(${currentSelected} * -768px))`;
    }, [currentSelected]);

    return (
        <div className={styles.container}>
            <div className={styles.viewport} ref={carouselRef}>
                {children}
            </div>
        </div>
    );
};
