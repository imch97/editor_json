import './SelectFile.sass'
import classNames from 'classnames'
import { useState, useEffect } from 'react'
import SynchronizationPolicyUISchema from '../../uiSchemes/SynchronizationPolicyUISchema.js'
import RecordsManagementPolicyUIScheme from '../../uiSchemes/RecordsManagementPolicyUIScheme.js'
import ApprovalPolicyUIScheme from '../../uiSchemes/ApprovalPolicyUIScheme.js'

const options = [
	{
		value: {
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
		},

		label: 'Synchronization Policy',
	},
	{
		value: {
			type: 'object',
			properties: {
				'Records Management Policy': {
					type: 'object',
					properties: {
						Version: {
							type: 'string',
						},
						Schema: {
							type: 'object',
							properties: {
								ID: {
									type: 'string',
								},
								Major: {
									type: 'string',
								},
								Minor: {
									type: 'string',
								},
							},
							required: ['ID', 'Major', 'Minor'],
						},
						'Record Types': {
							type: 'array',
							items: {
								type: 'object',
								properties: {
									Name: {
										type: 'string',
									},
									Definitions: {
										type: 'array',
										items: {
											type: 'object',
											properties: {
												Systems: {
													type: 'array',
													items: {
														type: 'string',
													},
												},
												Aliases: {
													type: 'array',
													items: {
														type: 'object',
														properties: {
															'Policy Field': {
																type: 'string',
															},
															'System Field': {
																type: 'string',
															},
														},
														required: ['Policy Field', 'System Field'],
													},
												},
												'Item Types': {
													type: 'array',
													items: {
														type: 'string',
													},
												},
												'Singular Name': {
													type: 'string',
												},
												'Plural Name': {
													type: 'string',
												},
												'Ownership Description': {
													type: 'string',
												},
												'Content Originator': {
													type: 'string',
												},
											},
											required: [
												'Systems',
												'Aliases',
												'Item Types',
												'Singular Name',
												'Plural Name',
												'Ownership Description',
												'Content Originator',
											],
										},
									},
									Fields: {
										type: 'array',
										items: {
											type: 'object',
											properties: {
												Name: {
													type: 'string',
												},
												'Is Data': {
													type: 'string',
												},
											},
											required: ['Name', 'Is Data'],
										},
									},
								},
								required: ['Name', 'Definitions', 'Fields'],
							},
						},
					},
					required: ['Version', 'Schema', 'Record Types'],
				},
			},
			required: ['Records Management Policy'],
		},
		label: 'Records Management Policy',
	},
	{
		value: {
			type: 'object',
			properties: {
				'Approval Policy': {
					type: 'object',
					properties: {
						Version: {
							type: 'string',
						},
						Schema: {
							type: 'object',
							properties: {
								ID: {
									type: 'string',
								},
								Major: {
									type: 'string',
								},
								Minor: {
									type: 'string',
								},
							},
							required: ['ID', 'Major', 'Minor'],
						},
						'Approval Groups': {
							type: 'array',
							items: {
								type: 'string',
							},
						},
						'Route Templates': {
							type: 'array',
							items: {
								type: 'object',
								properties: {
									Name: {
										type: 'string',
									},
									Rank: {
										type: 'string',
									},
									'Record Types': {
										type: 'array',
										items: {
											type: 'string',
										},
									},
									Levels: {
										type: 'array',
										items: {
											type: 'object',
											properties: {
												Name: {
													type: 'string',
												},
												Approvers: {
													type: 'array',
													items: {
														type: 'string',
													},
												},
											},
											required: ['Name', 'Approvers'],
										},
									},
									Constraints: {
										type: 'array',
										items: {
											type: 'object',
											properties: {
												Type: {
													type: 'string',
												},
												Name: {
													type: 'string',
												},
												Values: {
													type: 'array',
													items: {
														type: 'string',
													},
												},
											},
											required: ['Type', 'Name', 'Values'],
										},
									},
								},
								required: [
									'Name',
									'Rank',
									'Record Types',
									'Levels',
									'Constraints',
								],
							},
						},
					},
					required: ['Version', 'Schema', 'Approval Groups', 'Route Templates'],
				},
			},
			required: ['Approval Policy'],
		},
		label: 'Approval Policy',
	},
]

const SelectFile = ({ files, uiSchema }) => {
	const [file, setFile] = useState(options[0].value)
	const [selectedOption, setSelectedOption] = useState()
	const [selectedUISchema, setSelectedUISchema] = useState()

	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption)
		setFile(JSON.parse(selectedOption))

		const nameSchema = Object.keys(JSON.parse(selectedOption).properties)[0]
		if (nameSchema == Object.keys(options[0].value.properties)[0]) {
			uiSchema(SynchronizationPolicyUISchema)
		}

		if (nameSchema == Object.keys(options[1].value.properties)[0]) {
			uiSchema(RecordsManagementPolicyUIScheme)
		}
		if (nameSchema == Object.keys(options[2].value.properties)[0]) {
			uiSchema(ApprovalPolicyUIScheme)
		}
	}

	useEffect(() => {
		files(file)

		// console.log(selectedOption.target.value)
	}, [files, file, selectedOption])

	return (
		<div className={classNames({ select_files: true })}>
			<select
				onChange={(e) => {
					handleChange(e.target.value)
				}}
				value={selectedOption}
			>
				{options.map((option, index) => (
					<option key={index} value={JSON.stringify(option.value)}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default SelectFile
