import React from 'react'
import { useState } from 'react'
import './JsonEditor.sass'
import Editor from '../../Editor/Editor.jsx'
import InputJsonFile from '../../InputJsonFile/InputJsonFile.jsx'
import SelectFile from '../../SelectFile/SelectFile.jsx'

import classNames from 'classnames'

const JsonEditor = () => {
	const [file, setFile] = useState()
	return (
		<div className={classNames({ JsonEditor: true })}>
			{/* <InputJsonFile files={setFile} /> */}
			{/* <SelectFile files={setFile} /> */}

			{file && <Editor file={file} />}
		</div>
	)
}
export default JsonEditor
