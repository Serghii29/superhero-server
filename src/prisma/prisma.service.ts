import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          // eslint-disable-next-line max-len
          url: 'postgres://Serghii29:txc1IGaBHW5z@ep-purple-waterfall-422692-pooler.us-east-2.aws.neon.tech:5434/neondb?pgbouncer=true&connect_timeout=10',
        },
      },
    });
  }
}
