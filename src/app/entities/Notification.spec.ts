import { Content } from './Content';
import { Notification } from './Notification';
import { randomUUID } from 'node:crypto';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    expect(
      () =>
        new Notification({
          content: new Content('Você recebeu uma solicitação de amizade'),
          category: 'social',
          recipientId: randomUUID(),
        }),
    ).toBeTruthy();
  });
});
