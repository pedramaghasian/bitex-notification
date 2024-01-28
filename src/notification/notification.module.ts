import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './events/handlers';
import { ConfigModule } from '@nestjs/config';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';

@Module({
  imports: [CqrsModule],
  controllers:[NotificationController],
  providers: [
    NotificationService, 
    ...EventHandlers,
  ],
})
export class NotificationModule { }
