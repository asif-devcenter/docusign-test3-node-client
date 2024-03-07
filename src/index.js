/**
 * Web Forms API version 1.1
 * The Web Forms API facilitates generating semantic HTML forms around everyday contracts. 
 *
 * OpenAPI spec version: 1.1.0
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Configuration', 'ApiClient', 'model/AccountId', 'model/AssertionId', 'model/AuthenticationInstant', 'model/AuthenticationMethod', 'model/BrandId', 'model/ClientUserId', 'model/CreateInstanceRequestBody', 'model/CreatedDateTime', 'model/EnvelopeId', 'model/ExpirationDateTime', 'model/ExpirationOffset', 'model/FormUrl', 'model/Guid', 'model/HttpError', 'model/HttpSuccess', 'model/InstanceId', 'model/InstanceSource', 'model/InstanceStatus', 'model/InstanceToken', 'model/IsPrivateAccess', 'model/IsStandalone', 'model/LastModifiedDateTime', 'model/ReturnUrl', 'model/SecurityDomain', 'model/TemplateProperties', 'model/TokenExpirationDateTime', 'model/UserId', 'model/WebForm', 'model/WebFormComponentType', 'model/WebFormContent', 'model/WebFormId', 'model/WebFormInstance', 'model/WebFormInstanceEnvelopes', 'model/WebFormInstanceList', 'model/WebFormInstanceMetadata', 'model/WebFormMetadata', 'model/WebFormName', 'model/WebFormProperties', 'model/WebFormSource', 'model/WebFormState', 'model/WebFormSummary', 'model/WebFormSummaryList', 'model/WebFormUserInfo', 'model/WebFormValues', 'model/WebFormVersionId', 'api/FormManagementApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./Configuration'), require('./ApiClient'), require('./model/AccountId'), require('./model/AssertionId'), require('./model/AuthenticationInstant'), require('./model/AuthenticationMethod'), require('./model/BrandId'), require('./model/ClientUserId'), require('./model/CreateInstanceRequestBody'), require('./model/CreatedDateTime'), require('./model/EnvelopeId'), require('./model/ExpirationDateTime'), require('./model/ExpirationOffset'), require('./model/FormUrl'), require('./model/Guid'), require('./model/HttpError'), require('./model/HttpSuccess'), require('./model/InstanceId'), require('./model/InstanceSource'), require('./model/InstanceStatus'), require('./model/InstanceToken'), require('./model/IsPrivateAccess'), require('./model/IsStandalone'), require('./model/LastModifiedDateTime'), require('./model/ReturnUrl'), require('./model/SecurityDomain'), require('./model/TemplateProperties'), require('./model/TokenExpirationDateTime'), require('./model/UserId'), require('./model/WebForm'), require('./model/WebFormComponentType'), require('./model/WebFormContent'), require('./model/WebFormId'), require('./model/WebFormInstance'), require('./model/WebFormInstanceEnvelopes'), require('./model/WebFormInstanceList'), require('./model/WebFormInstanceMetadata'), require('./model/WebFormMetadata'), require('./model/WebFormName'), require('./model/WebFormProperties'), require('./model/WebFormSource'), require('./model/WebFormState'), require('./model/WebFormSummary'), require('./model/WebFormSummaryList'), require('./model/WebFormUserInfo'), require('./model/WebFormValues'), require('./model/WebFormVersionId'), require('./api/FormManagementApi'));
  }
}(function(Configuration, ApiClient, AccountId, AssertionId, AuthenticationInstant, AuthenticationMethod, BrandId, ClientUserId, CreateInstanceRequestBody, CreatedDateTime, EnvelopeId, ExpirationDateTime, ExpirationOffset, FormUrl, Guid, HttpError, HttpSuccess, InstanceId, InstanceSource, InstanceStatus, InstanceToken, IsPrivateAccess, IsStandalone, LastModifiedDateTime, ReturnUrl, SecurityDomain, TemplateProperties, TokenExpirationDateTime, UserId, WebForm, WebFormComponentType, WebFormContent, WebFormId, WebFormInstance, WebFormInstanceEnvelopes, WebFormInstanceList, WebFormInstanceMetadata, WebFormMetadata, WebFormName, WebFormProperties, WebFormSource, WebFormState, WebFormSummary, WebFormSummaryList, WebFormUserInfo, WebFormValues, WebFormVersionId, FormManagementApi) {
  'use strict';

  /**
   * DocuSign Node.js API client..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Docusign = require('index'); // See note below*.
   * var xxxSvc = new Docusign.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Docusign.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Docusign.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Docusign.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   */
  var exports = {
	/**
	 * The configuration constructor.
	 * @property {module:Configuration}
	 */
	 Configuration: Configuration,
	/**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccountId model constructor.
     * @property {module:model/AccountId}
     */
    AccountId: AccountId,
    /**
     * The AssertionId model constructor.
     * @property {module:model/AssertionId}
     */
    AssertionId: AssertionId,
    /**
     * The AuthenticationInstant model constructor.
     * @property {module:model/AuthenticationInstant}
     */
    AuthenticationInstant: AuthenticationInstant,
    /**
     * The AuthenticationMethod model constructor.
     * @property {module:model/AuthenticationMethod}
     */
    AuthenticationMethod: AuthenticationMethod,
    /**
     * The BrandId model constructor.
     * @property {module:model/BrandId}
     */
    BrandId: BrandId,
    /**
     * The ClientUserId model constructor.
     * @property {module:model/ClientUserId}
     */
    ClientUserId: ClientUserId,
    /**
     * The CreateInstanceRequestBody model constructor.
     * @property {module:model/CreateInstanceRequestBody}
     */
    CreateInstanceRequestBody: CreateInstanceRequestBody,
    /**
     * The CreatedDateTime model constructor.
     * @property {module:model/CreatedDateTime}
     */
    CreatedDateTime: CreatedDateTime,
    /**
     * The EnvelopeId model constructor.
     * @property {module:model/EnvelopeId}
     */
    EnvelopeId: EnvelopeId,
    /**
     * The ExpirationDateTime model constructor.
     * @property {module:model/ExpirationDateTime}
     */
    ExpirationDateTime: ExpirationDateTime,
    /**
     * The ExpirationOffset model constructor.
     * @property {module:model/ExpirationOffset}
     */
    ExpirationOffset: ExpirationOffset,
    /**
     * The FormUrl model constructor.
     * @property {module:model/FormUrl}
     */
    FormUrl: FormUrl,
    /**
     * The Guid model constructor.
     * @property {module:model/Guid}
     */
    Guid: Guid,
    /**
     * The HttpError model constructor.
     * @property {module:model/HttpError}
     */
    HttpError: HttpError,
    /**
     * The HttpSuccess model constructor.
     * @property {module:model/HttpSuccess}
     */
    HttpSuccess: HttpSuccess,
    /**
     * The InstanceId model constructor.
     * @property {module:model/InstanceId}
     */
    InstanceId: InstanceId,
    /**
     * The InstanceSource model constructor.
     * @property {module:model/InstanceSource}
     */
    InstanceSource: InstanceSource,
    /**
     * The InstanceStatus model constructor.
     * @property {module:model/InstanceStatus}
     */
    InstanceStatus: InstanceStatus,
    /**
     * The InstanceToken model constructor.
     * @property {module:model/InstanceToken}
     */
    InstanceToken: InstanceToken,
    /**
     * The IsPrivateAccess model constructor.
     * @property {module:model/IsPrivateAccess}
     */
    IsPrivateAccess: IsPrivateAccess,
    /**
     * The IsStandalone model constructor.
     * @property {module:model/IsStandalone}
     */
    IsStandalone: IsStandalone,
    /**
     * The LastModifiedDateTime model constructor.
     * @property {module:model/LastModifiedDateTime}
     */
    LastModifiedDateTime: LastModifiedDateTime,
    /**
     * The ReturnUrl model constructor.
     * @property {module:model/ReturnUrl}
     */
    ReturnUrl: ReturnUrl,
    /**
     * The SecurityDomain model constructor.
     * @property {module:model/SecurityDomain}
     */
    SecurityDomain: SecurityDomain,
    /**
     * The TemplateProperties model constructor.
     * @property {module:model/TemplateProperties}
     */
    TemplateProperties: TemplateProperties,
    /**
     * The TokenExpirationDateTime model constructor.
     * @property {module:model/TokenExpirationDateTime}
     */
    TokenExpirationDateTime: TokenExpirationDateTime,
    /**
     * The UserId model constructor.
     * @property {module:model/UserId}
     */
    UserId: UserId,
    /**
     * The WebForm model constructor.
     * @property {module:model/WebForm}
     */
    WebForm: WebForm,
    /**
     * The WebFormComponentType model constructor.
     * @property {module:model/WebFormComponentType}
     */
    WebFormComponentType: WebFormComponentType,
    /**
     * The WebFormContent model constructor.
     * @property {module:model/WebFormContent}
     */
    WebFormContent: WebFormContent,
    /**
     * The WebFormId model constructor.
     * @property {module:model/WebFormId}
     */
    WebFormId: WebFormId,
    /**
     * The WebFormInstance model constructor.
     * @property {module:model/WebFormInstance}
     */
    WebFormInstance: WebFormInstance,
    /**
     * The WebFormInstanceEnvelopes model constructor.
     * @property {module:model/WebFormInstanceEnvelopes}
     */
    WebFormInstanceEnvelopes: WebFormInstanceEnvelopes,
    /**
     * The WebFormInstanceList model constructor.
     * @property {module:model/WebFormInstanceList}
     */
    WebFormInstanceList: WebFormInstanceList,
    /**
     * The WebFormInstanceMetadata model constructor.
     * @property {module:model/WebFormInstanceMetadata}
     */
    WebFormInstanceMetadata: WebFormInstanceMetadata,
    /**
     * The WebFormMetadata model constructor.
     * @property {module:model/WebFormMetadata}
     */
    WebFormMetadata: WebFormMetadata,
    /**
     * The WebFormName model constructor.
     * @property {module:model/WebFormName}
     */
    WebFormName: WebFormName,
    /**
     * The WebFormProperties model constructor.
     * @property {module:model/WebFormProperties}
     */
    WebFormProperties: WebFormProperties,
    /**
     * The WebFormSource model constructor.
     * @property {module:model/WebFormSource}
     */
    WebFormSource: WebFormSource,
    /**
     * The WebFormState model constructor.
     * @property {module:model/WebFormState}
     */
    WebFormState: WebFormState,
    /**
     * The WebFormSummary model constructor.
     * @property {module:model/WebFormSummary}
     */
    WebFormSummary: WebFormSummary,
    /**
     * The WebFormSummaryList model constructor.
     * @property {module:model/WebFormSummaryList}
     */
    WebFormSummaryList: WebFormSummaryList,
    /**
     * The WebFormUserInfo model constructor.
     * @property {module:model/WebFormUserInfo}
     */
    WebFormUserInfo: WebFormUserInfo,
    /**
     * The WebFormValues model constructor.
     * @property {module:model/WebFormValues}
     */
    WebFormValues: WebFormValues,
    /**
     * The WebFormVersionId model constructor.
     * @property {module:model/WebFormVersionId}
     */
    WebFormVersionId: WebFormVersionId,
    /**
     * The FormManagementApi service constructor.
     * @property {module:api/FormManagementApi}
     */
    FormManagementApi: FormManagementApi
  };

  return exports;
}));