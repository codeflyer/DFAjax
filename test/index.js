process.env.NODE_CONFIG_PERSIST_ON_CHANGE = 'N';
process.env.NODE_ENV = 'test';

var path = require('path');
var rootPath = path.join(__dirname, '../', '/');
global.ROOT_PATH_FOR_TEST = rootPath;

require('should');

var log4js = require('log4js');
var logger = log4js.getLogger('main');
logger.setLevel('TRACE');
