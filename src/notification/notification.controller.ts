import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';


@Controller()
export class NotificationController {
  constructor(private readonly svc: NotificationService) { }


}
