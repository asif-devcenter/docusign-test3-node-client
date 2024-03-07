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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccountId', 'model/ClientUserId', 'model/FormUrl', 'model/InstanceId', 'model/InstanceStatus', 'model/InstanceToken', 'model/TokenExpirationDateTime', 'model/WebFormId', 'model/WebFormInstanceEnvelopes', 'model/WebFormInstanceMetadata', 'model/WebFormValues'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./ClientUserId'), require('./FormUrl'), require('./InstanceId'), require('./InstanceStatus'), require('./InstanceToken'), require('./TokenExpirationDateTime'), require('./WebFormId'), require('./WebFormInstanceEnvelopes'), require('./WebFormInstanceMetadata'), require('./WebFormValues'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormInstance = factory(root.Docusign.ApiClient, root.Docusign.AccountId, root.Docusign.ClientUserId, root.Docusign.FormUrl, root.Docusign.InstanceId, root.Docusign.InstanceStatus, root.Docusign.InstanceToken, root.Docusign.TokenExpirationDateTime, root.Docusign.WebFormId, root.Docusign.WebFormInstanceEnvelopes, root.Docusign.WebFormInstanceMetadata, root.Docusign.WebFormValues);
  }
}(this, function(ApiClient, AccountId, ClientUserId, FormUrl, InstanceId, InstanceStatus, InstanceToken, TokenExpirationDateTime, WebFormId, WebFormInstanceEnvelopes, WebFormInstanceMetadata, WebFormValues) {
  'use strict';


  /**
   * The WebFormInstance model module.
   * @module model/WebFormInstance
   */

  /**
   * Constructs a new <code>WebFormInstance</code>.
   * An object that contains the Web Form Instance required to render it  and its metadata such as created by, created time
   * @alias module:model/WebFormInstance
   * @class
   * @param id {module:model/InstanceId} 
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>WebFormInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormInstance} obj Optional instance to populate.
   * @return {module:model/WebFormInstance} The populated <code>WebFormInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('formUrl')) {
        obj['formUrl'] = FormUrl.constructFromObject(data['formUrl']);
      }
      if (data.hasOwnProperty('instanceToken')) {
        obj['instanceToken'] = InstanceToken.constructFromObject(data['instanceToken']);
      }
      if (data.hasOwnProperty('tokenExpirationDateTime')) {
        obj['tokenExpirationDateTime'] = TokenExpirationDateTime.constructFromObject(data['tokenExpirationDateTime']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = InstanceId.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('formId')) {
        obj['formId'] = WebFormId.constructFromObject(data['formId']);
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = AccountId.constructFromObject(data['accountId']);
      }
      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ClientUserId.constructFromObject(data['clientUserId']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = InstanceStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('envelopes')) {
        obj['envelopes'] = ApiClient.convertToType(data['envelopes'], [WebFormInstanceEnvelopes]);
      }
      if (data.hasOwnProperty('instanceMetadata')) {
        obj['instanceMetadata'] = WebFormInstanceMetadata.constructFromObject(data['instanceMetadata']);
      }
      if (data.hasOwnProperty('formValues')) {
        obj['formValues'] = WebFormValues.constructFromObject(data['formValues']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FormUrl} formUrl
   */
  exports.prototype['formUrl'] = undefined;
  /**
   * @member {module:model/InstanceToken} instanceToken
   */
  exports.prototype['instanceToken'] = undefined;
  /**
   * @member {module:model/TokenExpirationDateTime} tokenExpirationDateTime
   */
  exports.prototype['tokenExpirationDateTime'] = undefined;
  /**
   * @member {module:model/InstanceId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Web form from which the instance is created
   * @member {module:model/WebFormId} formId
   */
  exports.prototype['formId'] = undefined;
  /**
   * @member {module:model/AccountId} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * @member {module:model/ClientUserId} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * List of tags provided by the user with each request. This field is optional.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {module:model/InstanceStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The associated envelope that is created when the instance is submitted
   * @member {Array.<module:model/WebFormInstanceEnvelopes>} envelopes
   */
  exports.prototype['envelopes'] = undefined;
  /**
   * @member {module:model/WebFormInstanceMetadata} instanceMetadata
   */
  exports.prototype['instanceMetadata'] = undefined;
  /**
   * @member {module:model/WebFormValues} formValues
   */
  exports.prototype['formValues'] = undefined;



  return exports;
}));


