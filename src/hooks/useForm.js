import { useState } from "react";

export const useForm = (initialForm) => {
    const [form, setForm] = useState(structuredClone(initialForm));

    const setField = async (field, value) => {
        if (Object.hasOwn(form, field)) {
            const newObj = { ...form, [field]: value };
            await setForm(newObj);
        } else console.log("Cannot update", field, value);
    };

    const reset = () => setForm(initialForm);
    return { fields: form, setField, reset };
};
