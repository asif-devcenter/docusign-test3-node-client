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
    define(['ApiClient', 'model/IsPrivateAccess', 'model/WebFormName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IsPrivateAccess'), require('./WebFormName'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormProperties = factory(root.Docusign.ApiClient, root.Docusign.IsPrivateAccess, root.Docusign.WebFormName);
  }
}(this, function(ApiClient, IsPrivateAccess, WebFormName) {
  'use strict';


  /**
   * The WebFormProperties model module.
   * @module model/WebFormProperties
   */

  /**
   * Constructs a new <code>WebFormProperties</code>.
   * General information about the web form that is consistent across versions
   * @alias module:model/WebFormProperties
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WebFormProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormProperties} obj Optional instance to populate.
   * @return {module:model/WebFormProperties} The populated <code>WebFormProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = WebFormName.constructFromObject(data['name']);
      }
      if (data.hasOwnProperty('isPrivateAccess')) {
        obj['isPrivateAccess'] = IsPrivateAccess.constructFromObject(data['isPrivateAccess']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/WebFormName} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/IsPrivateAccess} isPrivateAccess
   */
  exports.prototype['isPrivateAccess'] = undefined;



  return exports;
}));


