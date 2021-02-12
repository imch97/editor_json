import React from 'react'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import './Editor.sass'
import Field from '../Field/Field.jsx'

// TODO: contentEditable="true | false" редактирование DIV элемента

// const getFiniteValue = (obj) => {
// 	let mas = []
// 	let count = 0
// 	const getProp = (o) => {
// 		for (let prop in o) {
// 			if (typeof o[prop] === 'object') {
// 				mas.push([prop, null])

// 				getProp(o[prop])
// 			} else {
// 				console.log('Finite value: ', o[prop])

// 				mas.push([prop, o[prop]])
// 			}
// 		}
// 	}

// 	getProp(obj)

// 	return mas
// }

const getFiniteValue = (obj) => {
	let handledFlag = 'temp__isAlreadyHandled__'
	let mas = []

	const getProp = (o, stack) => {
		let propertyPath

		for (var prop in o) {
			if (typeof o[prop] === 'object') {
				if (!o[prop][handledFlag]) {
					Object.defineProperty(o[prop], handledFlag, {
						value: true,
						writable: false,
						configurable: true,
					})

					if (!stack) {
						propertyPath = '' + prop
					} else propertyPath = stack + '.' + prop

					getProp(o[prop], propertyPath)
				} else {
					propertyPath = stack + '.' + prop
					console.error('Циклическая ссылка. Свойство: ' + propertyPath)
				}
				delete o[prop][handledFlag]
			} else {
				mas.push([stack, prop, o[prop]])

				console.log(stack, '-->', prop, o[prop])
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
						root={el[0]}
						fieldKey={el[1]}
						value={el[2]}
					/>
				))}
		</div>
	)
}

export default Editor
