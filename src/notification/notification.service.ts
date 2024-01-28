import { Injectable } from '@nestjs/common';


@Injectable()
export class NotificationService {

    constructor() { }
 
    notifier(message: string) {
        console.log(`send to user ${message}.`)
    }
}
