// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers?api-version=2015-05-01-preview')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2008R2SP3-WS2008R2SP1\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2012SP2-WS2012\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP2-WS2012\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2012SP2-WS2012R2\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2012SP2-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2014-WS2012R2\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2014SP1-WS2012R2\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2014SP1-WS2012R2\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"SQL2016CTP2-WS2012R2\",\r\n    \"id\": \"/Subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016CTP2-WS2012R2\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1583',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '39b7715e-227b-48a3-bb15-50700bd0a190',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14957',
  'x-ms-correlation-request-id': 'd46d6500-5ede-4d6b-85ef-d7c992261f1f',
  'x-ms-routing-request-id': 'EASTUS:20150710T150236Z:d46d6500-5ede-4d6b-85ef-d7c992261f1f',
  date: 'Fri, 10 Jul 2015 15:02:35 GMT' });
 return result; }]];