import { randomUUID } from 'node:crypto';
import { NotificationsRepository } from '../../../test/repositories/in-memory-notification.repository';
import { SendNotification } from './send-notification';

describe('SendNotification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new NotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: randomUUID(),
      content: 'Você recebeu uma solicitação de amizade',
      category: 'social',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
