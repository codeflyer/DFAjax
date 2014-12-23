var AjaxMessage = require('./models/AjaxMessage');
var logger = require('./logger');

(function() {
  /**
   * Sent an error message
   * @param {{}} res The response object
   * @param {{}} result The code of the error message
   * @param {{}} message The message text
   */
  function sendErrorMessage(res, result, message) {
    var ajaxMessage = new AjaxMessage();
    if (((typeof result.getTraceAsString) === 'function')) {
      ajaxMessage.sendErrorMessage(res, result.code, result.message);
    } else {
      ajaxMessage.sendErrorMessage(res, result, message);
    }
  }

  /**
   * Sent an error message
   * @param {{}} res The response object
   * @param {{}} err The error
   */
  function sendUncaughtExceptionErrorMessage(res, err) {
    var ajaxMessage = new AjaxMessage();
    try {
      if (((typeof err.getTraceAsString) === 'function')) {
        logger.error(err.getTraceAsString());
      } else {
        logger.error(err);
        logger.error(err.stack);
      }
    } catch (e) {
      logger.error(e);
      logger.error(err);
    }
    ajaxMessage.sendErrorMessage(res, 500, 'UncaughtException');
  }

  /**
   * Sent a value directly. Send a value imply a success result
   * @param {{}} res The response object
   * @param {{}} value The value to sent
   */
  function sendValue(res, value) {
    var message = new AjaxMessage();
    message.sendValue(res, value);
  }

  module.exports = {
    sendErrorMessage: sendErrorMessage,
    sendValue: sendValue,
    sendUncaughtExceptionErrorMessage: sendUncaughtExceptionErrorMessage
  };
})();
