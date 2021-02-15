const SynchronizationPolicyUISchema = {
	'Synchronization Policy': {
		'ui:order': ['Version', 'Locations'],
		Locations: {
			'ui:options': {
				orderable: false,
			},
		},
	},
}

export default SynchronizationPolicyUISchema
