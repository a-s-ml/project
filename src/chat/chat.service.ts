import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { UserInterface } from 'src/interfaces/types/User.interface';
import { GetTgService } from 'src/responses/getTgAPI.service';
import { EventInterface } from './models/events.interface';
import { v4 as uuidv4 } from 'uuid';
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

  async changeStatusChat(chat: bigint, status: number) {
    const chatInDB = await this.findByChatId(chat)
    console.log(chatInDB)
    if (chatInDB) {
      return JSON.parse(
        JSON.stringify(
          await this.dbService.chat.update({
            where: {
              chat,
            },
            data: { status }
          }),
          (key, value) => (typeof value === 'bigint' ? value.toString() : value),
        ),
      )
    }
  }

  async deleteChat(chat: bigint) {
    const chatInDB = await this.findByChatId(chat)
    console.log(chatInDB)
    if (chatInDB) {
      return JSON.parse(
        JSON.stringify(
          await this.dbService.chat.delete({
            where: {
              chat,
            },
          }),
          (key, value) => (typeof value === 'bigint' ? value.toString() : value),
        ),
      )
    }
  }

  async createChat(createChatDto: Prisma.chatCreateInput) {
    const createChta = await this.dbService.chat.create({ data: createChatDto })
    await this.сhatPrivateService.addDefaultPrivate(createChatDto.chat as bigint)
    return JSON.parse(
      JSON.stringify(
        createChta,
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

  async update(chat: bigint, updateChatDto: ProfileTypeRes) {
    const event = new EventInterface();
    event.name = 'updateProfile';
    event.description = `chat: #id${chat}\ndata: ${JSON.stringify(updateChatDto)}`;
    this.eventEmitter.emit('updateProfile', event);
    console.log('updateChatDto', updateChatDto)
    if (updateChatDto.interests) {
      await this.chatInterestsService.removeInterestsByChatId(chat)
      await this.chatInterestsService.addManyInterests(chat, updateChatDto.interests)
      delete updateChatDto.interests
    }
    if (updateChatDto.private) {
      await this.сhatPrivateService.removePrivateByChatId(chat)
      await this.сhatPrivateService.addManyPrivate(chat, updateChatDto.private)
      delete updateChatDto.private
    }
    return JSON.parse(
      JSON.stringify(
        await this.dbService.chat.update({
          where: {
            chat,
          },
          data: updateChatDto
        }),
        (key, value) => (typeof value === 'bigint' ? value.toString() : value),
      ),
    )
  }

  async uploadFile(chat: bigint, images: { img0?: Express.Multer.File[], img1?: Express.Multer.File[], img2?: Express.Multer.File[] }) {
    return JSON.parse(
      JSON.stringify(
        await this.dbService.chat.update({
          where: {
            chat,
          },
          data: {
            img1: images.img0 ? Buffer.from(images.img0[0].buffer).toString('base64') : 'null',
            img2: images.img1 ? Buffer.from(images.img1[0].buffer).toString('base64') : 'null',
            img3: images.img2 ? Buffer.from(images.img2[0].buffer).toString('base64') : 'null'
          },
        }),
        (key, value) => (typeof value === 'bigint' ? value.toString() : value),
      ),
    )
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

  async createResponseFrontend(chat: bigint) {
    const result = await this.findByChatId(chat)
    const interestsProfile = await this.chatInterestsService.findByChatId(chat)
    const privateProfile = await this.сhatPrivateService.findByChatId(chat)
    let responseFrontend: ProfileTypeRes
    return responseFrontend = { ...result, interests: interestsProfile, private: privateProfile }
  }
}
