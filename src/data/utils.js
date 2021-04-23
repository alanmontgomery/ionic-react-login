import { useState } from "react";

export const useFormInput = (initialValue = "") => {

    const [ value, setValue ] = useState(initialValue);
    
    const handleChange = async e => {

        const tempValue = await e.currentTarget.value;
        setValue(tempValue);
    }

    return {

        value,
        reset: (newValue) => setValue(newValue),
        onIonChange: handleChange,
        onKeyUp: handleChange
    };
}

export const validateForm = fields => {

	let errors = [];

	fields.forEach(field => {

		if (field.required) {

			const fieldValue = field.input.state.value;

			if (fieldValue === "") {

				const error = {

					id: field.id,
					message: `Please check your ${ field.id }`,
				};

				errors.push(error);
			}
		}
	});

	return errors;
}