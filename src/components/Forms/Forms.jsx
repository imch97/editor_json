import Form from '@rjsf/material-ui'
import { useState, useEffect } from 'react'

const Forms = ({ schema, editFormData, editUISchema }) => {
	const [hr, setHr] = useState('')
	const [fileParse, setFileParse] = useState(editFormData)

	useEffect(() => {
		const prom = new Promise((resolve, reject) => {
			let reader = new FileReader()

			reader.readAsText(editFormData)

			reader.onload = function () {
				resolve(JSON.parse(reader.result))
			}
		}).then((result) => {
			setFileParse(result)
		})
	}, [editFormData])

	const log = (type) => console.log(console, type)

	const send = (event) => {
		// console.log(event)
		// console.log(event.formData)

		var a = document.createElement('a')
		document.body.appendChild(a)
		a.style = 'display: none'

		const element = event.formData
		const file = new Blob([JSON.stringify(event.formData)], {
			type: 'data:application/json',
		})
		element.href = URL.createObjectURL(file)
		a.download = 'myFile.json'
		setHr(element)
		console.log(hr)

		a.href = element.href
		a.click()
	}

	// const uiSchema = {
	// 	'Synchronization Policy': {
	// 		'ui:order': ['Version', 'Locations'],
	// 		Locations: {
	// 			'ui:options': {
	// 				orderable: false,
	// 			},
	// 		},
	// 	},
	// }

	return (
		<Form
			schema={schema}
			// onChange={(e) => console.log(e)}
			onSubmit={(e) => send(e)}
			// onError={log('errors')}
			formData={fileParse}
			uiSchema={editUISchema}
			// liveValidate
		/>
	)
}
export default Forms
