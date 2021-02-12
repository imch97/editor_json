import Form from '@rjsf/material-ui'
import { useState } from 'react'

const Forms = ({ schema }) => {
	const [hr, setHr] = useState('')

	// const Form = JSONSchemaForm.default

	const log = (type) => console.log(console, type)

	const send = (event) => {
		console.log(event)
		console.log(event.formData)

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

		// document.body.appendChild(element) // Required for this to work in FireFox
		// element.click()
	}

	return (
		<Form
			schema={schema}
			onChange={log('changed')}
			onSubmit={(e) => send(e)}
			onError={log('errors')}

			// liveValidate
		/>
	)
}
export default Forms
