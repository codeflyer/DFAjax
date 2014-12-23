/**
 *
 * Module for the management of the Ajax messaging system
 * Encapsulate the messages for the Ajax comunication
 *
 * @module AjaxFormMessage
 *
 * @author Davide Fiorello <davide@codeflyer.com>
 */
var AjaxMessage = require('./models/AjaxMessage');
var AjaxFormMessage = require('./models/AjaxFormMessage');
var AjaxDataTable = require('./models/AjaxDataTable');
var AjaxList = require('./models/AjaxList');
var CalcFilter = require('./models/CalcFilter');
var constants = require('./constants');
var statics = require('./statics');
var middlewarePaginator = require('./middleware/paginator');
var logger = require('./logger');

(function() {

  module.exports = {
    AjaxMessage: AjaxMessage,
    AjaxFormMessage: AjaxFormMessage,
    AjaxDataTable: AjaxDataTable,
    AjaxList: AjaxList,
    CalcFilter: CalcFilter,
    sendErrorMessage: statics.sendErrorMessage,
    sendUncaughtExceptionErrorMessage:
        statics.sendUncaughtExceptionErrorMessage,
    sendValue: statics.sendValue,
    constants: constants,
    middleware: {
      'paginator': middlewarePaginator
    },
    setLogger : logger.setLogger
  };
})();
