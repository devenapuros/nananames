import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import { Bot } from "@/icons/Bot";
import { ArrowLeft } from "@/icons/ArrowLeft";
import { Spinner } from "../Spinner";
import styles from "@/styles/results-tab.module.css";

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
    const [load, setLoad] = useState(false);

    useEffect(() => {
        console.log(formController);
        if (formController.fields.currentSelected === 2) {
            setLoad(true);
            setTimeout(() => {
                setLoad(false);
            }, 5000);
        }
    }, [formController.fields.currentSelected]);

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
            {load && (
                <div className={styles.loadingContainer}>
                    <Bot size={64} />
                    <Spinner />
                    <p>The AI is doing its magic...</p>
                </div>
            )}
            {!load && (
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
