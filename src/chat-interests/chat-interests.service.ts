import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { InterestsStateInterface } from 'src/chat/models/newModel';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ChatInterestsService {
	constructor(private dbService: DbService) { }

	async findOne(id: number) {
		return await this.dbService.chat_interests.findUnique({
			where: {
				id: id
			}
		})
	}

	async addOneInterestsByChatId(chat: bigint, interest_id: number) {
		return JSON.parse(
			JSON.stringify(
				await this.dbService.chat_interests.create({
					data: {
						chat, interest_id
					},
				}),
				(key, value) => (typeof value === 'bigint' ? value.toString() : value),
			),
		)
	}

	async addManyInterests(chat: bigint, createDto: InterestsStateInterface[]) {
		const result = createDto.map(async item => {
			await this.dbService.chat_interests.create({
				data: { chat, interest_id: item.interest_id }
			})
		})
	}

	async findByChatId(chat: bigint) {
		const result = await this.dbService.chat_interests.findMany({
			select: {
				interest_id: true
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

	async removeInterestsByChatId(chat: bigint) {
		return await this.dbService.chat_interests.deleteMany({
			where: {
				chat
			}
		})
	}
}
