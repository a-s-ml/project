import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ComplaintsService {
	constructor(private dbService: DbService) { }

	async create(createComplaintsDto: Prisma.complaintsCreateInput) {
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
