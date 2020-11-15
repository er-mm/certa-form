import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import RadioButtonField from './RadioButtonField';
import CheckboxField from './CheckboxField';
import UploadField from './UploadField';

const fieldMap = {
	text: TextField,
	select: SelectField,
	textarea: TextAreaField,
	radio: RadioButtonField,
	checkbox: CheckboxField,
	upload: UploadField,
};

const handleBlure = (e) => {
	const { name, value} = e.target;
	fetch('https://enmzq6eaj9rj.x.pipedream.net/response/submit/?name=MayankMittal', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({name: value}),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
}

function Field({ fields, formikProps }) {
	const {
		errors,
		touched,
		values,
		handleBlur,
		handleChange,
		setFieldValue,
	} = formikProps;
	return fields.map((item, index) => {
		const Component = fieldMap[item.type];
		let error = errors.hasOwnProperty(item.id) && errors[item.id];
		if (!item.type) {
			return null;
		}
		return (
			<Component
				key={index}
				label={item.label}
				name={item.id}
				placeholder={item.placeholder}
				value={values[item.id]}
				options={item.options}
				touched={touched}
				error={error}
				handleBlur={handleBlure}
				onChange={handleChange}
				setFieldValue={setFieldValue}
			/>
		);
	});
}

Field.propTypes = {
	fields: PropTypes.array.isRequired,
	formikProps: PropTypes.object.isRequired,
};

export default Field;
