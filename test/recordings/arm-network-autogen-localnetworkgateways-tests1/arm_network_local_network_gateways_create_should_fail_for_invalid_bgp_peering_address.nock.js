// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3615ac40-786e-4a3c-bce2-0a05832c58a8',
  'x-ms-correlation-request-id': '3615ac40-786e-4a3c-bce2-0a05832c58a8',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T105040Z:3615ac40-786e-4a3c-bce2-0a05832c58a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 10:50:40 GMT',
  connection: 'close',
  'content-length': '195' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3615ac40-786e-4a3c-bce2-0a05832c58a8',
  'x-ms-correlation-request-id': '3615ac40-786e-4a3c-bce2-0a05832c58a8',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T105040Z:3615ac40-786e-4a3c-bce2-0a05832c58a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 10:50:40 GMT',
  connection: 'close',
  'content-length': '195' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"invalidBgpPeeringAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName\",\r\n  \"etag\": \"W/\\\"9a61f3a1-8b2b-48a0-acf0-d1b4a6dffbb0\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"a2dc01b1-2df6-4e00-bd1c-a5e3d00e2c53\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": []\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.12\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 1,\r\n      \"bgpPeeringAddress\": \"11.0.0.257\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '708',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a8a1d212-db57-45be-a8c0-2139d48f2f45',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/a8a1d212-db57-45be-a8c0-2139d48f2f45?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7bf2317b-43ce-4d0c-9a09-8c1731ff9252',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T105043Z:7bf2317b-43ce-4d0c-9a09-8c1731ff9252',
  date: 'Wed, 07 Dec 2016 10:50:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName?api-version=2016-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"invalidBgpPeeringAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName\",\r\n  \"etag\": \"W/\\\"9a61f3a1-8b2b-48a0-acf0-d1b4a6dffbb0\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"a2dc01b1-2df6-4e00-bd1c-a5e3d00e2c53\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": []\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.12\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 1,\r\n      \"bgpPeeringAddress\": \"11.0.0.257\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '708',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a8a1d212-db57-45be-a8c0-2139d48f2f45',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/a8a1d212-db57-45be-a8c0-2139d48f2f45?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '7bf2317b-43ce-4d0c-9a09-8c1731ff9252',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T105043Z:7bf2317b-43ce-4d0c-9a09-8c1731ff9252',
  date: 'Wed, 07 Dec 2016 10:50:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/a8a1d212-db57-45be-a8c0-2139d48f2f45?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Failed\",\r\n  \"error\": {\r\n    \"code\": \"InternalServerError\",\r\n    \"message\": \" InternalError - BadRequest: InvalidIPAddress - The specified BGP peer IP address '11.0.0.257' is not valid.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '229',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '383f466a-02f8-4e82-9945-f0b8e9511786',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'b9750686-35f5-45af-a32f-dc25373210cb',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T105114Z:b9750686-35f5-45af-a32f-dc25373210cb',
  date: 'Wed, 07 Dec 2016 10:51:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/a8a1d212-db57-45be-a8c0-2139d48f2f45?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Failed\",\r\n  \"error\": {\r\n    \"code\": \"InternalServerError\",\r\n    \"message\": \" InternalError - BadRequest: InvalidIPAddress - The specified BGP peer IP address '11.0.0.257' is not valid.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '229',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '383f466a-02f8-4e82-9945-f0b8e9511786',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'b9750686-35f5-45af-a32f-dc25373210cb',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T105114Z:b9750686-35f5-45af-a32f-dc25373210cb',
  date: 'Wed, 07 Dec 2016 10:51:14 GMT',
  connection: 'close' });
 return result; }]];