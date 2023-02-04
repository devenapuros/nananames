import { ArrowRight } from "@/icons/ArrowRight";
import styles from "@/styles/pet-tab.module.css";
import pets from "@/data/pets.json";
import Image from "next/image";

export const PetTab = ({ formController }) => {
    return (
        <div className={styles.article}>
            <header className={styles.row}>
                <h1>Select your pet type</h1>
                <button
                    className="primary-btn"
                    onClick={() =>
                        formController.setField("currentSelected", 1)
                    }
                >
                    Siguiente <ArrowRight size={20} className="icon" />
                </button>
            </header>
            <div className={styles.grid}>
                {pets.map((pet) => (
                    <div
                        key={pet}
                        className={`${styles.card} ${
                            formController.fields.pet === pet
                                ? styles.selected
                                : ""
                        }`}
                        onClick={() => formController.setField("pet", pet)}
                    >
                        <Image
                            className={styles.image}
                            src={`/pets/${pet}.svg`}
                            height={70}
                            width={70}
                            alt={`${pet} pet`}
                        />
                        {pet}
                    </div>
                ))}
            </div>
        </div>
    );
};
