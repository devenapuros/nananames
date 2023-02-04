import { ArrowRight } from "@/icons/ArrowRight";
import styles from "@/styles/characteristics-tab.module.css";

export const Characteristics = ({ formController }) => {
    return (
        <div className={styles.article}>
            <header className={styles.row}>
                <h1>Add your pet&apos;s characteristics</h1>
                <div className={styles.buttonGroup}>
                    <button className="secondary-btn">Anterior</button>
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
            <div>
                <h1>Hola</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloremque eligendi reiciendis quod est esse ipsam
                    cupiditate modi ea vel repudiandae maiores, atque tenetur
                    assumenda asperiores, sint sit itaque consectetur. Suscipit.
                </p>
            </div>
        </div>
    );
};
