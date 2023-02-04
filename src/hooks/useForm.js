import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [form, setForm] = useState(structuredClone(initialForm));

    const setField = (field, value) => {
        if (Object.hasOwn(form, field)) setForm({ ...form, [field]: value });
        else console.log("Cannot update", field, value);
    };

    return { fields: form, setField };
};
