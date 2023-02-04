import { ArrowLeft } from "@/icons/ArrowLeft";
import styles from "@/styles/results-tab.module.css";

const names = [
    "Coco",
    "Fisgon",
    "Firulais",
    "Oreo",
    "Scrappy",
    "Huesos",
    "Max",
    "Minny",
    "Nueve",
    "Diez",
    "Once",
    "Doce"
];

export const ResultsTab = ({ formController }) => {
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
            <div className={styles.grid}>
                {names.map((name) => (
                    <div key={name} className={styles.card}>
                        {name}
                    </div>
                ))}
            </div>
        </div>
    );
};
