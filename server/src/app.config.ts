const env = process.env.NODE_ENV || 'development';
import { appConfig } from './config';
export const config = (appConfig as any)[env];
