import React from 'react'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import './Editor.sass'
import Field from '../Field/Field.jsx'

// TODO: contentEditable="true | false" редактирование DIV элемента

const Editor = ({ file }) => {
	const [fileParse, setFileParse] = useState()

	useEffect(() => {
		const prom = new Promise((resolve, reject) => {
			let reader = new FileReader()

			reader.readAsText(file)

			reader.onload = function () {
				resolve(JSON.parse(reader.result))
			}

			// return JSON.parse(reader.result)
		}).then((result) => {
			setFileParse(result)
		})
	}, [file])

	return (
		<div className={classNames({ editor: true })}>
			<div className={classNames({ editor_menu: true })} contentEditable="">
				MENU
			</div>

			{fileParse &&
				Object.keys(fileParse).map((el) => (
					<Field key={el} fieldKey={el} value={fileParse[el]} />
				))}
		</div>
	)
}

export default Editor
