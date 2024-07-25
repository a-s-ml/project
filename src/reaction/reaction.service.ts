import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EventInterface } from '../chat/models/events.interface';

@Injectable()
export class ReactionService {
	constructor(
		private dbService: DbService,
		private eventEmitter: EventEmitter2,
	) { }

	async create(createReactionDto: Prisma.complaintsCreateInput) {
		const event = new EventInterface();
		event.name = 'reactions';
		event.description = `Пользователь #id${createReactionDto.from} поставил реакцию тип: ${createReactionDto.type} пользователю #id${createReactionDto.to}`;
		this.eventEmitter.emit('reactions', event);
		return JSON.parse(
			JSON.stringify(await this.dbService.reaction.create({ data: createReactionDto }),
				(key, value) => (typeof value === 'bigint' ? value.toString() : value),
			),
		);
	}

	async findOne(id: number) {
		return await this.dbService.reaction.findUnique({
			where: {
				id: id
			}
		})
	}
}
