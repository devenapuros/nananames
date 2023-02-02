import styles from "@/styles/footer.module.css";
import { Logo } from "./Logo";
import { NextLink } from "./NextLink";
import { Github } from "@/icons/Github";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footerSection}>
                <Logo />
                {/* <p className={`text-muted ${styles.slogan}`}>
                    Generate funny and customizable name for your pet using
                    Artificial Intelligence
                </p> */}
            </section>
            <section className={styles.footerSection}>
                <ul className={styles.footerLinks}>
                    <NextLink>Home</NextLink>
                    <NextLink>About</NextLink>

                    <a href="https://github.com/devenapuros/hack4tools">
                        Github
                        <Github size={21} />
                    </a>
                </ul>
            </section>
        </footer>
    );
};
