import styles from "@/styles/next-link.module.css";

export const ExternalLink = ({ children, className, href = "#" }) => {
    return (
        <a
            className={`${styles.link} ${className}`}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
};
