import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlFirewallrulesApi implements ICredentialType {
        name = 'N8nDevAzureSqlFirewallrulesApi';

        displayName = 'Azure SQL Firewallrules API';

        icon: Icon = { light: 'file:../nodes/AzureSqlFirewallrules/azure-sql-firewallrules.png', dark: 'file:../nodes/AzureSqlFirewallrules/azure-sql-firewallrules.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Firewallrules API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
