import { UpdateOrderDto } from "src/notification/dtos";
import { IMetadata } from "src/notification/interfaces";
import { BaseEvent } from "./base.event";

export class OrderUpdatedEvent extends BaseEvent {
    constructor(
        public readonly data: UpdateOrderDto,
        public readonly meta: IMetadata,
    ) {
        super();
        this.eventType = Object.getPrototypeOf(this).constructor.name;
      }
  }

