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
                    disabled={formController.fields.pet ? false : true}
                >
                    Next <ArrowRight size={20} className="icon" />
                </button>
            </header>
            <div className={styles.grid}>
                {pets.map((pet) => (
                    <button
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
                            height={50}
                            width={50}
                            alt={`${pet} pet`}
                        />
                        {pet}
                    </button>
                ))}
            </div>
        </div>
    );
};
