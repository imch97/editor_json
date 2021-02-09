import './Field.sass'
import React from 'react'
import { useState, useEffect } from 'react'
import classNames from 'classnames'

const Field = ({ fieldKey, value }) => {
	const [key, setKey] = useState(fieldKey)
	const [valueField, setValueField] = useState(value)

	const handleChange = (event) => {
		const content = event.target.textContent
		setValueField(content)
		console.log(valueField)
	}

	return (
		<div className={classNames({ item: true })}>
			<div className={classNames({ item_key: true })}>{key}:</div>
			<div
				className={classNames({ item_value: true })}
				contentEditable="true"
				suppressContentEditableWarning="true"
				onClick={(e) => handleChange(e)}
				value={valueField}
			>
				{valueField}
			</div>
		</div>
	)
}
export default Field
