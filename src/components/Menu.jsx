import styles from "@/styles/menu.module.css";
import { NextLink } from "./NextLink";
import { Github } from "@/icons/Github";
import { ExternalLink } from "./ExternalLink";

export const Menu = () => {
    return (
        <ul className={styles.menu}>
            <li>
                <NextLink href="/generate">Generate</NextLink>
            </li>
            <li>
                <NextLink href="/about">About</NextLink>
            </li>
            <li>
                <ExternalLink>
                    Github
                    <Github size={16} />
                </ExternalLink>
            </li>
        </ul>
    );
};
