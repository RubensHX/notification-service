import { Controller, Get, Post, Body } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './prisma.service';
import { CreateNotificationDTO } from './DTO/create-notification.dto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    const { recipientId, content, category } = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: content,
        category: category,
        recipientId: recipientId,
      },
    });
  }
}
