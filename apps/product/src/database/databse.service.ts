import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'apps/product/prisma/generated/prisma';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
