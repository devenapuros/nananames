import styles from "@/styles/logo.module.css";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link className={styles.container} href="/">
            <span className={styles.box}></span>
            <h1 className={styles.brand}>
                <span>NaNa</span>Names
            </h1>
        </Link>
    );
};
