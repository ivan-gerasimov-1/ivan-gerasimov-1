import fastify from 'fastify';
import { loggerFactory } from './logger/loggerFactory.js';

const logger = loggerFactory();

fastify({ logger: true })
	.addHook('onRequest', async (request, reply) => {
		logger.info('onRequest');

		reply.send('OK');
	})
	.listen({ port: 3001 });
