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
        if (formController.fields.currentSelected === 2) {
            setLoad(true);
            fetch("http://localhost:3000/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    pet: formController.fields.pet,
                    characteristics: formController.fields.characteristics,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setLoad(false);
                });
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
                        onClick={() => formController.reset()}
                        disabled={load}
                    >
                        <ArrowLeft size={20} className="icon" />
                        Retry
                    </button>
                </div>
            </header>
            {load && (
                <div className={styles.loadingContainer}>
                    <Bot size={64} />
                    <Spinner />
                    <p>Generating...</p>
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
