import { ExternalLink } from "@/components/ExternalLink";
import { Footer } from "@/components/Footer";
import { Topbar } from "@/components/Topbar";
import { Github } from "@/icons/Github";
import { Instagram } from "@/icons/Instagram";
import { Twitter } from "@/icons/Twitter";
import styles from "@/styles/about-page.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Topbar />
            <section className={styles.section}>
                <Image
                    src="/favicon.svg"
                    height={100}
                    width={100}
                    style={{ borderRadius: "24px" }}
                    alt="NaNaNames logo"
                />
                <div className={styles.container}>
                    <h1>About</h1>
                    <p>
                        This project was developed to participate in the
                        hackathon organized by{" "}
                        <strong>
                            <ExternalLink href="https://github.com/midudev">
                                Miguel Ángel Durán (Midudev)
                            </ExternalLink>
                        </strong>
                        . It was developed using Next.js, powered by the Co:here
                        services and deployed on Vercel.
                    </p>
                </div>
                <div className={styles.container}>
                    <h2>Get a Co:here free tier</h2>
                    <p>
                        You can get a free tier on Co:here services with the
                        following link:{" "}
                        <a href="https://midu.link/ia">https://midu.link/ia</a>
                    </p>
                </div>
                <div className={styles.container}>
                    <h2>Follow Devenapuros on other social media:</h2>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/devenapuros"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github size={20} />
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/devenapuros"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Twitter size={20} />
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/devenapuros"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Instagram size={20} />
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
}
