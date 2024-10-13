import Pino from 'pino';

export function loggerFactory() {
	return Pino();
}
