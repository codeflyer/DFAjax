var ajaxMessageStatics = require('../statics');

module.exports = function() {
  return function(req, res, next) {
    try {
      var fields = req.body;

      if (!(fields.filters !== null && typeof fields.filters === 'object')) {
        return ajaxMessageStatics.sendErrorMessage(res, 1001,
            'Inconsistent data [filter not set]');
      }

      var orderBy = null;
      if (fields.orderBy) {
        console.log('Paginator order by not implemented');
      }
      var paginator = {
        filters: fields.filters,
        currentPage: fields.page,
        resultsPerPage: fields.resultsPerPage,
        orderBy: orderBy
      };

      if (req.dfcore == null) {
        req.dfcore = {};
      }
      req.dfcore.paginator = paginator;
    } catch (err) {
      console.log('Error');
      console.log(err.stack);
      if (err.code === 404) {
        return ajaxMessageStatics.sendErrorMessage(res, 404, 'Role not exists');
      }
      return ajaxMessageStatics.sendErrorMessage(res, 422, 'Inconsistent data');
    }
    next();
  };
}();
