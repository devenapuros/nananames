import { ArrowLeft } from "@/icons/ArrowLeft";
import { ArrowRight } from "@/icons/ArrowRight";
import { Close } from "@/icons/Close";
import { Plus } from "@/icons/Plus";
import styles from "@/styles/characteristics-tab.module.css";
import { useState } from "react";

export const Characteristics = ({ formController }) => {
    const [showDialog, setShowDialog] = useState(false);
    const setNextTab = () => formController.setField("currentSelected", 2);

    const addCharacteristic = (event) => {
        event.preventDefault();
        console.log(event);
        // const newItem = {
        //     id: Math.floor(Math.random() * Date.now()),
        //     content: event.,
        // };
        // formController.setField("characteristics", [
        //     ...formController.fields.characteristics,
        //     newItem,
        // ]);
        // setShowDialog(false);
    };

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
                    <button className="primary-btn" onClick={setNextTab}>
                        Next <ArrowRight size={20} className="icon" />
                    </button>
                </div>
            </header>
            <div className={styles.container}>
                {formController.fields.characteristics.length > 0 && (
                    <ul className={styles.ul}>
                        {formController.fields.characteristics.map((item) => (
                            <li key={item.id}>
                                <span>{item.content}</span>
                                <button className={styles.deleteBtn}>
                                    <Close size={16} />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                {!showDialog && (
                    <button
                        className={styles.addBtn}
                        onClick={() => setShowDialog(true)}
                    >
                        Add
                        <Plus size={18} />
                    </button>
                )}
                {showDialog && (
                    <div className={styles.card}>
                        <form onSubmit={addCharacteristic}>
                            <label htmlFor="">
                                Add a characteristic in a short phrase:
                            </label>
                            <input
                                type="text"
                                name="characteristic"
                                placeholder="Example: Spots all over the body"
                                autoFocus
                            />
                            <div>
                                <button
                                    type="button"
                                    className="secondary-btn"
                                    onClick={() => setShowDialog(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="primary-btn">
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};
