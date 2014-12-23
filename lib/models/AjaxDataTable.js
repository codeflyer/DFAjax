/**
 *
 * Result struct for datatable
 * Encapsulate the messages for the Ajax comunication
 *
 * @module AjaxDataTable
 *
 * @author Davide Fiorello <davide@codeflyer.com>
 */
var util = require('util');
var AjaxList = require('./AjaxList');

var AjaxDataTable = function(id, details) {
  AjaxList.call(this, id, details);

  /**
   * The total number of record found in search
   * @type {number}
   */
  this.totalRecord = 0;

  /**
   * The page currently visualized
   * @type {number}
   */
  this.currentPage = 1;

  /**
   * The number of record per page
   * @type {number}
   */
  this.resultsPerPage = 10;

  /**
   * The number of pages
   * @type {number}
   */
  this.totalPages = 0;
};
util.inherits(AjaxDataTable, AjaxList);

/**
 * Set the total record
 * @param {number} totalRecord
 */
AjaxDataTable.prototype.setTotalRecord = function(totalRecord) {
  this.totalRecord = totalRecord;
  return this;
};

/**
 * Set the current page
 * @param {number} currentPage
 */
AjaxDataTable.prototype.setCurrentPage = function(currentPage) {
  this.currentPage = currentPage;
  return this;
};

/**
 * Set the results per page
 * @param {number} resultsPerPage
 */
AjaxDataTable.prototype.setResultsPerPage = function(resultsPerPage) {
  this.resultsPerPage = resultsPerPage;
  return this;
};

/**
 * Set total pages
 * @param {number} totalPages
 */
AjaxDataTable.prototype.setTotalPages = function(totalPages) {
  this.totalPages = totalPages;
  return this;
};

/**
 *
 * @param {{}} paginator
 */
AjaxDataTable.prototype.init = function(paginator) {
  this.totalRecord = paginator.totalRecord;
  this.currentPage = paginator.currentPage;
  this.resultsPerPage = paginator.resultsPerPage;
  this.totalPages = paginator.totalPages;
  return this;
};

/**
 * Get the struct to return
 * @returns {*}
 */
AjaxDataTable.prototype.getReturnStruct = function() {
  var returnStruct = AjaxDataTable.super_.prototype.getReturnStruct.apply(this);
  returnStruct.totalRecord = this.totalRecord;
  returnStruct.currentPage = this.currentPage;
  returnStruct.resultsPerPage = this.resultsPerPage;
  returnStruct.totalPages = this.totalPages;
  return returnStruct;
};

module.exports = AjaxDataTable;
