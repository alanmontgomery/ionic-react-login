import { useState } from "react";

export const useFormInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = async (e) => {
    const tempValue = await e.currentTarget.value;
    setValue(tempValue);
  };

  return {
    value,
    reset: (newValue) => setValue(newValue),
    onIonChange: handleChange,
    onKeyUp: handleChange,
  };
};

export const validateForm = (fields) => {
  let errors = [];

  fields.forEach((field) => {
    if (field.required) {
      const fieldValue = field.input.state.value;
      const fieldLabel = field.id;
      if (
        fieldValue === "" ||
        (fieldLabel === "email" && fieldValue !== "minhhieu@scuti.asia") ||
        (fieldLabel === "password" && fieldValue !== "123456789") ||
        (fieldLabel === "password" && fieldValue === "")
      ) {
        const error = {
          id: fieldLabel,
          message: `Please check your ${fieldLabel}`,
        };
        errors.push(error);
      }
    }
  });

  return errors;
};

export function getRandomInt(list) {
  return list[Math.floor(Math.random() * list.length)];
}
