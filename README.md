# docusign-test3

Docusign - JavaScript client for docusign-test3
The Web Forms API facilitates generating semantic HTML forms around everyday contracts. 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.1.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://developers.docusign.com/](https://developers.docusign.com/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install docusign-test3 --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your docusign-test3 from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('docusign-test3')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Docusign = require('docusign-test3');

var defaultClient = Docusign.ApiClient.instance;

// Configure OAuth2 access token for authorization: docusignAccessCode
var docusignAccessCode = defaultClient.authentications['docusignAccessCode'];
docusignAccessCode.accessToken = "YOUR ACCESS TOKEN"

var api = new Docusign.FormManagementApi()

var accountId = "accountId_example"; // {String} Account identifier in which the webform resides

var opts = { 
  'userFilter': "all", // {String} Filter which forms are returned
  'isStandalone': true, // {Boolean} Is the form a standalone form
  'isPublished': true, // {Boolean} Has the form been published
  'sortBy': "sortBy_example", // {String} Sort result set in mentioned sort property:order. Default is lastModifiedDateTime:desc. Default sort is descending if not mentioned.
  'search': "search_example", // {String} Search through form names
  'startPosition': "startPosition_example", // {String} Starting position for desired page of results.
  'count': "count_example" // {String} Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listForms(accountId, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://www.docusign.net/webforms/v1.1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Docusign.FormManagementApi* | [**listForms**](docs/FormManagementApi.md#listForms) | **GET** /accounts/{account_id}/forms | List Forms


## Documentation for Models

 - [Docusign.AccountId](docs/AccountId.md)
 - [Docusign.AssertionId](docs/AssertionId.md)
 - [Docusign.AuthenticationInstant](docs/AuthenticationInstant.md)
 - [Docusign.AuthenticationMethod](docs/AuthenticationMethod.md)
 - [Docusign.BrandId](docs/BrandId.md)
 - [Docusign.ClientUserId](docs/ClientUserId.md)
 - [Docusign.CreateInstanceRequestBody](docs/CreateInstanceRequestBody.md)
 - [Docusign.CreatedDateTime](docs/CreatedDateTime.md)
 - [Docusign.EnvelopeId](docs/EnvelopeId.md)
 - [Docusign.ExpirationDateTime](docs/ExpirationDateTime.md)
 - [Docusign.ExpirationOffset](docs/ExpirationOffset.md)
 - [Docusign.FormUrl](docs/FormUrl.md)
 - [Docusign.Guid](docs/Guid.md)
 - [Docusign.HttpError](docs/HttpError.md)
 - [Docusign.HttpSuccess](docs/HttpSuccess.md)
 - [Docusign.InstanceId](docs/InstanceId.md)
 - [Docusign.InstanceSource](docs/InstanceSource.md)
 - [Docusign.InstanceStatus](docs/InstanceStatus.md)
 - [Docusign.InstanceToken](docs/InstanceToken.md)
 - [Docusign.IsPrivateAccess](docs/IsPrivateAccess.md)
 - [Docusign.IsStandalone](docs/IsStandalone.md)
 - [Docusign.LastModifiedDateTime](docs/LastModifiedDateTime.md)
 - [Docusign.ReturnUrl](docs/ReturnUrl.md)
 - [Docusign.SecurityDomain](docs/SecurityDomain.md)
 - [Docusign.TemplateProperties](docs/TemplateProperties.md)
 - [Docusign.TokenExpirationDateTime](docs/TokenExpirationDateTime.md)
 - [Docusign.UserId](docs/UserId.md)
 - [Docusign.WebForm](docs/WebForm.md)
 - [Docusign.WebFormComponentType](docs/WebFormComponentType.md)
 - [Docusign.WebFormContent](docs/WebFormContent.md)
 - [Docusign.WebFormId](docs/WebFormId.md)
 - [Docusign.WebFormInstance](docs/WebFormInstance.md)
 - [Docusign.WebFormInstanceEnvelopes](docs/WebFormInstanceEnvelopes.md)
 - [Docusign.WebFormInstanceList](docs/WebFormInstanceList.md)
 - [Docusign.WebFormInstanceMetadata](docs/WebFormInstanceMetadata.md)
 - [Docusign.WebFormMetadata](docs/WebFormMetadata.md)
 - [Docusign.WebFormName](docs/WebFormName.md)
 - [Docusign.WebFormProperties](docs/WebFormProperties.md)
 - [Docusign.WebFormSource](docs/WebFormSource.md)
 - [Docusign.WebFormState](docs/WebFormState.md)
 - [Docusign.WebFormSummary](docs/WebFormSummary.md)
 - [Docusign.WebFormSummaryList](docs/WebFormSummaryList.md)
 - [Docusign.WebFormUserInfo](docs/WebFormUserInfo.md)
 - [Docusign.WebFormValues](docs/WebFormValues.md)
 - [Docusign.WebFormVersionId](docs/WebFormVersionId.md)


## Documentation for Authorization


### docusignAccessCode

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://account.docusign.com/oauth/auth
- **Scopes**: N/A

