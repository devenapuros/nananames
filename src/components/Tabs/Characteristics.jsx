import { ArrowLeft } from "@/icons/ArrowLeft";
import { ArrowRight } from "@/icons/ArrowRight";
import { Close } from "@/icons/Close";
import { Plus } from "@/icons/Plus";
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
                        Go back
                    </button>
                    <button
                        className="primary-btn"
                        onClick={() =>
                            formController.setField("currentSelected", 2)
                        }
                    >
                        Next <ArrowRight size={20} className="icon" />
                    </button>
                </div>
            </header>
            <div className={styles.container}>
                <ul className={styles.ul}>
                    <li>
                        <span>Strong legs</span>
                        <button className={styles.deleteBtn}>
                            <Close size={16} />
                        </button>
                    </li>
                    <li>
                        <span>Strong legs</span>
                        <button className={styles.deleteBtn}>
                            <Close size={16} />
                        </button>
                    </li>
                </ul>
                <button className={styles.addBtn}>
                    Add
                    <Plus size={18} />
                </button>
                <div className={styles.card}>
                    <form>
                        <label htmlFor="">
                            Add a characteristic in a short phrase:
                        </label>
                        <input
                            type="text"
                            placeholder="Example: Spots all over the body"
                        />
                        <div>
                            <button type="button" className="secondary-btn">
                                Cancel
                            </button>
                            <button type="submit" className="primary-btn">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
