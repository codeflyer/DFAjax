require('should');
var AjaxList = require('./../lib/models/AjaxList');
describe('ajax-message: AjaxList', function() {
  it('Constructor', function(done) {
    var ajaxMessage = new AjaxList();
    ajaxMessage.should.have.property('result', 0);
    ajaxMessage.should.have.property('message', '');
    ajaxMessage.should.have.property('value', {});
    ajaxMessage.should.have.property('items', []);
    done();
  });

  it('Add item', function(done) {
    var ajaxList = new AjaxList();
    ajaxList.addItem(1);
    ajaxList.should.have.property('result', 0);
    ajaxList.should.have.property('message', '');
    ajaxList.should.have.property('value', {});
    ajaxList.should.have.property('items', [1]);
    done();
  });

  it('Add more item', function(done) {
    var ajaxList = new AjaxList();
    ajaxList.addItem(1);
    ajaxList.addItem(2);
    ajaxList.addItem(4);
    ajaxList.addItem(3);
    ajaxList.should.have.property('result', 0);
    ajaxList.should.have.property('message', '');
    ajaxList.should.have.property('value', {});
    ajaxList.should.have.property('items', [1, 2, 4, 3]);
    done();
  });

  it('get return struct empty', function(done) {
    var ajaxList = new AjaxList();
    var struct = ajaxList.getReturnStruct();

    struct.should.eql({
      code: 0,
      success: true,
      result: 0,
      message: '',
      value: {},
      items: []
    });
    done();
  });

  it('get return struct not empty', function(done) {
    var ajaxList = new AjaxList();
    var struct = ajaxList.getReturnStruct();
    ajaxList.addItem(1);
    ajaxList.addItem(2);
    struct.should.eql({
      code: 0,
      success: true,
      result: 0,
      message: '',
      value: {},
      items: [1, 2]
    });
    done();
  });
});
