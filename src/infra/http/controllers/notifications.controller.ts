import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller()
export class NotificationsController {
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
  }
}
