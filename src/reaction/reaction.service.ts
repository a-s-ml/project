import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ReactionService {
	constructor(private dbService: DbService) { }

	async create(createReactionDto: Prisma.complaintsCreateInput) {
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
