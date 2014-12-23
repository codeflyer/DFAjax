require('should');
var AjaxFormMessage = require('./../lib/models/AjaxFormMessage');
describe('ajax-message: AjaxFormMessage', function() {
  it('Constructor', function(done) {
    var ajaxFormMessage = new AjaxFormMessage();
    ajaxFormMessage.should.have.property('result', 0);
    ajaxFormMessage.should.have.property('message', '');
    ajaxFormMessage.should.have.property('value', {});
    ajaxFormMessage.should.have.property('errors', []);
    ajaxFormMessage.should.have.property('errorCount', 0);
    done();
  });

  it('Add error', function(done) {
    var ajaxFormMessage = new AjaxFormMessage();
    ajaxFormMessage.addError('nomeErrore', 'errore');
    ajaxFormMessage.should.have.property('result', 1);
    ajaxFormMessage.should.have.property('message', '');
    ajaxFormMessage.should.have.property('value', {});
    ajaxFormMessage.errors.should.eql({
      'nomeErrore': ['errore']
    });
    done();
  });

  it('Add more error', function(done) {
    var ajaxFormMessage = new AjaxFormMessage();
    ajaxFormMessage.addError('nomeErrore', 'errore');
    ajaxFormMessage.addError('nomeErrore', 'errore2');
    ajaxFormMessage.should.have.property('result', 1);
    ajaxFormMessage.should.have.property('message', '');
    ajaxFormMessage.should.have.property('value', {});
    ajaxFormMessage.errors.should.eql({
      'nomeErrore': ['errore', 'errore2']
    });
    done();
  });

  it('Add more more error', function(done) {
    var ajaxFormMessage = new AjaxFormMessage();
    ajaxFormMessage.addError('nomeErrore', 'errore');
    ajaxFormMessage.addError('nomeErrore', 'errore2');
    ajaxFormMessage.addError('nomeErrore2', 'errore3');
    ajaxFormMessage.should.have.property('result', 1);
    ajaxFormMessage.should.have.property('message', '');
    ajaxFormMessage.should.have.property('value', {});
    ajaxFormMessage.errors.should.eql({
      'nomeErrore': ['errore', 'errore2'],
      'nomeErrore2': ['errore3']
    });
    done();
  });

  it('get return struct empty', function(done) {
    var ajaxFormMessage = new AjaxFormMessage();
    var struct = ajaxFormMessage.getReturnStruct();

    struct.should.eql({
      code: 0,
      success: true,
      result: 0,
      message: '',
      value: {},
      errors: {},
      errorCount: 0
    });
    done();
  });

  it('get return struct empty', function(done) {
    var ajaxFormMessage = new AjaxFormMessage();
    ajaxFormMessage.addError('nomeErrore', 'errore');
    ajaxFormMessage.addError('nomeErrore', 'errore2');
    ajaxFormMessage.addError('nomeErrore2', 'errore3');

    var struct = ajaxFormMessage.getReturnStruct();

    struct.should.eql({
      code: 1,
      success: false,
      result: 1,
      message: '',
      value: {},
      errors: {
        'nomeErrore': ['errore', 'errore2'],
        'nomeErrore2': ['errore3']
      },
      errorCount: 3
    });
    done();
  });

  it('has Error', function(done) {
    var ajaxFormMessage = new AjaxFormMessage();
    ajaxFormMessage.hasError().should.equal(false);
    ajaxFormMessage.addError('nomeErrore', 'errore');
    ajaxFormMessage.hasError().should.equal(true);
    done();
  });
});
