import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { UserInterface } from 'src/interfaces/types/User.interface';
import { GetTgService } from 'src/responses/getTgAPI.service';
import { EventInterface } from './models/events.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ChatService {
  constructor(
    private dbService: DbService,
    private getTgService: GetTgService,
    private eventEmitter: EventEmitter2,
  ) {}

  async createChat(createChatDto: Prisma.chatCreateInput) {
    return await this.dbService.chat.create({ data: createChatDto });
  }

  async findById(id: number) {
    return await this.dbService.chat.findUnique({
      where: {
        id,
      },
    });
  }

  async findByChatId(chat: bigint) {
    return JSON.parse(
      JSON.stringify(
        await this.dbService.chat.findUnique({
          where: {
            chat,
          },
        }),
        (key, value) => (typeof value === 'bigint' ? value.toString() : value),
      ),
    );
  }

  async findByReferal(id: string) {
    return JSON.parse(
      JSON.stringify(
        await this.dbService.chat.findMany({
          where: {
            ref: id,
          },
        }),
        (key, value) => (typeof value === 'bigint' ? value.toString() : value),
      ),
    );
  }

  async countByReferal(id: string) {
    return await this.dbService.chat.count({
      where: {
        ref: id,
      },
    });
  }

  async update(chat: bigint, updateChatDto: Prisma.chatUpdateInput) {
    return JSON.parse(
      JSON.stringify(
        await this.dbService.chat.update({
          where: {
            chat,
          },
          data: updateChatDto,
        }),
        (key, value) => (typeof value === 'bigint' ? value.toString() : value),
      ),
    );
  }

  async verificationExistence(from: UserInterface) {
    const checkUser = await this.findByChatId(from.id);
    if (!checkUser) {
      await this.createChat({
        chat: from.id,
        bot: from.is_bot ? 1 : 0,
        id_str: uuidv4().replace("-", ""),
        dateUnix: Math.floor(new Date().getTime() / 1000)
      });
      const event = new EventInterface();
      event.name = 'newUser';
      event.description = `chat: #id${from.id}\nusername: @${from.username}`;
      this.eventEmitter.emit('event', event);
    }
  }

  async groupInfoById(chat: bigint) {
    return await this.getTgService.tgGetChat(chat);
  }

  async groupMemberCountById(chat: bigint) {
    return await this.getTgService.tgGetChatMemberCount(chat);
  }

  async tgGetFilePhoto(unic_id: string) {
    return await this.getTgService.tgGetFilePhoto(unic_id);
  }

  async removeByChat(chat_id: bigint) {
    return await this.dbService.chat.delete({
      where: {
        chat: chat_id,
      },
    });
  }

  async removeById(id: number) {
    return await this.dbService.chat.delete({
      where: {
        id,
      },
    });
  }
}
