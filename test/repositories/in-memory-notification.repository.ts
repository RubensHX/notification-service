import { NotificationRepository } from '../../src/app/repositories/notification.repository';
import { Notification } from '../../src/app/entities/Notification';

export class NotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
