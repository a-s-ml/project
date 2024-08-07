import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { UserInterface } from 'src/interfaces/types/User.interface';
import { GetTgService } from 'src/responses/getTgAPI.service';
import { EventInterface } from './models/events.interface';
import { v4 as uuidv4 } from 'uuid';
import { InlineKeyboardMarkupInterface } from 'src/interfaces/types/InlineKeyboardMarkup.interface';
import { ChatPrivateService } from 'src/chat-private/chat-private.service';
import { ProfileTypeRes } from './models/newModel';
import { ChatInterestsService } from 'src/chat-interests/chat-interests.service';

@Injectable()
export class ChatService {
  constructor(
    private dbService: DbService,
    private getTgService: GetTgService,
    private eventEmitter: EventEmitter2,
    private сhatPrivateService: ChatPrivateService,
    private chatInterestsService: ChatInterestsService
  ) { }

  async createChat(createChatDto: Prisma.chatCreateInput) {
    await this.сhatPrivateService.addDefaultPrivate(createChatDto.chat as bigint)
    return JSON.parse(
      JSON.stringify(
        await this.dbService.chat.create({ data: createChatDto }),
        (key, value) => (typeof value === 'bigint' ? value.toString() : value),
      ),
    )
  }

  async findById(id: number) {
    return await this.dbService.chat.findUnique({
      where: {
        id,
      },
    })
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
    )
  }

  async InfoByChatId(chat: bigint) {
    const result = await this.createResponseFrontend(chat)
    return JSON.parse(
      JSON.stringify(
        result,
        (key, value) => (typeof value === 'bigint' ? value.toString() : value),
      ),
    )
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
    )
  }

  async countByReferal(id: string) {
    return await this.dbService.chat.count({
      where: {
        ref: id,
      },
    })
  }

  async update(chat: bigint, updateChatDto: Prisma.chatUpdateInput) {
    const replyMarkup: InlineKeyboardMarkupInterface = {
      inline_keyboard: [
        [
          {
            text: 'Да',
            url: `https://api80q.ru/dating/chat/moderateOK/${chat}`,
          },
          {
            text: 'Блок',
            url: `https://api80q.ru/dating/chat/moderateBlock/${chat}`,
          },
        ],
      ],
    };
    const event = new EventInterface();
    event.name = 'profile';
    event.description = `${process.env.SEND_MESSAGE}chat_id=${process.env.ADMINCHANNELID}&text=${encodeURIComponent(`#${event.name}\nПользователь #id${chat} изменение анкеты\n\n${JSON.stringify(updateChatDto)}`)}&reply_markup=${JSON.stringify(replyMarkup)}&disable_web_page_preview=true&parse_mode=HTML`;
    this.eventEmitter.emit('profile', event);
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
    )
  }

  async moderate(chat: bigint, mod: number) {
    const event = new EventInterface();
    event.name = 'moderate';
    event.description = `Модерация аекеты пользователя #id${chat}\nСтатус :${mod}`;
    this.eventEmitter.emit('moderate', event);
    return JSON.parse(
      JSON.stringify(
        await this.dbService.chat.update({
          where: {
            chat,
          },
          data: {
            status: mod
          }
        }),
        (key, value) => (typeof value === 'bigint' ? value.toString() : value),
      ),
    )
  }

  async uploadFile(chat: bigint, file: (Express.Multer.File | null)[]) {
    console.log('chat update', chat)
    console.log('file update', file)
  }

  async uploadFile2(chat: bigint, file: Express.Multer.File | null, id: number) {
    console.log('chat update', chat)
    console.log('id update', id)
    console.log('file update', file)
    if (id === 0) {
      return JSON.parse(
        JSON.stringify(
          await this.dbService.chat.update({
            where: {
              chat,
            },
            data: {
              img1: Buffer.from(file.buffer).toString('base64')
            },
          }),
          (key, value) => (typeof value === 'bigint' ? value.toString() : value),
        ),
      )
    }
    if (id === 1) {
      return JSON.parse(
        JSON.stringify(
          await this.dbService.chat.update({
            where: {
              chat,
            },
            data: {
              img2: Buffer.from(file.buffer).toString('base64')
            },
          }),
          (key, value) => (typeof value === 'bigint' ? value.toString() : value),
        ),
      )
    }
    if (id === 2) {
      return JSON.parse(
        JSON.stringify(
          await this.dbService.chat.update({
            where: {
              chat,
            },
            data: {
              img3: Buffer.from(file.buffer).toString('base64')
            },
          }),
          (key, value) => (typeof value === 'bigint' ? value.toString() : value),
        ),
      )
    }
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
    })
  }

  async moderateOK(chat: bigint) {
    return JSON.parse(
      JSON.stringify(
        await this.dbService.chat.update({
          where: {
            chat,
          },
          data: {
            status: 2
          },
        }),
        (key, value) => (typeof value === 'bigint' ? value.toString() : value),
      ),
    )
  }

  async moderateBlock(chat: bigint) {
    return JSON.parse(
      JSON.stringify(
        await this.dbService.chat.update({
          where: {
            chat,
          },
          data: {
            status: 4
          },
        }),
        (key, value) => (typeof value === 'bigint' ? value.toString() : value),
      ),
    )
  }

  async change(chat: bigint, body: any) {
    console.log('chat update', chat)
    console.log('body update', body)
  }













  async createResponseFrontend(chat: bigint) {
    const result = await this.findByChatId(chat)
    const interestsProfile = await this.chatInterestsService.findByChatId(chat)
    const privateProfile = await this.сhatPrivateService.findByChatId(chat)
    let interests: number[] = []
    let responseFrontend: ProfileTypeRes
    return responseFrontend = { ...result, interests: interestsProfile.map((item) => interests.push(item.interest_id)), private: privateProfile }
  }
}
