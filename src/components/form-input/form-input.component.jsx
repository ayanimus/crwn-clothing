import React from 'react'
import {FormInputLabel, Input, Group} from './form-input.styles.jsx'

const FormInput = ({label, ...otherProps}) => (
	<Group>
		<Input {...otherProps}/>
		{label
		&& <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
	</Group>
)

export default FormInput
