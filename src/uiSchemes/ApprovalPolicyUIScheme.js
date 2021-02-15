const ApprovalPolicyUIScheme = {
	'Approval Policy': {
		'ui:options': {
			orderable: false,
		},

		'Approval Groups': {
			'ui:options': {
				orderable: false,
			},
		},

		'Route Templates': {
			'ui:options': {
				orderable: false,
			},

			items: {
				'Record Types': {
					'ui:options': {
						semantic: {
							wrapItem: false,
						},
						orderable: false,
					},
				},
				Levels: {
					'ui:options': {
						orderable: false,
					},
					items: {
						Approvers: {
							'ui:options': {
								orderable: false,
							},
						},
					},
				},
				Constraints: {
					'ui:options': {
						orderable: false,
					},

					items: {
						Values: {
							'ui:options': {
								orderable: false,
							},
						},
					},
				},
			},
		},
	},
}

export default ApprovalPolicyUIScheme
