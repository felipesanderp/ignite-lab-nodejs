import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { DatabasesModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';

@Module({
  imports: [DatabasesModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    ReadNotification,
    UnreadNotification,
    GetRecipientNotifications,
  ],
})
export class HttpModule {}
