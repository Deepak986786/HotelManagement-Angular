import { NgxLoggerLevel } from "ngx-logger";

export const environment = {
  production: true,
  logging:{
    level:NgxLoggerLevel.TRACE,
    serverLogLevel:NgxLoggerLevel.TRACE,
    serverLoggingUrl: 'https://localhost:5000/api/logs',
    disableConsoleLogging: false
  }
};
