import { ArrowLeft } from "@/icons/ArrowLeft";
import { Bot } from "@/icons/Bot";
import styles from "@/styles/results-tab.module.css";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import { Spinner } from "../Spinner";
import { useState } from "react";

const names = [
    "Coco",
    "Fisgón",
    "Firulais",
    "Oreo",
    "Scrappy",
    "Huesos",
    "Max",
    "Minny",
    "Nueve",
    "Diez",
    "Once",
    "Doce",
];

export const ResultsTab = ({ formController }) => {
    const [loading, setLoading] = useState(false);
    const copyName = async (name) => {
        try {
            await navigator.clipboard.writeText(name);
            toast.success("Name copied to clipboard!", {
                position: "bottom-center",
                style: {
                    background: "#222",
                    color: "#eee",
                },
            });
            confetti({ particleCount: 100, spread: 70, origin: { y: 1.0 } });
        } catch (error) {
            console.log(error);
            toast.error("Cannot copy name to clipboard", {
                position: "bottom-center",
                style: {
                    background: "#222",
                    color: "#eee",
                },
            });
        }
    };

    return (
        <div className={styles.article}>
            <header className={styles.row}>
                <h1>Pick the perfect name</h1>
                <div className={styles.buttonGroup}>
                    <button
                        className="secondary-btn"
                        onClick={() =>
                            formController.setField("currentSelected", 0)
                        }
                    >
                        <ArrowLeft size={20} className="icon" />
                        Reconfigure
                    </button>
                </div>
            </header>
            {loading && (
                <div className={styles.loadingContainer}>
                    <Bot size={64} />
                    <Spinner />
                    <p>The AI is doing its magic...</p>
                </div>
            )}
            {!loading && (
                <div className={styles.grid}>
                    {names.map((name) => (
                        <div
                            key={name}
                            className={styles.card}
                            onClick={() => copyName(name)}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
