import * as fs from 'fs'
import * as winston from 'winston'
import 'winston-daily-rotate-file'

const logDir: string = process.env.LOG_DIR || 'log' // Use environment variable or default value

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true })
}

const fileTransport = new winston.transports.DailyRotateFile({
  filename: `${logDir}/%DATE%-results.log`,
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '3d', // Keep logs for 3 days
  level: 'info', // This transport records logs of info level and above (info, warning, error)
})

const logger: winston.Logger = winston.createLogger({
  level: 'debug', // Minimum level
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.json()
  ),
  transports: [
    fileTransport,
    new winston.transports.Console({
      level: 'debug', // Console outputs logs of all levels
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
  ],
})

export default logger
