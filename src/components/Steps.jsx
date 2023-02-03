import styles from "@/styles/steps.module.css";

export const Steps = ({ children }) => {
    return (
        <div className={styles.steps}>
            {children}
            <div className={styles.line}></div>
        </div>
    );
};
