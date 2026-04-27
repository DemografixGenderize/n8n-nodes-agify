import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';

export class DemografixAgify implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Agify',
		name: 'demografixAgify',
		icon: 'file:demografixAgify.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Get age prediction for a given name using the Agify.io API (free tier: 2,500 requests/month)',
		defaults: {
			name: 'Agify',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'demografixAgifyApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.agify.io',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Get Age',
						value: 'getAge',
						action: 'Get age prediction for a name',
						description: 'Get the predicted age for a given first name',
						routing: {
							request: {
								method: 'GET',
								url: '',
								qs: {
									name: '={{$parameter.name}}',
									country_id: '={{$parameter.country_id || undefined}}',
								},
							},
							output: {
								postReceive: [
									{
										type: 'set',
										properties: {
											value: '={{ { ...($response.body), "rateLimit": { "limit": $response.headers["x-rate-limit-limit"], "remaining": $response.headers["x-rate-limit-remaining"], "reset": $response.headers["x-rate-limit-reset"] } } }}',
										},
									},
								],
							},
						},
					},
				],
				default: 'getAge',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				description: 'The name to get age prediction for',
				placeholder: 'e.g., Peter',
			},
			{
				displayName: 'Country Code',
				name: 'country_id',
				type: 'string',
				default: '',
				description: 'Optional ISO 3166-1 alpha-2 country code (e.g., US, GB, DK) for improved accuracy',
				placeholder: 'e.g., US',
			},
		],
	};
}
