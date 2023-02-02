import styles from "@/styles/topbar.module.css";
import { Menu } from "./Menu";
import { Logo } from "./Logo";

export const Topbar = () => {
    return (
        <nav className={styles.topbar}>
            <Logo />
            <Menu />
        </nav>
    );
};
