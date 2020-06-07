const env = process.env.NODE_ENV || 'development';
const rawConfig = require('./config.json');
export const config = rawConfig[env];