import Pino from 'pino';

export function loggerFactory() {
	return Pino(
		Pino.destination({
			minLength: 4096,
			sync: false,
		})
	);
}
