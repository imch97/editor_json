import React from 'react'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import './Editor.sass'

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
			<div
				className={classNames({ editor_menu: true })}
				contentEditable=""
			></div>

			{/* {compl &&
				compl.map((el) => <div contentEditable="true">{el.backgroung}</div>)} */}
			{fileParse &&
				Object.keys(fileParse).map((el) => (
					<div
						className={classNames({ item: true })}
						key={`${el} ${fileParse[el]}`}
					>
						<div className={classNames({ item_key: true })} key={el}>
							{el}:
						</div>
						<div
							className={classNames({ item_value: true })}
							// contentEditable="true"
							key={fileParse[el]}
						>
							{fileParse[el]}
						</div>
					</div>
				))}
		</div>
	)
}

export default Editor
