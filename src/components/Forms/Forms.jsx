import Form from '@rjsf/material-ui'

const Forms = () => {
	// const Form = JSONSchemaForm.default

	const schema = {
		type: 'object',
		properties: {
			'Synchronization Policy': {
				type: 'object',
				properties: {
					Version: {
						type: 'string',
						minLength: 10,
					},
					Locations: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								System: {
									type: 'string',
								},
								Name: {
									type: 'string',
								},
								Server: {
									type: 'string',
								},
								'Service Account': {
									type: 'string',
								},
								'Service Password': {
									type: 'string',
								},
								Urls: {
									type: 'object',
									properties: {
										Browser: {
											type: 'string',
										},
										API: {
											type: 'string',
										},
									},
									required: ['Browser', 'API'],
								},
							},
							required: [
								'System',
								'Name',
								'Server',
								'Service Account',
								'Service Password',
								'Urls',
							],
						},
					},
				},
				required: ['Version', 'Locations'],
			},
		},
		required: ['Synchronization Policy'],
	}

	const log = (type) => console.log(console, type)

	const send = (event) => {
		console.log(event)
	}

	return (
		<Form
			schema={schema}
			// onChange={log('changed')}
			onSubmit={(e) => send(e)}
			onError={log('errors')}
			liveValidate
		/>
	)
}
export default Forms
