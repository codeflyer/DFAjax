module.exports = function(currentPage, totalRecord, resultsPerPage) {
  resultsPerPage = parseInt(resultsPerPage);
  currentPage = parseInt(currentPage);

  if (!resultsPerPage || isNaN(resultsPerPage)) {
    resultsPerPage = 10;
  } else if (resultsPerPage > 100) {
    resultsPerPage = 100;
  }
  if (!currentPage || isNaN(currentPage) || currentPage < 1) {
    currentPage = 1;
  }
  var limit = resultsPerPage;
  var skip = 0;
  var totalPage = 0;
  if (totalRecord > 0) {
    skip = (currentPage - 1) * limit;

    totalPage = (
        totalRecord % resultsPerPage === 0 ?
        totalRecord / resultsPerPage :
        parseInt(totalRecord / resultsPerPage) + 1
    );

    if (currentPage > totalPage) {
      currentPage = totalPage;
    }
  }

  return {
    skip: skip,
    limit: limit,
    totalPages: totalPage,
    currentPage: currentPage,
    resultsPerPage: resultsPerPage,
    totalRecord: totalRecord
  };
};
