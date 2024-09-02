import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrivateStateInterface } from 'src/chat/models/newModel';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ChatPrivateService {
	constructor(private dbService: DbService) { }

	async addPrivate(createChatDto: Prisma.chat_privateCreateInput) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.chat_private.create({ data: createChatDto }),
				(key, value) => (typeof value === 'bigint' ? value.toString() : value),
			),
		)
	}

	async addOnePrivateByChatId(chat: bigint, value: number, type: number) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.chat_private.create({
					data: {
						chat, value, type
					},
				}),
				(key, value) => (typeof value === 'bigint' ? value.toString() : value),
			),
		)
	}

	async addManyPrivate(chat: bigint, createDto: PrivateStateInterface[]) {
		const result = createDto.map(async item => {
			await this.dbService.chat_private.create({
				data: { chat, type: item.type, value: item.value }
			})
		})
	}

	async removePrivateByChatId(chat: bigint) {
		return await this.dbService.chat_private.deleteMany({
			where: {
				chat: chat
			}
		})
	}

	async addDefaultPrivate(chat: bigint) {
		await this.addPrivate({ chat: chat, type: 1, value: 4 })
		await this.addPrivate({ chat: chat, type: 2, value: 8 })
		await this.addPrivate({ chat: chat, type: 3, value: 13 })
		await this.addPrivate({ chat: chat, type: 4, value: 17 })
		await this.addPrivate({ chat: chat, type: 5, value: 22 })
	}

	async findOne(id: number) {
		return await this.dbService.chat_private.findUnique({
			where: {
				id: id
			}
		})
	}

	async findByChatId(chat: bigint) {
		const result = await this.dbService.chat_private.findMany({
			select: {
				type: true,
				value: true
			},
			where: {
				chat,
			},
		})
		return JSON.parse(
			JSON.stringify(
				result,
				(key, value) => (typeof value === 'bigint' ? value.toString() : value),
			),
		)
	}
}
