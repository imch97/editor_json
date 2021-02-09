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
			console.log(fileParse)
		})
	}, [file])

	return (
		<div className={classNames({ editor: true })}>
			<div className={classNames({ editor_menu: true })} contentEditable="">
				MENU
			</div>

			{fileParse &&
				Object.entries(fileParse).map((el, index) => (
					<Field key={el} fieldKey={el[(index, 0)]} value={el[(index, 1)]} />
				))}
		</div>
	)
}

export default Editor
