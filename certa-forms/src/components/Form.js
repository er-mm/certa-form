import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import Field from './Field';
import { createYupSchema } from '../utils/yupSchemaCreator';
import { FIELD_TYPES, VALIDATION_TYPES } from '../utils/constants';

const Button = styled.button`
  padding: 4px;
  width: 190px;
`;

function Form(props) {
	const { fields, cbSubmit } = props;
	const initialValues = {};

	fields.forEach(item => {
		initialValues[item.id] = item.value || "";
	});

	const yupSchema = fields.reduce(createYupSchema, {});

	const validateSchema = yup.object().shape(yupSchema);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validateSchema}
			onSubmit={cbSubmit}
		>
			{formikProps => (
				<form onSubmit={formikProps.handleSubmit}>
					<Field fields={fields} formikProps={formikProps} onBlur={formikProps.handleBlur}/>
					<Button type="submit">
						Submit
          </Button>
				</form>
			)}
		</Formik>
	);
}

Form.propTypes = {
	fields: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string,
			placeholder: PropTypes.string,
			type: PropTypes.oneOf(FIELD_TYPES).isRequired,
			validationType: PropTypes.oneOf(VALIDATION_TYPES).isRequired,
			value: PropTypes.any,
			options: PropTypes.array,
			validations: PropTypes.arrayOf(
				PropTypes.shape({
					type: PropTypes.string.isRequired,
					params: PropTypes.array.isRequired
				})
			)
		})
	).isRequired,
	cbSubmit: PropTypes.func.isRequired
};

export default Form;
