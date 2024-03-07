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
    define(['ApiClient', 'model/AccountId', 'model/WebFormContent', 'model/WebFormId', 'model/WebFormMetadata', 'model/WebFormProperties', 'model/WebFormState', 'model/WebFormSummary', 'model/WebFormVersionId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountId'), require('./WebFormContent'), require('./WebFormId'), require('./WebFormMetadata'), require('./WebFormProperties'), require('./WebFormState'), require('./WebFormSummary'), require('./WebFormVersionId'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebForm = factory(root.Docusign.ApiClient, root.Docusign.AccountId, root.Docusign.WebFormContent, root.Docusign.WebFormId, root.Docusign.WebFormMetadata, root.Docusign.WebFormProperties, root.Docusign.WebFormState, root.Docusign.WebFormSummary, root.Docusign.WebFormVersionId);
  }
}(this, function(ApiClient, AccountId, WebFormContent, WebFormId, WebFormMetadata, WebFormProperties, WebFormState, WebFormSummary, WebFormVersionId) {
  'use strict';


  /**
   * The WebForm model module.
   * @module model/WebForm
   */

  /**
   * Constructs a new <code>WebForm</code>.
   * An object that fully describes an instance of a form
   * @alias module:model/WebForm
   * @class
   * @extends module:model/WebFormSummary
   */
  var exports = function() {
    var _this = this;    WebFormSummary.call(_this);


  };

  /**
   * Constructs a <code>WebForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebForm} obj Optional instance to populate.
   * @return {module:model/WebForm} The populated <code>WebForm</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      WebFormSummary.constructFromObject(data, obj);
      if (data.hasOwnProperty('versionId')) {
        obj['versionId'] = WebFormVersionId.constructFromObject(data['versionId']);
      }
      if (data.hasOwnProperty('formContent')) {
        obj['formContent'] = WebFormContent.constructFromObject(data['formContent']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(WebFormSummary.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/WebFormVersionId} versionId
   */
  exports.prototype['versionId'] = undefined;
  /**
   * @member {module:model/WebFormContent} formContent
   */
  exports.prototype['formContent'] = undefined;



  return exports;
}));


