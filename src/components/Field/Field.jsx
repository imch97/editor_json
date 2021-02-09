import './Field.sass'
import React from 'react'
import { useState, useEffect } from 'react'
import classNames from 'classnames'

const Field = ({ fieldKey, value }) => {
	return (
		<div className={classNames({ item: true })}>
			<div className={classNames({ item_key: true })}>{fieldKey}:</div>
			<div
				className={classNames({ item_value: true })}
				contentEditable="true"
				suppressContentEditableWarning="true"
			>
				{value}
			</div>
		</div>
	)
}
export default Field
