module.exports = {
  apps : [{
    name   : "express-app",
    script : "./index.js",
    watch: process.env.NODE_ENV !== 'production',
    ignore_watch: ['[\/\\]\./', 'node_modules'],
    error_file: './logs/error.log',
    log_file: './logs/access.log',
  }]
}
