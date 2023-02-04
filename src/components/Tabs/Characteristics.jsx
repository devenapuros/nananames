import { ArrowLeft } from "@/icons/ArrowLeft";
import { ArrowRight } from "@/icons/ArrowRight";
import styles from "@/styles/characteristics-tab.module.css";

export const Characteristics = ({ formController }) => {
    return (
        <div className={styles.article}>
            <header className={styles.row}>
                <h1>
                    Add your {formController.fields.pet}&apos;s characteristics
                </h1>
                <div className={styles.buttonGroup}>
                    <button
                        className="secondary-btn"
                        onClick={() =>
                            formController.setField("currentSelected", 0)
                        }
                    >
                        <ArrowLeft size={20} className="icon" />
                        Anterior
                    </button>
                    <button
                        className="primary-btn"
                        onClick={() =>
                            formController.setField("currentSelected", 2)
                        }
                    >
                        Siguiente <ArrowRight size={20} className="icon" />
                    </button>
                </div>
            </header>
            <div className={styles.container}>
                <ul>
                    <li>Strong legs</li>
                    <li>Two horns</li>
                </ul>
            </div>
        </div>
    );
};
