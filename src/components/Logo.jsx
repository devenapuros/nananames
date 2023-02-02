import styles from "@/styles/logo.module.css";

export const Logo = () => {
    return (
        <div className={styles.container}>
            <span className={styles.box}></span>
            <h1 className={styles.brand}>
                <span>NaNa</span>Names
            </h1>
        </div>
    );
};
