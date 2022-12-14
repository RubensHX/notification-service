import { Replace } from '../helpers/Replace';
import { Content } from './Content';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
  recipientId: string;
}

export class Notification {
  private _id: string;
  constructor(private props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id(): string {
    return this._id;
  }

  get content(): Content {
    return this.props.content;
  }

  set content(value: Content) {
    this.props.content = value;
  }

  get category(): string {
    return this.props.category;
  }

  set category(value: string) {
    this.props.category = value;
  }

  get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  set readAt(value: Date | null | undefined) {
    this.props.readAt = value;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  set createdAt(value: Date) {
    this.props.createdAt = value;
  }

  get recipientId(): string {
    return this.props.recipientId;
  }

  set recipientId(value: string) {
    this.props.recipientId = value;
  }
}
