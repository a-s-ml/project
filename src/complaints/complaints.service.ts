import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EventInterface } from 'src/chat/models/events.interface';

@Injectable()
export class ComplaintsService {
	constructor(
		private dbService: DbService,
		private eventEmitter: EventEmitter2,
	) { }

	async create(createComplaintsDto: Prisma.complaintsCreateInput) {
		const event = new EventInterface();
		event.name = 'complaints';
		event.description = `Пользователь #id${createComplaintsDto.from} отправил жалобу тип: ${createComplaintsDto.type} на пользователю #id${createComplaintsDto.to}`;
		this.eventEmitter.emit('complaints', event);
		return JSON.parse(
			JSON.stringify(await this.dbService.complaints.create({ data: createComplaintsDto }),
				(key, value) => (typeof value === 'bigint' ? value.toString() : value),
			),
		);
	}

	async findOne(id: number) {
		return await this.dbService.complaints.findUnique({
			where: {
				id: id
			}
		})
	}
}
