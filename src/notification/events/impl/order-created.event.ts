import { IMetadata } from "src/notification/interfaces";
import { CreateOrderDto } from "src/notification/dtos";
import { BaseEvent } from "./base.event";

export class OrderCreatedEvent extends BaseEvent {
    constructor(
        public readonly data: CreateOrderDto,
        public readonly meta: IMetadata,
    ) {
        super();
        this.eventType = Object.getPrototypeOf(this).constructor.name;
    }
}

