import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationDTO {
  @IsNotEmpty({ message: 'Recipient ID is required' })
  @IsUUID()
  recipientId: string;

  @IsNotEmpty({ message: 'Content is required' })
  @Length(5, 255)
  content: string;

  @IsNotEmpty({ message: 'Category is required' })
  category: string;
}
