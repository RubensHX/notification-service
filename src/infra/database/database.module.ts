import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/app/repositories/notification.repository';
import { PrismaNotificationRepository } from './prisma/repositrories/prisma-notification.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
