// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Authorization/providerOperations/Microsoft.Authorization?api-version=2015-07-01&$expand=resourceTypes')
  .reply(200, "{\"displayName\":\"Microsoft authorization\",\"operations\":[],\"resourceTypes\":[{\"name\":\"classicAdministrators\",\"displayName\":\"Classic subscription administrator\",\"operations\":[{\"name\":\"Microsoft.Authorization/classicAdministrators/read\",\"displayName\":\"Get administrator\",\"description\":\"Reads the administrators for the subscription.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.Authorization/classicAdministrators/write\",\"displayName\":\"Set administrator\",\"description\":\"Add or modify administrator to a subscription.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.Authorization/classicAdministrators/delete\",\"displayName\":\"Delete administrator\",\"description\":\"Removes the administrator from the subscription.\",\"origin\":null,\"properties\":null}]},{\"name\":\"locks\",\"displayName\":\"Management lock\",\"operations\":[{\"name\":\"Microsoft.Authorization/locks/read\",\"displayName\":\"Get management locks\",\"description\":\"Gets locks at the specified scope.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.Authorization/locks/write\",\"displayName\":\"Add management locks\",\"description\":\"Add locks at the specified scope.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.Authorization/locks/delete\",\"displayName\":\"Delete management locks\",\"description\":\"Delete locks at the specified scope.\",\"origin\":null,\"properties\":null}]},{\"name\":\"permissions\",\"displayName\":\"Permission\",\"operations\":[{\"name\":\"Microsoft.Authorization/permissions/read\",\"displayName\":\"List permissions\",\"description\":\"Lists all the permissions the caller has at a given scope.\",\"origin\":null,\"properties\":null}]},{\"name\":\"roleDefinitions\",\"displayName\":\"Role definition\",\"operations\":[{\"name\":\"Microsoft.Authorization/roleDefinitions/read\",\"displayName\":\"Get role definition\",\"description\":\"Get information about a role definition.\",\"origin\":null,\"properties\":null}]},{\"name\":\"roleAssignments\",\"displayName\":\"Role assignment\",\"operations\":[{\"name\":\"Microsoft.Authorization/roleAssignments/read\",\"displayName\":\"Get role assignment\",\"description\":\"Get information about a role assignment.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.Authorization/roleAssignments/write\",\"displayName\":\"Create role assignment\",\"description\":\"Create a role assignment at the specified scope.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.Authorization/roleAssignments/delete\",\"displayName\":\"Delete role assignment\",\"description\":\"Delete a role assignment at the specified scope.\",\"origin\":null,\"properties\":null}]}],\"id\":\"/providers/Microsoft.Authorization/providerOperations/Microsoft.Authorization\",\"type\":\"Microsoft.Authorization/providerOperations\",\"name\":\"Microsoft.Authorization\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2648',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b20f9166-4e14-443f-bcd0-20193e86d827',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14998',
  'x-ms-correlation-request-id': 'c30db56c-49cf-456b-80ae-764e08d4c7b8',
  'x-ms-routing-request-id': 'WESTUS:20151021T061021Z:c30db56c-49cf-456b-80ae-764e08d4c7b8',
  date: 'Wed, 21 Oct 2015 06:10:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Authorization/providerOperations/Microsoft.Authorization?api-version=2015-07-01&$expand=resourceTypes')
  .reply(200, "{\"displayName\":\"Microsoft authorization\",\"operations\":[],\"resourceTypes\":[{\"name\":\"classicAdministrators\",\"displayName\":\"Classic subscription administrator\",\"operations\":[{\"name\":\"Microsoft.Authorization/classicAdministrators/read\",\"displayName\":\"Get administrator\",\"description\":\"Reads the administrators for the subscription.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.Authorization/classicAdministrators/write\",\"displayName\":\"Set administrator\",\"description\":\"Add or modify administrator to a subscription.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.Authorization/classicAdministrators/delete\",\"displayName\":\"Delete administrator\",\"description\":\"Removes the administrator from the subscription.\",\"origin\":null,\"properties\":null}]},{\"name\":\"locks\",\"displayName\":\"Management lock\",\"operations\":[{\"name\":\"Microsoft.Authorization/locks/read\",\"displayName\":\"Get management locks\",\"description\":\"Gets locks at the specified scope.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.Authorization/locks/write\",\"displayName\":\"Add management locks\",\"description\":\"Add locks at the specified scope.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.Authorization/locks/delete\",\"displayName\":\"Delete management locks\",\"description\":\"Delete locks at the specified scope.\",\"origin\":null,\"properties\":null}]},{\"name\":\"permissions\",\"displayName\":\"Permission\",\"operations\":[{\"name\":\"Microsoft.Authorization/permissions/read\",\"displayName\":\"List permissions\",\"description\":\"Lists all the permissions the caller has at a given scope.\",\"origin\":null,\"properties\":null}]},{\"name\":\"roleDefinitions\",\"displayName\":\"Role definition\",\"operations\":[{\"name\":\"Microsoft.Authorization/roleDefinitions/read\",\"displayName\":\"Get role definition\",\"description\":\"Get information about a role definition.\",\"origin\":null,\"properties\":null}]},{\"name\":\"roleAssignments\",\"displayName\":\"Role assignment\",\"operations\":[{\"name\":\"Microsoft.Authorization/roleAssignments/read\",\"displayName\":\"Get role assignment\",\"description\":\"Get information about a role assignment.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.Authorization/roleAssignments/write\",\"displayName\":\"Create role assignment\",\"description\":\"Create a role assignment at the specified scope.\",\"origin\":null,\"properties\":null},{\"name\":\"Microsoft.Authorization/roleAssignments/delete\",\"displayName\":\"Delete role assignment\",\"description\":\"Delete a role assignment at the specified scope.\",\"origin\":null,\"properties\":null}]}],\"id\":\"/providers/Microsoft.Authorization/providerOperations/Microsoft.Authorization\",\"type\":\"Microsoft.Authorization/providerOperations\",\"name\":\"Microsoft.Authorization\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2648',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b20f9166-4e14-443f-bcd0-20193e86d827',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-reads': '14998',
  'x-ms-correlation-request-id': 'c30db56c-49cf-456b-80ae-764e08d4c7b8',
  'x-ms-routing-request-id': 'WESTUS:20151021T061021Z:c30db56c-49cf-456b-80ae-764e08d4c7b8',
  date: 'Wed, 21 Oct 2015 06:10:21 GMT',
  connection: 'close' });
 return result; }]];