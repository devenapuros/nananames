import styles from "@/styles/carousel-item.module.css";

export const CarouselItem = ({ children }) => {
    return <article className={styles.item}>{children}</article>;
};
