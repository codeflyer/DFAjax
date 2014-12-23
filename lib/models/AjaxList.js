/**
 *
 * Result struct for list
 * Encapsulate the messages for the Ajax comunication
 *
 * @module AjaxList
 *
 * @author Davide Fiorello <davide@codeflyer.com>
 */
var util = require('util');
var AjaxMessage = require('./AjaxMessage');

var AjaxList = function(id, details) {
  AjaxMessage.call(this, id, details);

  /**
   * The items returned
   * @type {Array}
   */
  this.items = [];
};
util.inherits(AjaxList, AjaxMessage);

/**
 * Add an item to the list
 * @param {Object} item
 */
AjaxList.prototype.addItem = function(item) {
  this.items.push(item);
  return this;
};

/**
 * Get the struct to return
 * @returns {*}
 */
AjaxList.prototype.getReturnStruct = function() {
  var returnStruct = AjaxList.super_.prototype.getReturnStruct.apply(this);
  returnStruct.items = this.items;
  return returnStruct;
};

module.exports = AjaxList;
