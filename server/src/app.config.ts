const env = process.env.NODE_ENV || 'development';
// const rawConfig = require('./config.json');
import * as rawConfig from './config.json';
export const config = (rawConfig as any)[env];