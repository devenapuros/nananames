import styles from "@/styles/menu.module.css";
import { NextLink } from "./NextLink";
import { Github } from "@/icons/Github";

export const Menu = () => {
    return (
        <ul className={styles.menu}>
            <li>
                <NextLink>About</NextLink>
            </li>
            <li>
                <NextLink>
                    Github
                    <Github size={21} />
                </NextLink>
            </li>
        </ul>
    );
};
