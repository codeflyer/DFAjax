/**
 *
 * Result struct for forms
 * Encapsulate the messages for the Ajax comunication
 *
 * @module AjaxFormMessage
 *
 * @author Davide Fiorello <davide@codeflyer.com>
 */
var util = require('util');
var AjaxMessage = require('./AjaxMessage');

var AjaxFormMessage = function(id, details) {
  AjaxMessage.call(this, id, details);
  this.errors = {};
  this.errorCount = 0;

};
util.inherits(AjaxFormMessage, AjaxMessage);

/**
 * Get the struct to return
 * @returns {*}
 */
AjaxFormMessage.prototype.getReturnStruct = function() {
  var ret = AjaxFormMessage.super_.prototype.getReturnStruct.apply(this);
  ret.errors = this.errors;
  ret.errorCount = this.errorCount;
  return ret;
};

/**
 * Add an error in the list
 * @param {string} name The key of the error
 * @param {string} item Thr value of the error (error message)
 */
AjaxFormMessage.prototype.addError = function(name, item) {
  this.errorCount++;
  this.result = 1;
  if (!(name in this.errors)) {
    this.errors[name] = [];
  }
  this.errors[name].push(item);
  return this;
};

/**
 * Verify the presence of errors
 * @return {bool} (true if errors exists)
 */
AjaxFormMessage.prototype.hasError = function() {
  return this.errorCount > 0;
};

module.exports = AjaxFormMessage;
