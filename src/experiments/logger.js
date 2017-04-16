/**
 * Logging Levels
 * { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
 */

import winston from 'winston';
const log = new winston.Logger({ exitOnError: false });

log.addConsole = config => log.add(winston.transports.Console, config);
log.addFile = config => log.add(winston.transports.File, config);

export default log;
