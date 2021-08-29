import Koa from 'koa';
import { loggerFactory } from './logger/loggerFactory.js';

const EStateField = {
  RESPONSE_TIME: 'responseTime',
};

const logger = loggerFactory();

new Koa()
  .use(async (ctx, next) => {
    await next();

    const responseTime = ctx.state[EStateField.RESPONSE_TIME];

    logger.info(`${ctx.method} ${ctx.url} - ${responseTime}ms`);
  })
  .use(async (ctx, next) => {
    const start = Date.now();

    await next();

    const duration = Date.now() - start;

    ctx.state[EStateField.RESPONSE_TIME] = duration;
  })
  .use((ctx) => {
    ctx.body = 'OK';
  })
  .listen(3000);
