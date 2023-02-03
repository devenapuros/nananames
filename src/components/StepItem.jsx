import styles from "@/styles/step-item.module.css";

export const StepItem = ({
    id = NaN,
    icon,
    currentSelected = NaN,
    children,
}) => {
    return (
        <div
            className={`${styles.container} ${
                currentSelected === id ? styles.selected : ""
            }`}
        >
            <div className={styles.circle}>{icon}</div>
            {children}
        </div>
    );
};
