import Link from "next/link";
import styles from "@/styles/next-link.module.css";

export const NextLink = ({ href = "#", className, children }) => {
    return (
        <Link href={href} className={`${styles.link} ${className}`}>
            {children}
        </Link>
    );
};
