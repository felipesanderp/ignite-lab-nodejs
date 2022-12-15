import { Module } from '@nestjs/common';
import { SendNotification } from '../../application/use-cases/send-notification';
import { DatabasesModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabasesModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
