import { Topbar } from "@/components/Topbar";
import { ArrowRight } from "@/icons/ArrowRight";
import styles from "@/styles/home-page.module.css";
import buttonStyle from "@/styles/button.module.css";
import Image from "next/image";
import { Lightbulb } from "@/icons/LightBulb";
import { Wrench } from "@/icons/Wrench";
import { Github } from "@/icons/Github";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Topbar />
            <main className={styles.main}>
                <div className={styles.row}>
                    <Image
                        className={styles.image}
                        src="/pets/dog.svg"
                        height={90}
                        width={90}
                        alt="Frog pet"
                    />
                    <Image
                        className={styles.image}
                        src="/pets/frog.svg"
                        height={90}
                        width={90}
                        alt="Frog pet"
                    />
                    <Image
                        className={styles.image}
                        src="/pets/chicken.svg"
                        height={90}
                        width={90}
                        alt="Frog pet"
                    />
                    <Image
                        className={styles.image}
                        src="/pets/cat.svg"
                        height={90}
                        width={90}
                        alt="Frog pet"
                    />
                </div>
                <h1 className={styles.title}>Pet Name Generator</h1>
                <h2 className={styles.slogan}>
                    Generate funny and customizable name for your pet using
                    Artificial Intelligence
                </h2>
                <p className={styles.paragraph}>
                    Powered by <span className={styles.cohere}>Co:here</span>
                </p>
                <button className={`${buttonStyle.primary} ${styles.button}`}>
                    Start generating
                    <ArrowRight size={22} />
                </button>
            </main>
            <section className={styles.section}>
                <article className={styles.article}>
                    <Lightbulb size={42} />
                    <h1>Get name ideas</h1>
                    <p>
                        NaNaNames generates funny, catchy pet names with a state
                        of the art language model.
                    </p>
                </article>
                <div className={styles.divider}></div>
                <article className={styles.article}>
                    <Wrench size={42} />
                    <h1>Customizable results</h1>
                    <p>
                        NaNaNames can generate names based on your pet&apos;s
                        characteristics as well as keywords.
                    </p>
                </article>
                <div className={styles.divider}></div>
                <article className={styles.article}>
                    <Github size={42} />
                    <h1>Open source</h1>
                    <p>
                        NaNaNames is an open source project. You can find the
                        source code at this Github repository
                    </p>
                </article>
            </section>
            <Footer />
        </>
    );
}

/*
Generate a list of twelve names for a pet, which is a snake and has the following characteristics:
yellow and green color
python snake
brown spots all over the body
*/
