import styles from "@/styles/logo.module.css";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link className={styles.container} href="/">
            <Image
                src="/favicon.svg"
                height={40}
                width={40}
                style={{ borderRadius: "12px" }}
            />
            <h1 className={styles.brand}>
                <span>NaNa</span>Names
            </h1>
        </Link>
    );
};
