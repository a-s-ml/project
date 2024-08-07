import { Injectable } from '@nestjs/common';
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
}
