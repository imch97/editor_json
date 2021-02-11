import './SelectFile.sass'
import classNames from 'classnames'
import { useState, useEffect } from 'react'

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
]

const SelectFile = ({ files }) => {
	const [file, setFile] = useState()

	return <div className={classNames({ select_files: true })}></div>
}
