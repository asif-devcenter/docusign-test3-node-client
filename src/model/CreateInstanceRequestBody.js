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
    define(['ApiClient', 'model/AssertionId', 'model/AuthenticationInstant', 'model/AuthenticationMethod', 'model/ClientUserId', 'model/ExpirationOffset', 'model/ReturnUrl', 'model/SecurityDomain', 'model/WebFormValues'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AssertionId'), require('./AuthenticationInstant'), require('./AuthenticationMethod'), require('./ClientUserId'), require('./ExpirationOffset'), require('./ReturnUrl'), require('./SecurityDomain'), require('./WebFormValues'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CreateInstanceRequestBody = factory(root.Docusign.ApiClient, root.Docusign.AssertionId, root.Docusign.AuthenticationInstant, root.Docusign.AuthenticationMethod, root.Docusign.ClientUserId, root.Docusign.ExpirationOffset, root.Docusign.ReturnUrl, root.Docusign.SecurityDomain, root.Docusign.WebFormValues);
  }
}(this, function(ApiClient, AssertionId, AuthenticationInstant, AuthenticationMethod, ClientUserId, ExpirationOffset, ReturnUrl, SecurityDomain, WebFormValues) {
  'use strict';


  /**
   * The CreateInstanceRequestBody model module.
   * @module model/CreateInstanceRequestBody
   */

  /**
   * Constructs a new <code>CreateInstanceRequestBody</code>.
   * Request body containing properties that will be used to create instance.
   * @alias module:model/CreateInstanceRequestBody
   * @class
   * @param clientUserId {module:model/ClientUserId} 
   */
  var exports = function(clientUserId) {
    var _this = this;

    _this['clientUserId'] = clientUserId;
  };

  /**
   * Constructs a <code>CreateInstanceRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateInstanceRequestBody} obj Optional instance to populate.
   * @return {module:model/CreateInstanceRequestBody} The populated <code>CreateInstanceRequestBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('formValues')) {
        obj['formValues'] = WebFormValues.constructFromObject(data['formValues']);
      }
      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ClientUserId.constructFromObject(data['clientUserId']);
      }
      if (data.hasOwnProperty('authenticationInstant')) {
        obj['authenticationInstant'] = AuthenticationInstant.constructFromObject(data['authenticationInstant']);
      }
      if (data.hasOwnProperty('authenticationMethod')) {
        obj['authenticationMethod'] = AuthenticationMethod.constructFromObject(data['authenticationMethod']);
      }
      if (data.hasOwnProperty('assertionId')) {
        obj['assertionId'] = AssertionId.constructFromObject(data['assertionId']);
      }
      if (data.hasOwnProperty('securityDomain')) {
        obj['securityDomain'] = SecurityDomain.constructFromObject(data['securityDomain']);
      }
      if (data.hasOwnProperty('returnUrl')) {
        obj['returnUrl'] = ReturnUrl.constructFromObject(data['returnUrl']);
      }
      if (data.hasOwnProperty('expirationOffset')) {
        obj['expirationOffset'] = ExpirationOffset.constructFromObject(data['expirationOffset']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/WebFormValues} formValues
   */
  exports.prototype['formValues'] = undefined;
  /**
   * @member {module:model/ClientUserId} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * @member {module:model/AuthenticationInstant} authenticationInstant
   */
  exports.prototype['authenticationInstant'] = undefined;
  /**
   * @member {module:model/AuthenticationMethod} authenticationMethod
   */
  exports.prototype['authenticationMethod'] = undefined;
  /**
   * @member {module:model/AssertionId} assertionId
   */
  exports.prototype['assertionId'] = undefined;
  /**
   * @member {module:model/SecurityDomain} securityDomain
   */
  exports.prototype['securityDomain'] = undefined;
  /**
   * @member {module:model/ReturnUrl} returnUrl
   */
  exports.prototype['returnUrl'] = undefined;
  /**
   * @member {module:model/ExpirationOffset} expirationOffset
   */
  exports.prototype['expirationOffset'] = undefined;
  /**
   * List of tags provided by the user with each request. This field is optional.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));


