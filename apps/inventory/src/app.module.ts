import { QUEUES } from '@app/common';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { InventoryModule } from './inventory/inventory.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './apps/inventory/.env',
    }),
    ClientsModule.register([
      {
        name: 'ORDER_CREATED',
        transport: Transport.RMQ,
        options: {
          queue: QUEUES.ORDER_CREATED,
        },
      },
      {
        name: 'PRODUCT_CREATED',
        transport: Transport.RMQ,
        options: {
          queue: QUEUES.PRODUCT_CREATED,
        },
      },
    ]),
    InventoryModule,
    DatabaseModule,
  ],
})
export class AppModule {}
