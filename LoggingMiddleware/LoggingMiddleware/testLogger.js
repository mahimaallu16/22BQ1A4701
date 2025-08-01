const { log } = require('./logger');

async function test() {
  const stack = 'testLogger.js';
  const level = 'info';
  const packageName = 'LoggingMiddleware';
  const message = 'This is a test log from testLogger.js';

  const result = await log(stack, level, packageName, message);
  console.log('Test log result:', result);
}

test();
