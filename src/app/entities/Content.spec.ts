import { Content } from './Content';

describe('Content', () => {
  it('should be able to create a notification content', () => {
    expect(() => new Content('Você recebeu uma notificacao')).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('1234')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
