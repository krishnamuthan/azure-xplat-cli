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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus2';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3a52bf83-06c0-48b0-80da-2fdf30cd3619',
  'x-ms-correlation-request-id': '3a52bf83-06c0-48b0-80da-2fdf30cd3619',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122351Z:3a52bf83-06c0-48b0-80da-2fdf30cd3619',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Sep 2017 12:23:50 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3a52bf83-06c0-48b0-80da-2fdf30cd3619',
  'x-ms-correlation-request-id': '3a52bf83-06c0-48b0-80da-2fdf30cd3619',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122351Z:3a52bf83-06c0-48b0-80da-2fdf30cd3619',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Sep 2017 12:23:50 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"c950f888-bced-48cb-8926-3a64327fdb23\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"zones\": [\r\n    \"1\"\r\n  ],\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"548e8801-8e5f-4068-8886-84f81ef6a8ee\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.eastus2.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '769',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'bf44670f-f443-42a7-ba41-0c948cd60c3e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/bf44670f-f443-42a7-ba41-0c948cd60c3e?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '9f90e81c-b170-407d-a190-df07c494ad8d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122355Z:9f90e81c-b170-407d-a190-df07c494ad8d',
  date: 'Mon, 18 Sep 2017 12:23:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"c950f888-bced-48cb-8926-3a64327fdb23\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"zones\": [\r\n    \"1\"\r\n  ],\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"548e8801-8e5f-4068-8886-84f81ef6a8ee\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.eastus2.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '769',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'bf44670f-f443-42a7-ba41-0c948cd60c3e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/bf44670f-f443-42a7-ba41-0c948cd60c3e?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '9f90e81c-b170-407d-a190-df07c494ad8d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122355Z:9f90e81c-b170-407d-a190-df07c494ad8d',
  date: 'Mon, 18 Sep 2017 12:23:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/bf44670f-f443-42a7-ba41-0c948cd60c3e?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f616d1f6-c6bc-463e-ac47-2fe4df462cff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'db5f3f8b-ca48-4145-a4a2-37c629e20529',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122426Z:db5f3f8b-ca48-4145-a4a2-37c629e20529',
  date: 'Mon, 18 Sep 2017 12:24:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/eastus2/operations/bf44670f-f443-42a7-ba41-0c948cd60c3e?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f616d1f6-c6bc-463e-ac47-2fe4df462cff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'db5f3f8b-ca48-4145-a4a2-37c629e20529',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122426Z:db5f3f8b-ca48-4145-a4a2-37c629e20529',
  date: 'Mon, 18 Sep 2017 12:24:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"2932f960-af06-44f8-8f64-d72175e79597\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"zones\": [\r\n    \"1\"\r\n  ],\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"548e8801-8e5f-4068-8886-84f81ef6a8ee\",\r\n    \"ipAddress\": \"13.68.100.36\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.eastus2.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '804',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2932f960-af06-44f8-8f64-d72175e79597"',
  'x-ms-request-id': '49e7517e-f06c-48f1-8a32-c195f07e915b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '04a8d312-67e0-4f56-8d10-aea6a761ea8f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122426Z:04a8d312-67e0-4f56-8d10-aea6a761ea8f',
  date: 'Mon, 18 Sep 2017 12:24:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"2932f960-af06-44f8-8f64-d72175e79597\\\"\",\r\n  \"location\": \"eastus2\",\r\n  \"zones\": [\r\n    \"1\"\r\n  ],\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"548e8801-8e5f-4068-8886-84f81ef6a8ee\",\r\n    \"ipAddress\": \"13.68.100.36\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.eastus2.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '804',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2932f960-af06-44f8-8f64-d72175e79597"',
  'x-ms-request-id': '49e7517e-f06c-48f1-8a32-c195f07e915b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '04a8d312-67e0-4f56-8d10-aea6a761ea8f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170918T122426Z:04a8d312-67e0-4f56-8d10-aea6a761ea8f',
  date: 'Mon, 18 Sep 2017 12:24:26 GMT',
  connection: 'close' });
 return result; }]];