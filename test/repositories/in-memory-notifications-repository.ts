import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Notification } from '@application/entities/notification';

export class InMemoryNotificationsRepository
  // eslint-disable-next-line prettier/prettier
  implements NotificationsRepository {

  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
