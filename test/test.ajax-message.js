require('should');
var sinon = require('sinon');
var AjaxMessage = require('./../lib/models/AjaxMessage');

describe('ajax-message: AjaxMessage', function() {
  it('Constructor', function(done) {
    var ajaxMessage = new AjaxMessage();
    ajaxMessage.should.have.property('result', 0);
    ajaxMessage.should.have.property('message', '');
    ajaxMessage.should.have.property('value', {});
    done();
  });

  it('Setter (result)', function(done) {
    var ajaxMessage = new AjaxMessage();
    ajaxMessage.setResult(1);
    ajaxMessage.should.have.property('result', 1);
    ajaxMessage.should.have.property('message', '');
    ajaxMessage.should.have.property('value', {});
    done();
  });

  it('Setter (message)', function(done) {
    var ajaxMessage = new AjaxMessage();
    ajaxMessage.setMessage('msg');
    ajaxMessage.should.have.property('result', 0);
    ajaxMessage.should.have.property('message', 'msg');
    ajaxMessage.should.have.property('value', {});
    done();
  });

  it('Setter (value)', function(done) {
    var ajaxMessage = new AjaxMessage();
    ajaxMessage.setValue({'_id': 1});
    ajaxMessage.should.have.property('result', 0);
    ajaxMessage.should.have.property('message', '');
    ajaxMessage.should.have.property('value', {'_id': 1});
    done();
  });

  it('Setter (all)', function(done) {
    var ajaxMessage = new AjaxMessage();
    ajaxMessage.setResult(1);
    ajaxMessage.setMessage('msg');
    ajaxMessage.setValue({'_id': 1});
    ajaxMessage.should.have.property('result', 1);
    ajaxMessage.should.have.property('message', 'msg');
    ajaxMessage.should.have.property('value', {'_id': 1});
    done();
  });

  it('get return struct', function(done) {
    var ajaxMessage = new AjaxMessage();
    var struct = ajaxMessage.getReturnStruct();

    struct.should.eql({
      code: 0,
      success: true,
      result: 0,
      message: '',
      value: {}
    });
    done();
  });

  it('Send empty message', function(done) {
    var res = {
      json: sinon.stub()
    };

    var ajaxMessage = new AjaxMessage();
    ajaxMessage.send(res);

    sinon.assert.calledWith(res.json, sinon.match({
      code: 0,
      success: true,
      result: 0,
      message: '',
      value: {}
    }));
    done();
  });

  it('Send message', function(done) {
    var res = {
      json: sinon.stub()
    };

    var ajaxMessage = new AjaxMessage();
    ajaxMessage.setResult(1);
    ajaxMessage.setMessage('msg');
    ajaxMessage.setValue({'_id': 1});
    ajaxMessage.send(res);

    sinon.assert.calledWith(res.json, sinon.match({
      result: 1,
      message: 'msg',
      value: {'_id': 1}
    }));
    done();
  });

  it('Send error message', function(done) {
    var res = {
      status: function(value) {
        value.should.be.equal(1);
      }
    };

    var ajaxMessage = new AjaxMessage();
    sinon.stub(ajaxMessage, 'send');
    ajaxMessage.sendErrorMessage(res, 1, 'msg');
    ajaxMessage.should.have.property('result', 1);
    ajaxMessage.should.have.property('message', 'msg');
    ajaxMessage.should.have.property('value', {});

    sinon.assert.calledWith(ajaxMessage.send, sinon.match({}));
    done();
  });

  it('Send value', function(done) {
    var res = {
      status: function(status) {
        status.should.be.equal(200);
      }
    };

    var ajaxMessage = new AjaxMessage();
    sinon.stub(ajaxMessage, 'send');
    ajaxMessage.sendValue(res, {'_id': 1});
    ajaxMessage.should.have.property('result', 0);
    ajaxMessage.should.have.property('message', '');
    ajaxMessage.should.have.property('value', {'_id': 1});

    sinon.assert.calledWith(ajaxMessage.send, sinon.match({}));
    done();
  });
});
