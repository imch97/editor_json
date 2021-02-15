import './InputJsonFile.sass'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import FormData from 'form-data'

const InputJsonFile = ({ files }) => {
	const [file, setFile] = useState()

	const handleChange = (event) => {
		// setFile(event.target.files[0])
		let formData = new FormData()
		formData.append('file', event.target.files[0])
		console.log(event.target.files[0])
		const fi = formData.get('file')
		// fileRead(fi)
		// console.log('input fi', fi)

		setFile(fi)

		// setHaveJson(true)
	}

	useEffect(() => {
		files(file)
	}, [files, file])

	return (
		<div className={classNames({ input_file: true })}>
			<input type="file" onChange={(e) => handleChange(e)} />
		</div>
	)
}
export default InputJsonFile
