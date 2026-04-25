import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class DemografixAgifyApi implements ICredentialType {
	name = 'demografixAgifyApi';
	displayName = 'Agify API';
	documentationUrl = 'https://github.com/DemografixGenderize/n8n-nodes-agify?tab=readme-ov-file#credentials';
	icon = undefined;

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				apikey: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.agify.io',
			url: '',
			qs: {
				name: 'test',
			},
		},
	};
}
