import './Field.sass'
import React from 'react'
import { useState, useEffect } from 'react'
import classNames from 'classnames'

const Field = ({ fieldKey, value }) => {
	const [key, setKey] = useState(fieldKey)
	const [valueField, setValueField] = useState(value || '')

	const handleChange = (event) => {
		const content = event.target.value
		setValueField(content)

		// console.log(key, ' log', valueField)
	}

	// useEffect(() => {
	// 	console.log(key, ' eff', valueField)
	// }, [valueField])

	return (
		<div className={classNames({ item: true })}>
			<div className={classNames({ item_key: true })}>{key}:</div>
			{/* <div
				className={classNames({ item_value: true })}
				contentEditable={true}
				suppressContentEditableWarning={true}
				onBlur={(e) => handleChange(e)}
				value={valueField}
			>
				{valueField == '' ? "' '" : valueField}
			</div> */}
			<input
				className={classNames({ item_value: true })}
				value={valueField}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	)
}
export default Field
