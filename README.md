# vpc1

# vpn

Requirement:
We need to create an API which would create a VPN that connects to given VPC

https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/f1e97bc6-315a-4490-82a7-23abe036327a.anypoint-platform/cloudhub-api/minor/1.0/pages/home/

 

Available endpoints for VPN 
To create a VPN (POST method)

https://anypoint.mulesoft.com/cloudhub/api/organizations/{orgid}/vpcs/{vpcId}/ipsec

uriParams:

orgid : string (required)

vpcId: string (required)

header :

Authorization : string (required)

body: (example)

{ "name": "myDatacenterVpn", "remoteAsn": 65000, "remoteIpAddress": "100.100.100.100", "remoteNetworks": [], "tunnelConfigs": [{ "psk": "23847329fn3u__...", "ptpCidr": "169.254.12.0/30" }, { "psk": "nsdkjfnsauf23f2linf", "ptpCidr": "169.254.12.4/30" }] }

2. To get collection of Vpn Connection objects and the total number of returned collections (GET method)

https://anypoint.mulesoft.com/cloudhub/api/organizations/{orgid}/vpcs/{vpcId}/ipsec

uriParams:

orgid : string (required)

vpcId: string (required)

header :

Authorization : string (required)

3. To get the configuration and state a single VPN by passing vpnId  (GET method)

https://anypoint.mulesoft.com/cloudhub/api/organizations/{orgid}/vpcs/{vpcId}/ipsec/{vpnId}

uriParams:

orgid : string (required)

vpcId: string (required)

vpnId: string (required)

header :

Authorization : string (required)

4. To delete a VPN connection (DELETE method)

https://anypoint.mulesoft.com/cloudhub/api/organizations/{orgid}/vpcs/{vpcId}/ipsec/{vpnId}

uriParams:

orgid : string (required)

vpcId: string (required)

vpnId: string (required)

header :

Authorization : string (required)

 

Authorization Token
To generate Authorization token the endpoint to  be used is 

https://anypoint.mulesoft.com/accounts/login

body:

username : string (required)

password : string (required)
