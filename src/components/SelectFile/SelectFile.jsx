import './SelectFile.sass'
import classNames from 'classnames'
import { useState, useEffect } from 'react'

const options = [
	{ value: '/json/test.json', label: 'test' },
	{
		value: '/json/Synchronization Policy.json',
		label: 'Synchronization Policy',
	},
	{
		value: '/json/Records Management Policy.json',
		label: 'Records Management Policy',
	},
	{ value: '/json/Approval Policy.json', label: 'Approval Policy' },
]

const SelectFile = ({ files }) => {
	const [file, setFile] = useState()
	const [selectedOption, setSelectedOption] = useState()

	const handleChange = (selectedOption) => {
		setSelectedOption({ selectedOption })
		let formData = new FormData()
		var fs = require('fs')
		formData.append('file', fs.createReadStream(selectedOption.target.value))
		const fi = formData.get('file')
		setFile(fi)
		console.log(`Option selected:`, selectedOption.target.value)
	}

	useEffect(() => {
		files(file)
	}, [selectedOption])

	return (
		<div className={classNames({ select_files: true })}>
			<select onChange={(e) => handleChange(e)}>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default SelectFile
