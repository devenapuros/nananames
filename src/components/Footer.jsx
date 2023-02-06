import styles from "@/styles/footer.module.css";
import { Logo } from "./Logo";
import { NextLink } from "./NextLink";
import { Github } from "@/icons/Github";
import { ExternalLink } from "./ExternalLink";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footerSection}>
                <Logo />
            </section>
            <section className={styles.footerSection}>
                <p>
                    Developed by{" "}
                    <ExternalLink href="https://github.com/devenapuros">
                        Devenapuros 🚀
                    </ExternalLink>
                </p>
            </section>
            <section className={styles.footerSection}>
                <ul className={styles.footerLinks}>
                    <NextLink>Home</NextLink>
                    <NextLink>About</NextLink>

                    <ExternalLink href="https://github.com/devenapuros/hack4tools">
                        Github
                        <Github size={16} />
                    </ExternalLink>
                </ul>
            </section>
        </footer>
    );
};
