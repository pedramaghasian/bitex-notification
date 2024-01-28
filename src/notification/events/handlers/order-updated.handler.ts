import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import {  OrderUpdatedEvent } from '../impl';
import { NotificationService } from 'src/notification/notification.service';


@EventsHandler(OrderUpdatedEvent)
export class OrderUpdatedEventHandler
  implements IEventHandler<OrderUpdatedEvent> {
  constructor(private readonly svc: NotificationService) { }
  async handle(event: OrderUpdatedEvent) {
    const {id, ...rest} = event.data
    try {
      this.svc.notifier(event.data.name)
    } catch (error) {
      console.log(error)
    }
  }
}