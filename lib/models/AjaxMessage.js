/**
 *
 * Module for the management of the Ajax messaging system
 * Encapsulate the messages for the Ajax comunication
 *
 * @module AjaxMessage
 *
 * @author Davide Fiorello <davide@codeflyer.com>
 */

var logger = require('./../logger');

var AjaxMessage = function AjaxMessage() {
  this.result = 0;
  this.message = '';
  this.value = {};
};

/**
 * Set the result of message
 * @param {number} result The code of the message
 */
AjaxMessage.prototype.setResult = function(result) {
  this.result = result;
  return this;
};

/**
 * Set the message
 * @param {string} message The code of the error message
 */
AjaxMessage.prototype.setMessage = function(message) {
  this.message = message;
  return this;
};

/**
 * Set the value
 * @param {{}} value The value of the message
 */
AjaxMessage.prototype.setValue = function(value) {
  this.value = value;
  return this;
};

/**
 * Sent an error message
 * @param {{}} res The response object
 * @param {number} result The code of the error message
 * @param {string} message The message text
 */
AjaxMessage.prototype.sendErrorMessage = function(res, result, message) {
  this.result = result;
  this.message = message;
  res.status(result);
  this.send(res);
};

/**
 * Sent a value directly. Send a value imply a success result
 * @param {{}} res The response object
 * @param {{}} value The value to sent
 */
AjaxMessage.prototype.sendValue = function(res, value) {
  this.value = value;
  res.status(200);
  this.send(res);
};

/**
 * Sent the full message
 * @param {{}}  res The response object
 */
AjaxMessage.prototype.send = function(res) {
  logger.trace(this.getReturnStruct());
  res.json(this.getReturnStruct());
};

/**
 * Get the struct to return
 * @returns {*}
 */
AjaxMessage.prototype.getReturnStruct = function() {
  var success = true;
  if (this.result > 0) {
    success = false;
  }
  return {
    code: this.result,
    success: success,
    result: this.result,
    message: this.message,
    value: this.value
  };
};

module.exports = AjaxMessage;
