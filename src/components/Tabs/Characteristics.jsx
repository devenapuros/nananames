import { useForm } from "@/hooks/useForm";
import { ArrowLeft } from "@/icons/ArrowLeft";
import { ArrowRight } from "@/icons/ArrowRight";
import { Close } from "@/icons/Close";
import { Plus } from "@/icons/Plus";
import styles from "@/styles/characteristics-tab.module.css";
import Image from "next/image";
import { useState } from "react";

const initialDialog = {
    characteristic: "",
};

export const Characteristics = ({ formController }) => {
    const [showDialog, setShowDialog] = useState(false);
    const setNextTab = () => formController.setField("currentSelected", 2);
    const dialogForm = useForm(initialDialog);

    const addCharacteristic = (event) => {
        event.preventDefault();
        if (!dialogForm.fields.characteristic) return;
        const newItem = {
            id: Math.floor(Math.random() * Date.now()),
            content: dialogForm.fields.characteristic,
        };
        formController.setField("characteristics", [
            ...formController.fields.characteristics,
            newItem,
        ]);
        setShowDialog(false);
        dialogForm.reset();
    };

    const deleteCharacteristic = (id) => {
        const new_characteristics =
            formController.fields.characteristics.filter(
                (item) => item.id !== id
            );
        formController.setField("characteristics", new_characteristics);
    };

    return (
        <div className={styles.article}>
            <header className={styles.row}>
                <h1>
                    Add your {formController.fields.pet}&apos;s{" "}
                    <Image
                        src={`/pets/${formController.fields.pet}.svg`}
                        height={35}
                        width={35}
                        alt={`${formController.fields.pet} pet.`}
                    />{" "}
                    characteristics
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
                        {formController.fields.characteristics.length > 0
                            ? "Next"
                            : "Skip"}
                        <ArrowRight size={20} className="icon" />
                    </button>
                </div>
            </header>
            <div className={styles.container}>
                {formController.fields.characteristics.length > 0 && (
                    <ul className={styles.ul}>
                        {formController.fields.characteristics.map((item) => (
                            <li key={item.id}>
                                <span>{item.content}</span>
                                <button
                                    className={styles.deleteBtn}
                                    onClick={() =>
                                        deleteCharacteristic(item.id)
                                    }
                                >
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
                                value={dialogForm.fields.characteristic}
                                onChange={(event) =>
                                    dialogForm.setField(
                                        event.target.name,
                                        event.target.value
                                    )
                                }
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
                                <button
                                    type="submit"
                                    className="primary-btn"
                                    disabled={
                                        dialogForm.fields.characteristic
                                            ? false
                                            : true
                                    }
                                >
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
