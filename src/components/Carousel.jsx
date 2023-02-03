import styles from "@/styles/carousel.module.css";

export const Carousel = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.viewport}>{children}</div>
        </div>
    );
};
