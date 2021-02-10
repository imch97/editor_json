import React from 'react'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import './Editor.sass'
import Field from '../Field/Field.jsx'

// TODO: contentEditable="true | false" редактирование DIV элемента

const getFiniteValue = (obj) => {
	let mas = []
	const getProp = (o) => {
		for (var prop in o) {
			if (typeof o[prop] === 'object') {
				getProp(o[prop])
			} else {
				// console.log('Finite value: ', o[prop])
				mas.push([prop, o[prop]])
			}
		}
	}
	getProp(obj)
	return mas
}

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
			// console.log(fileParse)
		})
	}, [file])

	return (
		<div className={classNames({ editor: true })}>
			<div className={classNames({ editor_menu: true })} contentEditable="">
				MENU
			</div>

			{fileParse &&
				getFiniteValue(fileParse).map((el, index) => (
					<Field
						key={`${el[0]}:${el[1]} + ${index}`}
						fieldKey={el[0]}
						value={el[1]}
					/>
				))}
		</div>
	)
}

export default Editor
