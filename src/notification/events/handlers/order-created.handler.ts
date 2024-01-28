import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { OrderCreatedEvent } from '../impl/order-created.event';
import { NotificationService } from 'src/notification/notification.service';

@EventsHandler(OrderCreatedEvent)
export class OrderCreatedEventHandler
  implements IEventHandler<OrderCreatedEvent> {
  constructor(private readonly svc: NotificationService) { }
  async handle(event: OrderCreatedEvent) {
    try {
      this.svc.notifier(event.data.name)
    } catch (error) {
      console.log(error)
    }
  }
}