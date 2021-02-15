import SynchronizationPolicyUISchema from './SynchronizationPolicyUISchema'

const RecordsManagementPolicyUIScheme = {
	'Records Management Policy': {
		'Record Types': {
			'ui:options': {
				orderable: false,
			},
			items: {
				Definitions: {
					'ui:options': {
						orderable: false,
					},
					items: {
						Systems: {
							'ui:options': {
								orderable: false,
							},
						},
						Aliases: {
							'ui:options': {
								orderable: false,
							},
						},
						'Item Types': {
							'ui:options': {
								orderable: false,
							},
						},
					},
				},
				Fields: {
					'ui:options': {
						orderable: false,
					},
				},
			},
		},
	},
}
export default RecordsManagementPolicyUIScheme
