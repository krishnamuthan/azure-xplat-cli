// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/networkInterfaceName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9e346860-e6fd-4004-8f84-98921ce7b0e6',
  'x-ms-correlation-request-id': '9e346860-e6fd-4004-8f84-98921ce7b0e6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T091350Z:9e346860-e6fd-4004-8f84-98921ce7b0e6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 09:13:49 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/networkInterfaceName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9e346860-e6fd-4004-8f84-98921ce7b0e6',
  'x-ms-correlation-request-id': '9e346860-e6fd-4004-8f84-98921ce7b0e6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T091350Z:9e346860-e6fd-4004-8f84-98921ce7b0e6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 27 Sep 2017 09:13:49 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"0cfe043a-a961-462b-ac55-b89db52159ca\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0cfe043a-a961-462b-ac55-b89db52159ca"',
  'x-ms-request-id': '49fe23cc-66a2-4156-9191-140331c667a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '94547cbc-fc9b-406d-8044-64b927b1fd25',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T091351Z:94547cbc-fc9b-406d-8044-64b927b1fd25',
  date: 'Wed, 27 Sep 2017 09:13:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"0cfe043a-a961-462b-ac55-b89db52159ca\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0cfe043a-a961-462b-ac55-b89db52159ca"',
  'x-ms-request-id': '49fe23cc-66a2-4156-9191-140331c667a3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '94547cbc-fc9b-406d-8044-64b927b1fd25',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T091351Z:94547cbc-fc9b-406d-8044-64b927b1fd25',
  date: 'Wed, 27 Sep 2017 09:13:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"c4caf26f-0038-44c7-8faf-5e77fa8601c9\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4deacd5c-b119-4e1f-9fc7-d09a89f68be1\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c4caf26f-0038-44c7-8faf-5e77fa8601c9"',
  'x-ms-request-id': 'f61ba825-afed-4da4-84fe-b790340f9dd2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'c771a4b7-00a3-484a-9a39-06d9188cafe2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T091351Z:c771a4b7-00a3-484a-9a39-06d9188cafe2',
  date: 'Wed, 27 Sep 2017 09:13:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"c4caf26f-0038-44c7-8faf-5e77fa8601c9\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"4deacd5c-b119-4e1f-9fc7-d09a89f68be1\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '614',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c4caf26f-0038-44c7-8faf-5e77fa8601c9"',
  'x-ms-request-id': 'f61ba825-afed-4da4-84fe-b790340f9dd2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'c771a4b7-00a3-484a-9a39-06d9188cafe2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T091351Z:c771a4b7-00a3-484a-9a39-06d9188cafe2',
  date: 'Wed, 27 Sep 2017 09:13:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"d0c01b4e-9192-4352-88c9-085e5ccd8378\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ad29cf8e-8828-45a4-8f1f-4cdd3a4ebf15\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"d0c01b4e-9192-4352-88c9-085e5ccd8378\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\",\r\n          \"applicationSecurityGroups\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.m50xwx35f3pepbhl4wigr0uanh.yx.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"m50xwx35f3pepbhl4wigr0uanh.yx.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2166',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd30c3a15-a30b-4ffa-9e2c-cdaa914675b6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/d30c3a15-a30b-4ffa-9e2c-cdaa914675b6?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '5a8162a1-01f9-4f39-b041-b38105417e09',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T091355Z:5a8162a1-01f9-4f39-b041-b38105417e09',
  date: 'Wed, 27 Sep 2017 09:13:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"d0c01b4e-9192-4352-88c9-085e5ccd8378\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ad29cf8e-8828-45a4-8f1f-4cdd3a4ebf15\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"d0c01b4e-9192-4352-88c9-085e5ccd8378\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\",\r\n          \"applicationSecurityGroups\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.m50xwx35f3pepbhl4wigr0uanh.yx.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"m50xwx35f3pepbhl4wigr0uanh.yx.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2166',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd30c3a15-a30b-4ffa-9e2c-cdaa914675b6',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westcentralus/operations/d30c3a15-a30b-4ffa-9e2c-cdaa914675b6?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '5a8162a1-01f9-4f39-b041-b38105417e09',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T091355Z:5a8162a1-01f9-4f39-b041-b38105417e09',
  date: 'Wed, 27 Sep 2017 09:13:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"d0c01b4e-9192-4352-88c9-085e5ccd8378\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ad29cf8e-8828-45a4-8f1f-4cdd3a4ebf15\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"d0c01b4e-9192-4352-88c9-085e5ccd8378\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\",\r\n          \"applicationSecurityGroups\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.m50xwx35f3pepbhl4wigr0uanh.yx.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"m50xwx35f3pepbhl4wigr0uanh.yx.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2166',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d0c01b4e-9192-4352-88c9-085e5ccd8378"',
  'x-ms-request-id': 'a3f661af-48f3-4622-b58f-f48b2a61ca12',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '53446983-0e01-4092-a77a-823ffee4be86',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T091356Z:53446983-0e01-4092-a77a-823ffee4be86',
  date: 'Wed, 27 Sep 2017 09:13:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"d0c01b4e-9192-4352-88c9-085e5ccd8378\\\"\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ad29cf8e-8828-45a4-8f1f-4cdd3a4ebf15\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"d0c01b4e-9192-4352-88c9-085e5ccd8378\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\",\r\n          \"applicationSecurityGroups\": [\r\n            {\r\n              \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-nic/providers/Microsoft.Network/applicationSecurityGroups/applicationSecurityGroupName\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.m50xwx35f3pepbhl4wigr0uanh.yx.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"m50xwx35f3pepbhl4wigr0uanh.yx.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2166',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d0c01b4e-9192-4352-88c9-085e5ccd8378"',
  'x-ms-request-id': 'a3f661af-48f3-4622-b58f-f48b2a61ca12',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '53446983-0e01-4092-a77a-823ffee4be86',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T091356Z:53446983-0e01-4092-a77a-823ffee4be86',
  date: 'Wed, 27 Sep 2017 09:13:55 GMT',
  connection: 'close' });
 return result; }]];