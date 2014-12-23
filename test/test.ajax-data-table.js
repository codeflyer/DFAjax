require('should');
var AjaxDataTable = require('./../lib/models/AjaxDataTable');
describe('ajax-message: AjaxDataTable', function() {
  it('Constructor', function(done) {
    var ajaxDataTable = new AjaxDataTable();
    ajaxDataTable.should.have.property('result', 0);
    ajaxDataTable.should.have.property('message', '');
    ajaxDataTable.should.have.property('value', {});
    ajaxDataTable.should.have.property('totalRecord', 0);
    ajaxDataTable.should.have.property('currentPage', 1);
    ajaxDataTable.should.have.property('resultsPerPage', 10);
    ajaxDataTable.should.have.property('totalPages', 0);
    ajaxDataTable.should.have.property('items', []);
    done();
  });

  it('Setter (totalRecord)', function(done) {
    var ajaxDataTable = new AjaxDataTable();
    ajaxDataTable.setTotalRecord(10);
    ajaxDataTable.should.have.property('result', 0);
    ajaxDataTable.should.have.property('message', '');
    ajaxDataTable.should.have.property('value', {});
    ajaxDataTable.should.have.property('totalRecord', 10);
    done();
  });

  it('Setter (currentPage)', function(done) {
    var ajaxDataTable = new AjaxDataTable();
    ajaxDataTable.setCurrentPage(10);
    ajaxDataTable.should.have.property('result', 0);
    ajaxDataTable.should.have.property('message', '');
    ajaxDataTable.should.have.property('value', {});
    ajaxDataTable.should.have.property('currentPage', 10);
    done();
  });

  it('Setter (resultsPerPage)', function(done) {
    var ajaxDataTable = new AjaxDataTable();
    ajaxDataTable.setResultsPerPage(10);
    ajaxDataTable.should.have.property('result', 0);
    ajaxDataTable.should.have.property('message', '');
    ajaxDataTable.should.have.property('value', {});
    ajaxDataTable.should.have.property('resultsPerPage', 10);
    done();
  });

  it('Setter (totalPages)', function(done) {
    var ajaxDataTable = new AjaxDataTable();
    ajaxDataTable.setTotalPages(10);
    ajaxDataTable.should.have.property('result', 0);
    ajaxDataTable.should.have.property('message', '');
    ajaxDataTable.should.have.property('value', {});
    ajaxDataTable.should.have.property('totalPages', 10);
    done();
  });

  it('Init', function(done) {
    var ajaxDataTable = new AjaxDataTable();
    ajaxDataTable.init({
      totalRecord: 20,
      currentPage: 2,
      resultsPerPage: 8,
      totalPages: 2
    });

    ajaxDataTable.should.have.property('result', 0);
    ajaxDataTable.should.have.property('message', '');
    ajaxDataTable.should.have.property('value', {});
    ajaxDataTable.should.have.property('totalRecord', 20);
    ajaxDataTable.should.have.property('currentPage', 2);
    ajaxDataTable.should.have.property('resultsPerPage', 8);
    ajaxDataTable.should.have.property('totalPages', 2);
    done();
  });

  it('get return struct empty', function(done) {
    var ajaxDataTable = new AjaxDataTable();
    var struct = ajaxDataTable.getReturnStruct();

    struct.should.eql({
          code: 0,
          success: true,
          result: 0,
          message: '',
          value: {},
          items: [],
          totalRecord: 0,
          currentPage: 1,
          resultsPerPage: 10,
          totalPages: 0
        }
    );
    done();
  });

  it('get return struct NOT empty', function(done) {
    var ajaxDataTable = new AjaxDataTable();
    ajaxDataTable.init({
      totalRecord: 20,
      currentPage: 2,
      resultsPerPage: 8,
      totalPages: 2
    });
    var struct = ajaxDataTable.getReturnStruct();

    struct.should.eql({
          code: 0,
          success: true,
          result: 0,
          message: '',
          value: {},
          items: [],
          totalRecord: 20,
          currentPage: 2,
          resultsPerPage: 8,
          totalPages: 2
        }
    );
    done();
  });
});
