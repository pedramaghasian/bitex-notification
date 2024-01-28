import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventHandlers } from './events/handlers';
import { ConfigModule } from '@nestjs/config';
import { NotificationService } from './notification.service';

@Module({
  imports: [CqrsModule],
  providers: [
    NotificationService, 
    ...EventHandlers,
  ],
})
export class NotificationModule { }
