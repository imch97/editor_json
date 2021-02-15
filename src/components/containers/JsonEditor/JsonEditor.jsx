import React from 'react'
import { useState, useEffect } from 'react'
import './JsonEditor.sass'
import Editor from '../../Editor/Editor.jsx'
import InputJsonFile from '../../InputJsonFile/InputJsonFile.jsx'
import SelectFile from '../../SelectFile/SelectFile.jsx'
import Forms from '../../Forms/Forms.jsx'

import classNames from 'classnames'

const JsonEditor = () => {
	const [file, setFile] = useState()
	const [schema, setSchemes] = useState()
	const [uiSchema, setUiSchema] = useState()

	return (
		<div className={classNames({ JsonEditor: true })}>
			<InputJsonFile files={setFile} />
			{/* {file && <Editor file={file} />} */}

			<SelectFile files={setSchemes} uiSchema={setUiSchema} />
			{schema && file && (
				<Forms schema={schema} editFormData={file} editUISchema={uiSchema} />
			)}
		</div>
	)
}
export default JsonEditor
