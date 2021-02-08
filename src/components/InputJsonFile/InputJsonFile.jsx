import './InputJsonFile.sass'
import classNames from 'classnames'

const InputJsonFile = () => {
	const handleChange = (event) => {
		console.log(event.target.files)
	}
	return (
		<div className={classNames({ input_file: true })}>
			<input type="file" onChange={(e) => handleChange(e)} />
		</div>
	)
}
export default InputJsonFile
