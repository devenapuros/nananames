import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import { Bot } from "@/icons/Bot";
import { ArrowLeft } from "@/icons/ArrowLeft";
import { Spinner } from "../Spinner";
import styles from "@/styles/results-tab.module.css";
import Image from "next/image";
import { Sad } from "@/icons/Sad";

export const ResultsTab = ({ formController }) => {
    const [load, setLoad] = useState(false);
    const [names, setNames] = useState([]);

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
                    characteristics: formController.fields.characteristics.map(
                        (item) => item.content
                    ),
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);
                    setLoad(false);
                    if (data.names && data.names instanceof Array) {
                        setNames(data.names);
                    }
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
                <h1>
                    Pick the perfect name for your {formController.fields.pet}
                    <Image
                        src={`/pets/${formController.fields.pet}.svg`}
                        height={40}
                        width={40}
                        alt={`${formController.fields.pet} pet.`}
                    />
                </h1>
                <div className={styles.buttonGroup}>
                    <button
                        className="secondary-btn"
                        onClick={() =>
                            formController.setField("currentSelected", 0)
                        }
                        disabled={load}
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
                    <p>
                        Generating...
                        <br />
                        Please be patient, this may take a few minutes.
                    </p>
                </div>
            )}
            {!load && (
                <div className={styles.grid}>
                    {names &&
                        names.length > 0 &&
                        names.map((name) => (
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
            {!load && (!names || names.length === 0) && (
                <div className={styles.loadingContainer}>
                    <Sad size={64} />
                    <p>
                        Sorry, it seems that the AI is a bit lazy today.
                        <br />
                        Please click Retry button to generate new names.
                    </p>
                </div>
            )}
        </div>
    );
};
