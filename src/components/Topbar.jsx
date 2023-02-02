import styles from "@/styles/topbar.module.css";
import { Menu } from "./Menu";

export const Topbar = () => {
    return (
        <nav className={styles.topbar}>
            <h1>NaNaNames</h1>
            <Menu />
        </nav>
    );
};
