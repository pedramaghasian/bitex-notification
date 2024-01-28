import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventStoreModule } from './notification/eventstore/eventstore.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NotificationModule } from './notification/notification.module';
import { OrderCreatedEvent, OrderUpdatedEvent } from './notification/events/impl';

@Module({
  imports: [
    CqrsModule,
    EventStoreModule.registerAsync({
      imports: [ConfigModule, CqrsModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        username: configService.get('EVENTSTORE_USERNAME', 'admin'),
        password: configService.get('EVENTSTORE_PASSWORD', 'changeit'),
        hostname: configService.get('EVENTSTORE_HOSTNAME', 'localhost'),
        port: parseInt(configService.get('EVENTSTORE_PORT', '1113'), 10),
      }),
      subscriptions: {
        orders__order_updated_event: '$et-OrderUpdatedEvent',
        orders__order_created_event: '$et-OrderCreatedEvent',
        notifications: '$ce-notifications',
      },
      transformers: {
        OrderCreatedEvent:
          (event: any) => new OrderCreatedEvent(event.data, event.meta),
        OrderUpdatedEvent:
          (event: any) => new OrderUpdatedEvent(event.data, event.meta),
      },
    }),
    NotificationModule
  ]
})
export class AppModule { }
