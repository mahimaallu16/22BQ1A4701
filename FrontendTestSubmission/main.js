import { log } from './logger.js';

document.getElementById('logButton').addEventListener('click', () => {
  log('main.js', 'INFO', 'FrontendTestSubmission', 'Test log from frontend');
});
